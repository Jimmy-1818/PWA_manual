async function test(){
    try {
        const directoryHandle = await window.showDirectoryPicker();
        const entries = [];
        
        for await (const entry of directoryHandle.values()) {
            entries.push(entry.name);
        }

        console.log(directoryHandle)
        alert(entries);
    }catch (error) {
        console.error(error);
    }
}