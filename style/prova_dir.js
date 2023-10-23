function test(){
    // Ottieni l'accesso alla directory specifica
    const directoryPath = 'Scheda SD/DCIM/Camera';
    const directory = await window.showDirectoryPicker({ startIn: directoryPath });
''
    // Ottieni un oggetto di tipo `FileSystemDirectoryHandle` per la directory
    const directoryHandle = await directory.getDirectory();

    // Ottieni un elenco di oggetti `FileSystemHandle` per i file nella directory
    const filesHandles = await directoryHandle.getFiles();

    // Estrai i nomi dei file
    const fileNames = filesHandles.map(fileHandle => fileHandle.name);

    // Ora `fileNames` contiene un array con i nomi dei file nella directory
    console.log(fileNames);
}