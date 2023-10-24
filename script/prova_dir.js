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
      // Ottenere la lista di file selezionati
      const selectedFiles = fileInput.files;
      
      // Creare un array per i nomi dei file
      const fileNames = [];
  
      // Iterare attraverso la lista di file
      for (let i = 0; i < selectedFiles.length; i++) {
        // Aggiungere il nome di ciascun file all'array
        fileNames.push(selectedFiles[i].name);
      }
  
      // Ora fileNames contiene i nomi di tutti i file selezionati
      alert(fileNames);
    }
  }