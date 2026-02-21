const fs = require("fs");
const { execSync } = require("child_process");

const baseUrl = "https://akmutuaadvocates.co.ke"; // <-- replace later
const pages = [
  "index.html",
  "services.html",
  "about.html",
  "team.html",
  "contact.html",
  "blog.html",
];

const getLastMod = (file) => {
  try {
    return execSync(`git log -1 --format=%cs -- ${file}`)
      .toString()
      .trim();
  } catch {
    return new Date().toISOString().split("T")[0];
  }
};

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n`;

pages.forEach((page) => {
  sitemap += `  <url>\n`;
  sitemap += `    <loc>${baseUrl}/${page}</loc>\n`;
  sitemap += `    <lastmod>${getLastMod(page)}</lastmod>\n`;
  sitemap += `  </url>\n\n`;
});

sitemap += `</urlset>`;

fs.writeFileSync("sitemap.xml", sitemap);
console.log("✅ sitemap.xml generated");


