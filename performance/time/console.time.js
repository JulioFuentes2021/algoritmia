function count(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

console.time('Duracion-contar');
count(5);
console.timeEnd('Duracion-contar');
