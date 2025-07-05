// const puppeteer = require("puppeteer");

// const generatePDF = async()=>{
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();
//   await page.goto('https://ankursonidev.com/', {waitUntil: 'networkidle0'});
//   const pdf = await page.pdf({ path: 'Ankur_Resume.pdf', format: 'A4', margin : { top: '20mm', bottom: '20mm', left: '10mm', right: '10mm' } });
 
//   await browser.close();
//   return pdf
// }

// generatePDF();