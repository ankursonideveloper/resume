import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const downloadPdf = async (elementId) =>{
  let element = document.getElementById(elementId);
  if (!element){
    throw new Error(`Element not found with ID: ${elementId}`);
  }
  const canvas = await html2canvas(element, { scale: 4 });
  const data = canvas.toDataURL("image/png");
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: [297, 210],
  });
  const imgProperties = pdf.getImageProperties(data);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

  pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("Ankur_Resume.pdf");
}
 