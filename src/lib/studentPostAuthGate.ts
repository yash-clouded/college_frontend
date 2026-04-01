/**
 * Temporary gate: when true, students are sent to `/pending` after sign-in / completed sign-up
 * instead of the dashboard. Set to `true` later to re-enable the pending page.
 */
export const isUnderReview = true;

export type StudentPostAuthPath = "/pending" | "/student/dashboard";

export function studentPostAuthPath(): StudentPostAuthPath {
  return isUnderReview ? "/pending" : "/student/dashboard";
}
