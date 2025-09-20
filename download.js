downloadBtn.addEventListener('click', () => {
  // Manipulate the file contents here
  let manipulatedContent = window.fileContents;

  // Example: Remove all HTML tags
  manipulatedContent = manipulatedContent.replace(/<b>/g, '#');
  manipulatedContent = manipulatedContent.replace(/<li[^>]*<\/div>/g, '\n- ');
  manipulatedContent = manipulatedContent.replace(/<\/div>/g, '\n');
  
  manipulatedContent = manipulatedContent.replace(/<[^>]*>/g, '');

  // Example: Add a header
  manipulatedContent = '--- Converted Content ---\n' + manipulatedContent;

  // Download as .txt file
  const blob = new Blob([manipulatedContent], {type: 'text/plain'});
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);

  // Force .txt extension
  let downloadName = window.fileName.replace(/\.[^/.]+$/, '') + '.txt';
  downloadLink.download = downloadName;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});