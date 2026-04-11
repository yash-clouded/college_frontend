/**
 * Calculates the completion percentage for user profiles.
 */

export function calculateProfileCompletion(role: "student" | "advisor", data: any): number {
  if (!data) return 0;

  if (role === "advisor") {
    const fields = [
      { key: "name", required: true },
      { key: "phone", required: true },
      { key: "state", required: true },
      { key: "branch", required: true, defaultValue: "Awaiting Profile Setup" },
      { key: "bio", required: true, defaultValue: "Recovered profile. Please update your details." },
      { key: "session_price", required: true },
      { key: "college_id_front_key", required: true }
    ];

    let filledCount = 0;
    fields.forEach(field => {
      const value = data[field.key];
      if (value && value !== "" && value !== field.defaultValue) {
        filledCount++;
      }
    });

    return Math.round((filledCount / fields.length) * 100);
  }

  if (role === "student") {
    const fields = [
      { key: "name", required: true },
      { key: "phone", required: true },
      { key: "state", required: true },
      { key: "academic_status", required: true, defaultValue: "Awaiting Profile Setup" }
    ];

    let filledCount = 0;
    fields.forEach(field => {
      const value = data[field.key];
      if (value && value !== "" && value !== field.defaultValue) {
        filledCount++;
      }
    });

    return Math.round((filledCount / fields.length) * 100);
  }

  return 0;
}
