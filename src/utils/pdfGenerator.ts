import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (elementId: string, filename: string = 'sadhya-birthday-invitation.pdf') => {
  try {
    // Show loading message
    const loadingToast = showToast('Creating your beautiful invitation PDF... ✨', 'info');
    
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found');
    }

    // Temporarily remove any elements that shouldn't be in PDF
    const excludeElements = document.querySelectorAll('[data-exclude-pdf="true"]');
    const originalDisplayStyles: string[] = [];
    
    excludeElements.forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      originalDisplayStyles[index] = htmlElement.style.display;
      htmlElement.style.display = 'none';
    });

    // Show PDF-only elements
    const pdfOnlyElements = document.querySelectorAll('.pdf-only');
    const originalPdfOnlyDisplayStyles: string[] = [];
    
    pdfOnlyElements.forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      originalPdfOnlyDisplayStyles[index] = htmlElement.style.display;
      htmlElement.style.display = 'block';
    });

    // Configure html2canvas for better quality
    const canvas = await html2canvas(element, {
      scale: 2, // Higher resolution
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
      height: element.scrollHeight,
      width: element.scrollWidth,
      scrollX: 0,
      scrollY: 0,
    });

    // Restore hidden elements
    excludeElements.forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.display = originalDisplayStyles[index];
    });

    // Hide PDF-only elements again
    pdfOnlyElements.forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.display = originalPdfOnlyDisplayStyles[index];
    });

    const imgData = canvas.toDataURL('image/png');
    
    // Calculate dimensions for PDF
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // If image is taller than one page, we might need to handle pagination
    if (imgHeight <= pageHeight) {
      // Single page
      const yPosition = (pageHeight - imgHeight) / 2; // Center vertically
      pdf.addImage(imgData, 'PNG', 0, yPosition, imgWidth, imgHeight);
    } else {
      // Multiple pages (if needed)
      let position = 0;
      let remainingHeight = imgHeight;
      
      while (remainingHeight > 0) {
        const currentPageHeight = Math.min(pageHeight, remainingHeight);
        
        pdf.addImage(
          imgData,
          'PNG',
          0,
          position === 0 ? 0 : -position,
          imgWidth,
          imgHeight
        );
        
        remainingHeight -= pageHeight;
        position += pageHeight;
        
        if (remainingHeight > 0) {
          pdf.addPage();
        }
      }
    }

    // Save the PDF
    pdf.save(filename);
    
    // Hide loading and show success
    hideToast(loadingToast);
    showToast('🎀 Invitation PDF downloaded successfully! Share the magic! 💕', 'success');
    
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    showToast('Oops! Something went wrong. Please try again. 💖', 'error');
    throw error;
  }
};

export const downloadInvitation = () => {
  generatePDF('invitation-container', 'sadhya-birthday-invitation.pdf')
    .catch((error) => {
      console.error('Failed to download PDF:', error);
    });
};

// Simple toast system
function showToast(message: string, type: 'info' | 'success' | 'error' = 'info'): string {
  const toastId = Math.random().toString(36).substr(2, 9);
  const toast = document.createElement('div');
  
  const bgColor = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    error: 'bg-red-500'
  };
  
  toast.id = toastId;
  toast.className = `fixed top-4 right-4 ${bgColor[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50 max-w-sm transition-all transform translate-x-full`;
  toast.innerHTML = message;
  
  document.body.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto-hide after 4 seconds
  setTimeout(() => {
    hideToast(toastId);
  }, 4000);
  
  return toastId;
}

function hideToast(toastId: string) {
  const toast = document.getElementById(toastId);
  if (toast) {
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }
}
