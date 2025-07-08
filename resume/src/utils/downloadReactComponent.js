const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page    = await browser.newPage();
  await page.goto('https://ankursonidev.com/', { waitUntil: 'networkidle0' });

  // override for print layout
  await page.addStyleTag({
    content: `
      @media print {
        .Resume {
          width: 90% !important;
          max-width: none !important;
          margin-left: 13mm,
          margin-right: 13mm,
          padding: 0 18mm 0 !important;
        }
      }
    `
  });

  await page.pdf({
    path: 'Ankur_Resume_with_moonstone_July_8_2025.pdf',
    format: 'A4',
    margin: { top: '10mm', bottom: '10mm', left: '0mm', right: '0mm' }
  });

  await browser.close();
})();
