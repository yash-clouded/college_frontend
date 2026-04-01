type AdvisorStudyYearSource = {
  current_study_year?: number | null;
  study_year_at_signup?: number | null;
  study_year_anchor_date?: string | null;
  created_at?: string | null;
};

const PROMOTION_MONTH_INDEX = 4; // May

function getPromotionCountSinceAnchor(anchorDate: Date, now: Date): number {
  const firstPromotionYear =
    anchorDate.getMonth() < PROMOTION_MONTH_INDEX
      ? anchorDate.getFullYear()
      : anchorDate.getFullYear() + 1;

  const firstPromotionDate = new Date(firstPromotionYear, PROMOTION_MONTH_INDEX, 1);
  if (now < firstPromotionDate) return 0;

  const yearsDiff = now.getFullYear() - firstPromotionYear;
  const passedPromotionThisYear = now.getMonth() >= PROMOTION_MONTH_INDEX ? 1 : 0;
  return Math.max(0, yearsDiff + passedPromotionThisYear);
}

export function computeEffectiveStudyYear(
  source: AdvisorStudyYearSource,
  now: Date = new Date(),
): number | null {
  const baseYear = Number(source.study_year_at_signup);
  if (!Number.isFinite(baseYear) || baseYear <= 0) {
    const fallback = Number(source.current_study_year);
    return Number.isFinite(fallback) && fallback > 0 ? Math.floor(fallback) : null;
  }

  const anchorRaw = source.study_year_anchor_date || source.created_at;
  const anchorDate = anchorRaw ? new Date(anchorRaw) : null;
  if (!anchorDate || Number.isNaN(anchorDate.getTime())) return Math.floor(baseYear);

  const promotions = getPromotionCountSinceAnchor(anchorDate, now);
  return Math.max(1, Math.floor(baseYear) + promotions);
}

export function formatStudyYearLabel(year: number | null): string {
  if (!year || year <= 0) return "Not specified";
  const mod100 = year % 100;
  const mod10 = year % 10;
  const suffix =
    mod100 >= 11 && mod100 <= 13
      ? "th"
      : mod10 === 1
        ? "st"
        : mod10 === 2
          ? "nd"
          : mod10 === 3
            ? "rd"
            : "th";
  return `${year}${suffix} year`;
}
