// Post-build audit: one H1, title/description, homeLink, internal link integrity, no raw <img>, WEBP-only images.
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = ".vercel/output/static";
const pages = [];
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f === "index.html") pages.push(p);
  }
};
walk(root);

let problems = 0;
const fail = (page, msg) => { problems++; console.log(`FAIL ${page}: ${msg}`); };

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const rel = page.replace(root, "").replace("index.html", "") || "/";
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) fail(rel, `${h1s} H1 tags`);
  if (!/<title>[^<]+<\/title>/.test(html)) fail(rel, "no title");
  if (!/<meta name="description" content="[^"]+"/.test(html)) fail(rel, "no meta description");
  if (!html.includes('"@type":"LocalBusiness"')) fail(rel, "no LocalBusiness schema");
  if (rel !== "/" && !html.includes('href="/"')) fail(rel, "no link to homepage");
  for (const m of html.matchAll(/href="(\/[^"#?]*)(?:#[^"]*)?"/g)) {
    const target = m[1];
    if (target.startsWith("/_astro") || /\.[a-z0-9]+$/i.test(target)) { if (!existsSync(join(root, target))) fail(rel, `missing asset ${target}`); continue; }
    if (!existsSync(join(root, target, "index.html"))) fail(rel, `broken link ${target}`);
  }
  for (const m of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    if (!/\.webp(\?|$)/.test(m[1])) fail(rel, `non-webp image ${m[1]}`);
  }
}

const home = readFileSync(join(root, "index.html"), "utf8");
const expectTitle = "SLC Elite Water Softener | Water Softener Installation &amp; Systems – Salt Lake City, UT";
if (!home.includes(`<title>${expectTitle}</title>`) && !home.includes("<title>SLC Elite Water Softener | Water Softener Installation & Systems – Salt Lake City, UT</title>")) fail("/", "title mismatch");
const h2s = [...home.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => m[1].replace(/<[^>]+>/g, "").trim());
console.log("Homepage H2s:\n - " + h2s.join("\n - "));
const sitemap = readFileSync(join(root, "sitemap-0.xml"), "utf8");
console.log("sitemap urls:", (sitemap.match(/<loc>/g) || []).length, "| thank-you excluded:", !sitemap.includes("thank-you"));
console.log(`\n${pages.length} pages audited, ${problems} problem(s)`);
process.exit(problems ? 1 : 0);
