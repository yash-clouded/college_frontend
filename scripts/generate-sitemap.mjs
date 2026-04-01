/**
 * Writes public/sitemap.xml for public (indexable) URLs.
 * Requires VITE_SITE_URL in .env (e.g. https://yourapp.web.app) — no trailing slash.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const envPath = join(root, ".env");

function readEnvFile(filePath) {
  if (!existsSync(filePath)) return {};
  const text = readFileSync(filePath, "utf8");
  const entries = {};
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq <= 0) continue;
    const key = line.slice(0, eq).trim();
    const value = line.slice(eq + 1).trim().replace(/^['"]|['"]$/g, "");
    entries[key] = value;
  }
  return entries;
}

const envFromFile = readEnvFile(envPath);

const base = (process.env.VITE_SITE_URL || envFromFile.VITE_SITE_URL || "")
  .trim()
  .replace(/\/$/, "");
if (!base) {
  console.warn(
    "generate-sitemap: VITE_SITE_URL missing in .env — skipping sitemap.xml",
  );
  process.exit(0);
}

const paths = [
  "/",
  "/get-started",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/auth/student/signup",
  "/auth/student/login",
  "/auth/advisor/signup",
  "/auth/advisor/login",
];

const urls = paths.map((p) => {
  const loc = p === "/" ? `${base}/` : `${base}${p}`;
  const priority = p === "/" ? "1.0" : "0.8";
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

const outDir = join(root, "public");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "sitemap.xml"), xml, "utf8");
console.log("Wrote public/sitemap.xml for", base);
