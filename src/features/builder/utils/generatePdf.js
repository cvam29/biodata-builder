import html2canvas from 'html2canvas-pro';
import { jsPDF } from 'jspdf';

/**
 * Captures the biodata preview element and saves it as a single-page PDF.
 * @param {string} elementId - The DOM id of the element to capture.
 * @param {string} [filename='biodata.pdf'] - Output filename.
 */
export async function generatePdf(elementId = 'biodata-preview', filename = 'biodata.pdf') {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error('PDF generation failed: element not found:', elementId);
        return;
    }

    // Capture the element at high resolution
    const canvas = await html2canvas(element, {
        scale: 2, // 2x for crisp output
        useCORS: true, // allow cross-origin images
        backgroundColor: '#ffffff',
        logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // Calculate PDF page size to fit the entire biodata on one page
    // Use the image aspect ratio to determine page dimensions
    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = (imgHeight * pdfWidth) / imgWidth;

    const pdf = new jsPDF({
        orientation: pdfHeight > pdfWidth ? 'portrait' : 'landscape',
        unit: 'mm',
        format: [pdfWidth, pdfHeight],
    });

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(filename);
}

/**
 * Generate a PDF blob from the preview element and return it.
 * @param {string} elementId
 * @returns {Blob}
 */
export async function generatePdfBlob(elementId = 'biodata-preview') {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error('PDF generation failed: element not found:', elementId);
        return null;
    }

    const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const pdfWidth = 210;
    const pdfHeight = (imgHeight * pdfWidth) / imgWidth;

    const pdf = new jsPDF({
        orientation: pdfHeight > pdfWidth ? 'portrait' : 'landscape',
        unit: 'mm',
        format: [pdfWidth, pdfHeight],
    });

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    return pdf.output('blob');
}
