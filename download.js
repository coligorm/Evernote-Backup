downloadBtn.addEventListener('click', () => {
  const blob = new Blob([window.fileContents], {type: 'text/plain'});
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = window.fileName;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});