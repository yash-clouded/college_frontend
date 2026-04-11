import { Button } from "@/components/ui/button";
import { PasswordField } from "@/components/ui/password-field";
import { getFirebaseAuth } from "@/lib/firebase";
import { formatFirebaseAuthError } from "@/lib/firebaseAuthErrors";
import { getMyStudentProfile, getMyAdvisorProfile } from "@/lib/restApi";
import { Link, useNavigate } from "@tanstack/react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Loader, LogIn } from "lucide-react";
import { useState } from "react";
import { AuthShell } from "./AuthShell";
import { ForgotPasswordOtpDialog } from "@/components/auth/ForgotPasswordOtpDialog";

export default function SigninPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState<"student" | "advisor">("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [forgotOpen, setForgotOpen] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }
    setBusy(true);
    try {
      // 1. Firebase Auth
      const userCred = await signInWithEmailAndPassword(
        getFirebaseAuth(),
        email.trim(),
        password,
      );
      const token = await userCred.user.getIdToken();

      // 2. Explicit Role Check
      try {
        if (role === "student") {
          await getMyStudentProfile(token);
          localStorage.setItem("user_role", "student");
          navigate({ to: "/student/dashboard" });
        } else {
          await getMyAdvisorProfile(token);
          localStorage.setItem("user_role", "advisor");
          navigate({ to: "/advisor/dashboard" });
        }
      } catch (err) {
        // If fetch fails, it means the user logged in but doesn't have the profile for the selected role
        alert(`Profile not found. You don't have a ${role} account. Try switching roles or signing up.`);
        await getFirebaseAuth().signOut();
      }
    } catch (e) {
      alert(formatFirebaseAuthError(e));
    } finally {
      setBusy(false);
    }
  }

  return (
    <AuthShell
      title="Welcome Back"
      subtitle="Sign in to your account. Please select your role below."
    >
      <div className="flex flex-col gap-6">
        {/* Role Selection */}
        <div className="flex p-1 bg-muted rounded-xl gap-1">
          <button
            onClick={() => setRole("student")}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              role === "student"
                ? "bg-background shadow-sm text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            I'm a Student
          </button>
          <button
            onClick={() => setRole("advisor")}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              role === "advisor"
                ? "bg-background shadow-sm text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            I'm an Advisor
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-muted-foreground">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background border border-border rounded-xl px-4 py-2 text-sm text-foreground focus:outline-none focus:border-neon-teal transition-colors"
          />
        </div>

        <PasswordField
          label="Password"
          value={password}
          onChange={setPassword}
          variant="teal"
          autoComplete="current-password"
        />

        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Button
            onClick={handleLogin}
            disabled={busy}
            className={`flex-1 font-semibold rounded-xl h-11 transition-all duration-300 ${
              role === "student"
                ? "bg-neon-teal hover:bg-neon-teal/90 text-background glow-teal"
                : "bg-neon-orange hover:bg-neon-orange/90 text-black glow-orange"
            }`}
          >
            {busy ? (
              <Loader size={18} className="animate-spin" />
            ) : (
              <>
                <LogIn size={18} className="mr-2" />
                Sign In
              </>
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => setForgotOpen(true)}
            className="border-border text-foreground hover:bg-muted rounded-xl h-11 transition-all"
          >
            Forgot Password
          </Button>
        </div>

        <ForgotPasswordOtpDialog
          open={forgotOpen}
          onOpenChange={setForgotOpen}
          role={role}
          email={email}
          onEmailChange={setEmail}
          accent={role === "student" ? "teal" : "orange"}
          onResetSuccess={async (e, newPass) => {
            await signInWithEmailAndPassword(getFirebaseAuth(), e, newPass);
            // After reset, try login logic again
            handleLogin();
          }}
        />

        <p className="text-center text-sm text-muted-foreground mt-2">
          New here?{" "}
          <Link to="/auth/signup" className="text-neon-teal font-medium hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
