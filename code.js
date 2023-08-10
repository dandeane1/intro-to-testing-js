// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// function sayHello(name) {
//     if (name === "Jane"){
//         return "Hello, Jane!";
//     } else if (name === "Alex"){
//         return "Hello, Alex!";
//     } else if (name === "Pat"){
//         return "Hello, Pat!"
//     }
//     return ""
//     }


function sayHello(name) {
    if (typeof name === 'string' && name.trim() !== '') {
        return "Hello, " + name + "!";
    } else if (name === true){
        return "Hello, World";
    }
    return ""
}










