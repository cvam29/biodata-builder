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
 * Generate a PDF blob from the preview element and open it in a new tab for preview.
 * @param {string} elementId
 * @param {string} [filename='biodata-preview.pdf']
 */
export async function generatePdfPreview(elementId = 'biodata-preview', filename = 'biodata-preview.pdf') {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error('PDF preview failed: element not found:', elementId);
        return;
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

    // Open PDF in new tab
    const blob = pdf.output('blob');
    const url = URL.createObjectURL(blob);
    const newWindow = window.open(url, '_blank');

    // Try to set filename when supported by the browser (some browsers use Content-Disposition)
    if (newWindow && newWindow.document) {
        // Fallback: embed PDF in page with a download link
        // This is kept minimal as most browsers will display the blob directly.
        setTimeout(() => URL.revokeObjectURL(url), 60 * 1000);
    } else {
        // If popup blocked, trigger download instead
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 60 * 1000);
    }
}
