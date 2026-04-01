export default function Contact() {
  const content = `Contact Us

We're here to help you make the right decisions and ensure a smooth experience on CollegeConnect.

Whether you're a student, parent, advisor, or partner — feel free to reach out to us through the appropriate channels below.

General Support

For any platform-related issues, technical problems, account help, or general queries:

📧 support@collegeconnects.co.in

---

Session & Booking Support

Facing issues with session booking, rescheduling, payments, or refunds?

📧 sessionbooking@collegeconnects.co.in

---

Partnerships & Collaborations

For college collaborations, business partnerships, sponsorships, or institutional tie-ups:

📧 partnership@collegeconnects.co.in

---

Marketing & Promotions

For marketing campaigns, brand promotions, influencer collaborations, or media inquiries:

📧 marketing@collegeconnects.co.in

---

Technical & Development

To report bugs, technical issues, or suggest improvements:

📧 dev@collegeconnects.co.in

---

Team & Internal Communication

For internal or team-related communication:

📧 team@collegeconnects.co.in

---

Important Notice

- Please contact only through the official email channels listed above.
- We do not encourage sharing personal contact details outside the platform.
- Our team typically responds within 24–48 hours.

---

About CollegeConnect

CollegeConnect is a student-to-student interaction platform designed to provide real, unbiased insights into colleges by connecting aspirants and parents directly with verified undergraduate students.

Our mission is to make college decision-making transparent, reliable, and stress-free.

---

💬 Need urgent help?

Reach out to our support team, and we'll assist you as quickly as possible.`;

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