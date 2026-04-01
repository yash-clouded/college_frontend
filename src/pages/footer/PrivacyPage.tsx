export default function PrivacyPage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 pt-24 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Privacy Policy</h1>
          <a
            href="/privacy-policy.pdf"
            download="Collegeconnects-Privacy-Policy.pdf"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Download
          </a>
        </div>

        <div className="rounded-2xl border border-border/60 overflow-hidden bg-background/30 h-[78vh]">
          <iframe
            src="/privacy-policy.pdf#view=FitH"
            title="Privacy Policy"
            className="w-full h-full border-0 bg-white"
          />
        </div>
      </div>
    </div>
  );
}