const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    const fileContents = event.target.result;
    console.log('File contents:', fileContents);
  };

  reader.readAsText(file);
//   processFile(file)

});

// function processFile(content) {
//     console.log(content.toString());
// }