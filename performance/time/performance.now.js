function count(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

let inicio_tiempo = performance.now();
count(5);
let final_tiempo = performance.now();
let duracion = final_tiempo - inicio_tiempo;

console.log(`El algoritmo ccount ha durado: ${duracion}ms`);