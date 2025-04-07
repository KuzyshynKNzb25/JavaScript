const arr = new Array(100);
for(let i = 0;i < arr.length;i++){
    arr[i] = Math.round(Math.random()*10000) ;
}
console.log("За допомогою методу обміну");
window.sort007.changing(arr, true);
console.log("За допомогою методу мінімальних елементів");
window.sort007.byLessValues(arr, true);
console.log("За допомогою методу вставок");
window.sort007.insert(arr, true);
console.log("За допомогою методу Шелла");
window.sort007.shell(arr, true);
console.log("За допомогою методу Хоара (швидке сортування)");
window.sort007.hoara(arr, true);

console.log("\nСортування за спаданням:");
console.log("За допомогою методу обміну");
window.sort007.changing(arr, false);
console.log("За допомогою методу мінімальних елементів");
window.sort007.byLessValues(arr, false);
console.log("За допомогою методу вставок");
window.sort007.insert(arr, false);
console.log("За допомогою методу Шелла");
window.sort007.shell(arr, false);
console.log("За допомогою методу Хоара (швидке сортування)");
window.sort007.hoara(arr, false);

const arrWithUndefinedItems = new Array(100);
const pivot = Math.round(Math.random()*arrWithUndefinedItems.length);
console.log("\n\n\nТепер з врахуванням undefined\n\n");
for(let i = 0;i < pivot;i++){
    arrWithUndefinedItems[i] = Math.round(Math.random()*10000) ;
}
arrWithUndefinedItems[99] = Math.round(Math.random()*10000) ;

console.log("За допомогою методу обміну");
window.sort007.changing(arrWithUndefinedItems, true);
console.log("За допомогою методу мінімальних елементів");
window.sort007.byLessValues(arrWithUndefinedItems, true);
console.log("За допомогою методу вставок");
window.sort007.insert(arrWithUndefinedItems, true);
console.log("За допомогою методу Шелла");
window.sort007.shell(arrWithUndefinedItems, true);
console.log("За допомогою методу Хоара (швидке сортування)");
window.sort007.hoara(arrWithUndefinedItems, true);

console.log("\nСортування за спаданням:");
console.log("За допомогою методу обміну");
window.sort007.changing(arrWithUndefinedItems, false);
console.log("За допомогою методу мінімальних елементів");
window.sort007.byLessValues(arrWithUndefinedItems, false);
console.log("За допомогою методу вставок");
window.sort007.insert(arrWithUndefinedItems, false);
console.log("За допомогою методу Шелла");
window.sort007.shell(arrWithUndefinedItems, false);
console.log("За допомогою методу Хоара (швидке сортування)");
window.sort007.hoara(arrWithUndefinedItems, false);
//window.sort007.insert(arr, true);