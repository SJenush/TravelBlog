let fileHandle;
async function readTxt(){
    let response = await fetch('data.json');
    let data = await response.text();
    console.log(data);
}
async function writeTxt(){
    let stream = await fileHandle.createWritable();
    await stream.write('Hello World');
    stream.close();
}
