// Reto de números primos
function esPrimo(n) {
    if (n <= 1) return "Falso";
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return "Falso";
    }
    return "Verdadero";
}

// Reto de ordenamiento de cadenas
function ordenarCadena(cadena) {
    return cadena.split(' ').sort((a, b) => a.localeCompare(b)).join(' ');
}

// Reto de palíndromos
function esPalindromo(cadena) {
    const limpia = cadena.toLowerCase().replace(/[\W_]/g, '');
    const reversa = limpia.split('').reverse().join('');
    return limpia === reversa ? "Verdadero" : "Falso";
}

// Reto de Fibonacci
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
}

// Reto de suma de dos números
function sumaDosNumeros(lista, objetivo) {
    const vistos = new Map();
    for (let i = 0; i < lista.length; i++) {
        const complemento = objetivo - lista[i];
        if (vistos.has(complemento)) {
            return [complemento, lista[i]]; 
        }
        vistos.set(lista[i], i);
    }
    return null; // En JavaScript 'null' representa el 'None' que pide la prueba
}

// Pruebas para ver el resultado en la terminal
console.log("Primo (7):", esPrimo(7));
console.log("Ordenar ('perro gato casa'):", ordenarCadena("perro gato casa"));
console.log("Palíndromo ('radar'):", esPalindromo("radar"));
console.log("Fibonacci (5):", fibonacci(5));
console.log("Suma dos números ([1, 2, 3, 4, 5], 9):", sumaDosNumeros([1, 2, 3, 4, 5], 9));