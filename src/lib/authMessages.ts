/** Shown after Firebase accepts sending the verification email (delivery is async). */
export function afterVerificationEmailSent(email: string): string {
  return [
    `We asked Firebase to send a verification link to:\n${email}`,
    "",
    "If you don�"t see it within a few minutes:",
    "⬢ Check Spam, Junk, Promotions, and �SUpdates⬝ tabs (Gmail often hides them).",
    "⬢ Search your mail for �SFirebase⬝ or �Sverify⬝.",
    "⬢ Tap �SResend verification email⬝ on this page.",
    "",
    "School or work inboxes sometimes block automated mail  -  try a personal Gmail if needed.",
  ].join("\n");
}
