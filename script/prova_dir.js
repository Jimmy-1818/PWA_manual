async function test(){
    alert("IN")
    try {
        const [handle] = await window.showOpenFilePicker();
        const file = await handle.getFile
        const filename = await handle.getFileName
        
        console.log(filename)
        alert(file)
        
    }catch (error) {
        console.error(error);
    }
}