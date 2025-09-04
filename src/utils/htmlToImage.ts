// Utility function to convert HTML to image (for future implementation)
export const htmlToImage = async (htmlContent: string, width = 300, height = 200): Promise<string> => {
  // This is a placeholder for HTML to image conversion
  // In a real implementation, you would use libraries like html2canvas
  // For now, we'll return a placeholder image
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f2f5"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="#666">
        HTML Preview
      </text>
    </svg>
  `)}`;
};