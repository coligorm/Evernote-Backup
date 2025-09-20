const fileInput = document.getElementById('fileInput');
const downloadBtn = document.getElementById('downloadBtn');
window.fileContents = '';
window.fileName = '';

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;
  window.fileName = file.name;
  const reader = new FileReader();

  reader.onload = (event) => {
    window.fileContents = event.target.result;
    console.log('File contents:', window.fileContents);
    downloadBtn.style.display = 'inline-block';
  };

  reader.readAsText(file);
});