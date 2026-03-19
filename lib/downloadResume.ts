export const downloadResume = () => {
    // Create a download link for the static PDF file
    const link = document.createElement('a');
    link.href = '/assets/kumarharshresume.pdf';
    link.download = 'Kumar_Harsh_Resume.pdf';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
};
