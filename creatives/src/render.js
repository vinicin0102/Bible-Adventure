// Renders every <section class="ad"> in creatives.html to PNG, in feed (4:5) and story (9:16) sizes.
// Usage: node creatives/src/render.js   (needs Playwright + Chromium)
const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const src = 'file://' + path.join(__dirname, 'creatives.html');
  const browser = await chromium.launch();
  for (const fmt of ['feed', 'story']) {
    const page = await browser.newPage({ viewport: { width: 1200, height: 2000 } });
    await page.goto(src);
    await page.evaluate(f => { document.body.className = f; }, fmt);
    await page.evaluate(() => document.fonts.ready);
    for (const el of await page.$$('.ad')) {
      const id = await el.getAttribute('id');
      const out = path.join(__dirname, '..', fmt, `${id}-${fmt}.png`);
      await el.screenshot({ path: out });
      console.log('wrote', path.relative(process.cwd(), out));
    }
    await page.close();
  }
  await browser.close();
})();
