import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const downloadPdf = async (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) throw new Error(`Element not found with ID: ${elementId}`);

  const canvas = await html2canvas(element, { scale: 1 });
  const imgData = canvas.toDataURL("image/png");

  // PDF settings
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  // Canvas size in px
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  // The PDF page size in px at the canvas's scale
  const pageHeightPx = Math.floor((canvasWidth / pdfWidth) * pdfHeight);

  let renderedHeight = 0;
  let pageCount = 0;

  while (renderedHeight < canvasHeight) {
    // Create page canvas
    const pageCanvas = document.createElement("canvas");
    pageCanvas.width = canvasWidth;
    pageCanvas.height = Math.min(pageHeightPx, canvasHeight - renderedHeight);

    const pageCtx = pageCanvas.getContext("2d");
    // Draw portion of full canvas onto this page's canvas
    pageCtx.drawImage(
      canvas,
      0, renderedHeight,                  // source x, y
      canvasWidth, pageCanvas.height,     // source width, height
      0, 0,                              // dest x, y
      canvasWidth, pageCanvas.height      // dest width, height
    );

    // Convert this page's canvas to an image
    const pageData = pageCanvas.toDataURL("image/png");
    const pageHeightMM = (pageCanvas.height * pdfWidth) / canvasWidth;

    if (pageCount > 0) pdf.addPage();
    pdf.addImage(pageData, "PNG", 0, 0, pdfWidth, pageHeightMM);

    renderedHeight += pageHeightPx;
    pageCount++;
  }

  pdf.save("Ankur_Resume.pdf");
};
