// const puppeteer = require("puppeteer");

// const generatePDF = async()=>{
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();
//   await page.goto('https://ankursonidev.com/', {waitUntil: 'networkidle0'});
//   const pdf = await page.pdf({ path: 'Ankur_Resume.pdf', format: 'A4', margin : { top: '15mm', bottom: '15mm', left: '5mm', right: '5mm' } });
 
//   await browser.close();
//   return pdf
// }

// generatePDF();