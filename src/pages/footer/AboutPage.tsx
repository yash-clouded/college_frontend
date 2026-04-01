export default function AboutPage() {
  const content = `CollegeConnect: Platform Overview

CollegeConnect is a next-generation guidance platform built to redefine how students make one of the most important decisions of their lives: choosing the right college.

In an ecosystem dominated by rankings, coaching institutes, and fragmented online information, students often lack access to what truly matters—real, lived experiences. We bridge this gap by enabling direct access to verified students from top institutions, transforming decision-making from guesswork into absolute clarity. We are building a system where insights are not assumed; they are experienced, shared, and trusted.

Strategic Direction

● Our Mission: To create a transparent, student-driven ecosystem where every individual can access authentic, personalized guidance and make confident academic decisions—without bias, misinformation, or barriers.

● Our Vision: We envision a future where no student makes an academic decision in uncertainty. CollegeConnect aims to become the default layer of guidance for students globally—an ecosystem where trust, experience, and technology converge to empower better choices at every stage of life.

Market Dynamics: The Problem vs. Our Solution

The Problem

Millions of students make high-stakes academic decisions every year burdened by:

● Incomplete or misleading information.
● Limited access to real student experiences.
● Overdependence on rigid coaching systems.
● A complete lack of personalized guidance.

Result: Uncertainty, regret, and misaligned choices.

Our Solution

CollegeConnect shifts the paradigm from "searching for information" to "experiencing insights." We introduce a trusted, peer-driven model where:

● Students gain actionable clarity through real conversations.
● Advisors are incentivized to share genuine, unvarnished insights.
● Decisions are backed by deep context, not surface-level assumptions.

Platform Infrastructure: What We're Building

CollegeConnect is more than a platform; it is a scalable infrastructure for informed decision-making. We enable:

1. Direct Interaction: Seamless connections between aspirants and current students.
2. Structured Advisory: Frameworks for productive, one-on-one guidance sessions.
3. Real-World Insights: Unfiltered access to perspectives on academics, campus culture, placements, and lifestyle.
4. AI-Assisted Guidance: Intelligent systems designed to simplify, scale, and deeply personalize the user journey.

Core Principles

1. Authenticity Over Assumptions: Every insight comes from someone who has actually lived it.
2. Accessibility at Scale: High-quality guidance is a fundamental right, not a privilege limited to a few.
3. Structured Experience: We replace randomness with a reliable, system-driven interaction model.
4. Human + AI Synergy: We combine real, empathetic human conversations with the efficiency of intelligent assistance.

Ecosystem & Demographics

Who We Serve

● Aspirants: Students navigating complex college and career decisions.
● Parents: Guardians seeking clarity, transparency, and confidence in their child's future.
● Advisors: Current college students contributing their lived experiences.
● Truth-Seekers: Anyone looking for authentic, unvarnished academic insights.

Trust & Credibility

We are committed to building a high-trust platform. Every interaction is designed to add measurable value, enforced through:

● Strictly verified student profiles.
● Transparent interaction histories.
● Structured, closed-loop feedback systems.
● Continuous, data-driven quality improvement.`;

  const lines = content.split('\n');

  return (
    <div className="min-h-screen px-4 sm:px-6 pt-24 pb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">About Collegeconnects</h1>
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