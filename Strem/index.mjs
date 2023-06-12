
// ❌🙅‍♀️ // console.log(__dirname)  it is not avaiable in es6 module

import{readFile, writeFile} from 'fs/promises';
const filepath = new URL('./index.html' ,import.meta.url);
// console.log(import.meta.url);
let contents = await readFile(filepath, {encoding: 'utf-8'});

// console.log(contents);

let data = {
    name: "Ankit kumar",
    company: "none",
    age: 22,
}
/**
    Object.entries(object_name) => give a array of key:value Pair 
    Object.key(obj_name) ==> value of object
    Object.value(obj_name)
 */

for(const [key, value] of Object.entries(data)) {
    contents = contents.replace(`{${key}}`, value);
}

// console.log(contents);
// writeFile in that file 
await writeFile(filepath, contents); 

await writeFile(new URL('./newFile.html' , import.meta.url) , contents);
/**
    process.stdout.write("hello");
    console.log("hello")
 */

