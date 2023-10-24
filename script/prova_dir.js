// async function test(){
//     alert("IN")
//     try {
//         const [handle] = await window.showOpenFilePicker();
//         const file = await handle.getFile
//         const filename = await handle.getFileName
        
//         console.log(filename)
//         alert(file)
        
//     }catch (error) {
//         console.error(error);
//     }
// }

function handleFileSelect() {
    // Ottenere l'elemento di input file
    const fileInput = document.getElementById('fileInput');
    
    // Verificare se sono stati selezionati dei file
    if (fileInput.files.length > 0) {
      // Ottenere il primo file
      const selectedFile = fileInput.files[0];
      
      // Puoi accedere a informazioni sul file, ad esempio nome e tipo
      const fileName = selectedFile.name;
      const fileType = selectedFile.type;
  
      // Puoi fare altro con il file, come inviarlo a un server
      console.log(`Nome del file: ${fileName}`);
      console.log(`Tipo del file: ${fileType}`);
    }
  }