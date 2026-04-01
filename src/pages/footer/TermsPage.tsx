export default function TermsPage() {
  const content = `TERMS AND CONDITIONS

Last Updated: March 25, 2026

Welcome to CollegeConnect. These Terms and Conditions ("Terms") constitute a legally binding agreement between you and CollegeConnect regarding your access to and use of our platform, including our website and all related services (collectively, the "Platform"). By signing up, accessing, or using the Platform as an Enquirer or an Advisor, you signify that you have read, understood, and agree to be bound by these Terms.

IMPORTANT NOTICE: VIOLATING THESE TERMS AND CONDITIONS CONSTITUTES A CHARGEABLE OFFENSE AND MAY LEAD TO IMMEDIATE TERMINATION OF SERVICE, FINANCIAL PENALTIES, AND FORMAL LEGAL ACTIONS.

1. DEFINITIONS

• "Platform": Refers to the CollegeConnect student-to-student connection interface and all associated technologies.
• "Enquirer": Refers to students or parents seeking authentic information regarding educational institutions.
• "Advisor": Refers to current undergraduate students verified by the Platform to provide personal insights and experiences.
• "Session": Refers to the 1:1 video or audio interaction between an Enquirer and an Advisor facilitated through the Platform.

2. ELIGIBILITY AND ACCOUNT REGISTRATION

• Account Accuracy: All users must provide accurate, current, and complete information during the registration process.
• Advisor Verification: To maintain platform integrity, Advisors must submit valid college ID cards. CollegeConnect collects this data strictly for verification to ensure only genuine students act as Advisors.
• Data Security: ID data is stored securely and is never shared with third parties or other users.
• Credential Responsibility: Users are solely responsible for maintaining the confidentiality of their login credentials.

3. SESSION ATTENDANCE AND CONDUCT

• Identity Integrity: Only the verified Advisor whose ID was approved is permitted to attend the Session.
• Substitute Prohibition: If any person other than the assigned Advisor attends a Session, it is deemed a material breach of these Terms. This is a punishable and chargeable offense.
• Enquirer Attendance: Only the registered student and their parents are permitted to attend the Session. The attendance of any unauthorized third parties is strictly prohibited and constitutes a violation of these Terms.
• Advisor Representation: Advisors must provide honest, unbiased insights based solely on their personal experience.

4. SESSION TIMING AND RESCHEDULING

• Enquirer Tardiness: If an Enquirer fails to join the generated Session within 15 minutes of the scheduled start time, the Advisor reserves the right to cancel the Session. Rescheduling is only permitted if the Advisor explicitly accepts the request.
• Advisor Tardiness: If an Advisor fails to join the Session within 15 minutes of the scheduled start time, the Advisor is obligated to reschedule the Session. In such instances, the Advisor must provide an additional 20 minutes of extra time beyond the originally assigned duration as a penalty for the delay.

5. STRICT PROHIBITIONS AND PENALTIES

• No Personal Contact Sharing: Users are strictly prohibited from sharing personal contact details—including phone numbers, email addresses, or social media handles (Instagram, LinkedIn, etc.)—during Sessions or through Platform messaging.
• Financial Penalty: Any attempt by a student or Advisor to share contact information is a chargeable offense. Violators may be charged a fine of approximately ₹20,000 and may face formal legal action for breach of contract.
• No Recording: Neither the Enquirer nor the Advisor is permitted to record the Session (audio or video) through the Platform or any external third-party software.
• Communication Channels: All interactions must occur exclusively through the secure communication tools provided by CollegeConnect.

6. PAYMENT AND MONETIZATION

• Session Pricing: The Platform follows a "pay-per-session" model. The Enquirer pays the specific amount designated by the Advisor for every Session attended.
• Advisor Earnings: The Advisor will receive their designated payment only after the successful completion of the Session.
• Disbursement Timeline: Funds earned by the Advisor will be credited to their registered account within 24 to 48 hours following the completion of the Session.
• Platform Fees: CollegeConnect charges a service fee on each transaction to maintain and operate the digital infrastructure.

7. REPORTING AND DISPUTE RESOLUTION

• Reporting System: Users have access to a "Report" tool for genuine grievances.
• Misuse of Reporting: Misusing the report option with false or malicious data is prohibited and may lead to account suspension.
• Finality of Decisions: CollegeConnect reserves the right to mediate disputes regarding session attendance and technical failures.

8. TECHNOLOGY AND DATA PRIVACY

• Infrastructure: The Platform utilizes React for the frontend, Node.js for the backend, MongoDB for data management, and Firebase for secure authentication.
• Security Measures: We employ robust security via Firebase and secure hosting. However, the Platform is not liable for unauthorized access resulting from user negligence.

9. LIMITATION OF LIABILITY

• Information Accuracy: While Advisors are verified, CollegeConnect does not guarantee the absolute accuracy or quality of the opinions shared.
• Advisor Risk: All reviews and information provided by the Advisor are given at their own risk.
• Legal Indemnity: CollegeConnect acts strictly as a facilitator. The Platform shall not be held legally responsible for the specific reviews, advice, or claims made by an Advisor to a student.
• Decision Making: CollegeConnect is not liable for any educational, personal, or financial decisions made by users based on Advisor interactions.

10. INTELLECTUAL PROPERTY

• Ownership: The CollegeConnect name, logo, and all content generated by the Platform are the exclusive property of the startup.
• Restrictions: Users may not reproduce, record, or redistribute Platform content without prior written consent.

11. TERMINATION AND MODIFICATIONS

• Right to Terminate: CollegeConnect reserves the right to immediately suspend or terminate any account that violates these Terms, engages in commercialized bias, or misuses the rating system.
• Legal Action: Misuse of the Platform by students or advisors is a chargeable offense and will be met with the full extent of legal and administrative actions available.
• Updates to Terms: We reserve the right to modify these Terms at any time. Continued use of the Platform after changes are posted constitutes acceptance of the updated Terms.`;

  const lines = content.split('\n');

  return (
    <div className="min-h-screen px-4 sm:px-6 pt-24 pb-8">
      <div className="max-w-4xl mx-auto">
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