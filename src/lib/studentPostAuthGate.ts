/**
 * Gate: students are sent directly to the dashboard.
 */
export const isUnderReview = false;

export type StudentPostAuthPath = "/student/dashboard";

export function studentPostAuthPath(): StudentPostAuthPath {
  return "/student/dashboard";
}
