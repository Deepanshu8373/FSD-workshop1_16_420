import fs from 'node:fs/promises';
const filepath="Data.txt";
async function createfile(content){
    try{
        await fs.writeFile(filepath,content,"utf8");
        console.log("File created successfully");
    }   catch(err){
        console.error("Error creating file:",err);
    }   
    
}
function readfile(){
    
}
function updatefile(){
    
}
function deletefile(){
    
}