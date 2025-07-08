const puppeteer = require("puppeteer");

const generatePDF = async()=>{
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://ankursonidev.com/', {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ path: 'Ankur_Resume_withOut_Moonstone_July_8_2025.pdf', format: 'A4', margin : { top: '18mm', bottom: '18mm' } });
 
  await browser.close();
  return pdf
}

generatePDF();