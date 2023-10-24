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
      console.log("fileInput: " + fileInput)
      console.log("selectedFiles" + selectedFiles)
      
      // Creare un array per i nomi dei file
      const fileNames = [];
  
      // Iterare attraverso la lista di file
      for (let i = 0; i < selectedFiles.length; i++) {
        // Aggiungere il nome di ciascun file all'array
        var curret_fileName = selectedFiles[i].name
        if (curret_fileName == "COMMIT_EDITMSG"){
            console.log("___break___")
            break
        }
        if (curret_fileName.substring(0,2) == "._"){
            continue
        }
        fileNames.push(curret_fileName);
      }

      
      // Ora fileNames contiene i nomi di tutti i file selezionati
      alert(fileNames);
    }
  }