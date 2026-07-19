<?xml version="1.0" encoding="UTF-8"?>
<!--
  sitemap.xsl — makes sitemap.xml readable when a human opens it.

  A browser shows a raw sitemap as an unstyled XML tree, which looks
  broken even when it is perfectly valid. Crawlers ignore the
  xml-stylesheet instruction entirely, so this costs nothing in SEO
  terms and saves anyone checking the file from reading a wall of tags.
-->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Sitemap — gantts.app</title>
        <style>
          :root { color-scheme: light dark; --ink:#1c1926; --soft:#6a6579; --line:#e8e5f1;
                  --bg:#f7f6fc; --panel:#fff; --brand:#6c4cf1; }
          @media (prefers-color-scheme: dark) {
            :root { --ink:#ece9f7; --soft:#a49fb5; --line:#2a2440; --bg:#141021; --panel:#1b1630; }
          }
          * { box-sizing:border-box; }
          body { margin:0; background:var(--bg); color:var(--ink); font-size:14px; line-height:1.5;
                 font-family:'Inter',-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; }
          .wrap { max-width:1080px; margin:0 auto; padding:32px 20px 64px; }
          h1 { font-size:22px; margin:0 0 6px; letter-spacing:-.01em; }
          .sub { color:var(--soft); font-size:13px; margin:0 0 24px; }
          .sub a { color:var(--brand); }
          .card { background:var(--panel); border:1px solid var(--line); border-radius:12px; overflow:hidden; }
          table { width:100%; border-collapse:collapse; }
          th, td { text-align:left; padding:9px 14px; border-bottom:1px solid var(--line); vertical-align:top; }
          th { font-size:11px; text-transform:uppercase; letter-spacing:.05em; color:var(--soft);
               background:var(--bg); position:sticky; top:0; }
          tr:last-child td { border-bottom:0; }
          td.u { word-break:break-all; }
          td.u a { color:var(--brand); text-decoration:none; }
          td.u a:hover { text-decoration:underline; }
          td.d, td.n { white-space:nowrap; color:var(--soft); font-variant-numeric:tabular-nums; }
          .langs { display:flex; gap:4px; flex-wrap:wrap; }
          .lang { font-size:10.5px; padding:1px 6px; border:1px solid var(--line);
                  border-radius:20px; color:var(--soft); }
          .count { font-weight:700; }
          @media (max-width:640px) { .hide-sm { display:none; } .wrap { padding:20px 12px 48px; } }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>gantts.app — XML sitemap</h1>
          <p class="sub">
            <span class="count"><xsl:value-of select="count(s:urlset/s:url)"/></span> URLs.
            This file is for search engines; the styling is only here so it is readable.
            <a href="/">Back to the site →</a>
          </p>
          <div class="card">
            <table>
              <tr>
                <th class="n">#</th>
                <th>URL</th>
                <th class="hide-sm">Languages</th>
                <th>Updated</th>
              </tr>
              <xsl:for-each select="s:urlset/s:url">
                <tr>
                  <td class="n"><xsl:value-of select="position()"/></td>
                  <td class="u">
                    <a href="{s:loc}"><xsl:value-of select="s:loc"/></a>
                  </td>
                  <td class="hide-sm">
                    <div class="langs">
                      <xsl:for-each select="xhtml:link[@hreflang != 'x-default']">
                        <span class="lang"><xsl:value-of select="@hreflang"/></span>
                      </xsl:for-each>
                    </div>
                  </td>
                  <td class="d"><xsl:value-of select="s:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </table>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
