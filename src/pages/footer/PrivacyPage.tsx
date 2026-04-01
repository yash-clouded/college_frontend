export default function PrivacyPage() {
  const content = `Privacy Policy

Last Updated: 01 - 04 - 2026.

Welcome to CollegeConnect ("we", "our", or "us"). We are committed to protecting your privacy and ensuring transparency regarding how your personal information is collected, used, and safeguarded. This Privacy Policy explains how we handle your data when you access or use our platform.

By using CollegeConnect, you agree to the terms outlined in this Privacy Policy.

1. Information We Collect

We collect information to provide and improve our services. The types of data we collect include:

A. Personal Information

● Full name
● Email address
● Phone number
● Profile details (e.g., college, branch, academic year, bio, and preferences)
● Profile images (if uploaded)

B. Account and Authentication Data

● Login credentials via email-based authentication systems
● Verification-related information

C. Usage Information

● Platform interactions (e.g., pages visited and features used)
● Booking activity and session history
● User preferences and settings

D. Communication Data

● Information shared when contacting support or submitting queries through the platform
● Responses to emails or platform notifications

E. Payment Information

Payments are processed through trusted third-party payment gateways. We do not store sensitive financial information, such as credit card numbers, CVVs, or bank credentials. We may only store transaction-related metadata (such as payment status, amount, and transaction ID) for operational purposes.

2. How We Use Your Information

We use the collected information to:

● Create and manage user accounts.
● Facilitate connections and interactions between users on the platform.
● Enable the booking and scheduling of advisory sessions.
● Improve platform functionality and the overall user experience.
● Provide responsive customer support.
● Send important notifications, including booking confirmations, reminders, and system updates.
● Ensure platform safety, maintain integrity, and prevent fraud.
● Comply with applicable legal obligations.

3. Sharing of Information

We respect your privacy and do not sell your personal data. We may share your information only in the following circumstances:

● With trusted third-party service providers (such as authentication services, hosting, analytics, and payment processors) strictly for operational purposes.
● When required by law, regulation, or legal process.
● To protect the rights, safety, and integrity of our users and the platform.

Note: All third-party services are expected to maintain appropriate data protection standards.

4. Data Retention

We retain your information only for as long as necessary to:

● Provide our services effectively.
● Comply with legal obligations.
● Resolve disputes.
● Enforce our agreements.

Users may request the deletion of their data at any time, subject to applicable legal requirements.

5. User Rights

As a user, you have the right to:

● Access your personal data.
● Correct or update your inaccurate information.
● Request the deletion of your account and associated data.
● Withdraw your consent where applicable.

To exercise any of these rights, please contact us through the platform or via the email provided below.

6. Children's Privacy

CollegeConnect is accessible to minors; however, use by individuals under the age of 18 must be done with the active involvement and consent of a parent or legal guardian. We do not knowingly collect personal data from minors without appropriate consent. If we identify that such data has been collected without consent, we will take immediate steps to remove it.

7. Security

We implement reasonable technical and organizational measures to protect your user data from unauthorized access, misuse, or disclosure. However, no digital system is completely secure, and we encourage users to take necessary personal precautions while using the platform.

8. International Users

CollegeConnect may be accessed by users from various countries. By using our platform, you understand and agree that your data may be processed and stored in jurisdictions that may have different data protection laws than your country of residence.

9. Communication and Notifications

To keep you informed, we may send:

● Email notifications related to your account activity, bookings, and platform updates.
● Service-related communications that are necessary for platform functionality.

Users may opt out of non-essential promotional communications where applicable.

10. Changes to This Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be indicated by a revised "Last Updated" date at the top of this page. Your continued use of the platform after these changes constitutes your acceptance of the revised policy.

11. Contact Us

For any questions, concerns, or requests regarding this Privacy Policy, please reach out to us at:

Email: support@collegeconnects.co.in

This Privacy Policy is designed to ensure transparency, build trust, and guarantee the responsible handling of user data while delivering a secure and reliable platform experience.`;

  const lines = content.split('\n');

  return (
    <div className="min-h-screen px-4 sm:px-6 pt-24 pb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <div className="text-foreground leading-relaxed space-y-3 whitespace-pre-wrap">
          {lines.map((line, index) => (
            <div key={index}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}