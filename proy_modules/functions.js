

const functions = {};

// Función para determinar si un número es positivo o negativo
const determinarSigno = (numero) => {
    if (numero >= 0) {
        return 'positivo';
    } else {
        return 'negativo';
    }
};

// Función para buscar un carácter en un conjunto de datos
const encontrarCaracter = (caracter) => {
    const datos = ['A', 'B', 'C', 'D', 'E'];
    if (datos.includes(caracter)) {
        return 'Se encuentra';
    } else {
        return 'No se encuentra en el arreglo de datos almacenados';
    }
};

// Función para determinar si se debe ir a la barra o la tienda según el producto
const encontrarProducto = (producto) => {
    const datos = ['cocosete', 'gaseosa', 'canela', 'tutifruti', 'spedmax'];
    if (datos.includes(producto.toLowerCase())) {
        return 'DEBE DIRIGIRSE A LA BARRA';
    } else {
        return 'DEBE DIRIGIRSE A LA TIENDA';
    }
};

// Función para proporcionar recomendaciones basadas en el medio de transporte
const aconsejarTransporte = (medio) => {
    switch (medio) {
        case 'avion':
        case 'flota':
            return 'RECUERDA TENER DINERO PARA EL PASAJE';
        case 'carro':
        case 'bicicleta':
            return 'RECUERDA LLEVAR ROPA ADECUADA';
        default:
            return 'Medio de transporte no reconocido';
    }
};

// Función para calcular el precio de venta con descuento
const calcularPrecioVenta = (precioBase, descuentoPorcentaje, cantidad) => {
    if (descuentoPorcentaje < 0 || descuentoPorcentaje > 100) {
        return "El descuento debe estar entre 0 y 100 por ciento.";
    }

    const descuento = precioBase * (descuentoPorcentaje / 100);
    const precioConDescuento = precioBase - descuento;
    const precioTotal = precioConDescuento * cantidad;

    return {
        precioTotal,
        descuento
    };
};

// Función para recomendar una bebida según el tipo de comida
const recomendarBebida = (menu) => {
    switch (menu.toLowerCase()) {
        case 'carne':
            return 'Vino tinto';
        case 'pescado':
            return 'Vino blanco';
        case 'verdura':
            return 'Agua';
        default:
            return 'Agua';
    }
};

// Función para determinar el acceso a una sala de juegos según el pago
const accesoSalaDeJuegos = (pago) => {
    if (pago >= 4000) {
        return 'tienes acceso a todos los juegos';
    } else if (pago === 4000) {
        return 'tienes acceso a todos los juegos: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual';
    } else if (pago === 3000) {
        return 'tienes acceso a los juegos: Consolas, Juegos 2D, Juegos 3D';
    } else if (pago === 2000) {
        return 'tienes acceso a las Consolas y Juegos 2D';
    } else if (pago === 1000) {
        return 'tienes acceso a las Consolas';
    } else {
        return 'no te alcanza, inserta más dinero';
    }
};

// Función para contar números secuencialmente hasta un número dado
const contarNumeros = (numero) => {
    if (numero <= 0) {
        return "Por favor, ingresa un número positivo mayor que cero.";
    }

    const resultados = [];
    for (let i = 1; i <= numero; i++) {
        resultados.push(i);
    }

    return resultados;
};

// Función para mostrar números pares dentro de un número
const mostrarNumerosPares = (numero) => {
    if (numero < 0) {
        return "El número debe ser positivo.";
    }

    const resultados = [];
    const numeroStr = numero.toString();

    for (let i = 0; i < numeroStr.length; i++) {
        const digito = parseInt(numeroStr[i]);
        if (digito % 2 === 0) {
            resultados.push(digito);
        }
    }

    return resultados;
};

// Función para contar en una base dada
const contarEnBase = (base) => {
    if (base < 2 || base > 36) {
        return [];
    }

    const numeros = [];
    for (let primerDigito = 0; primerDigito < base; primerDigito++) {
        for (let segundoDigito = 0; segundoDigito < base; segundoDigito++) {
            const numeroEnBaseN = primerDigito * base + segundoDigito;
            numeros.push(numeroEnBaseN);
        }
    }

    return numeros;
};

// Función para repetir un carácter un número específico de veces
const repetirCaracter = (caracter, veces) => {
    if (typeof caracter !== 'string' || caracter.length !== 1) {
        return 'El primer argumento debe ser un único carácter.';
    }

    if (typeof veces !== 'number' || veces < 0 || !Number.isInteger(veces)) {
        return 'El segundo argumento debe ser un número entero no negativo.';
    }

    return caracter.repeat(veces);
};

// Función para contar números pares en un arreglo de números
const contarNumerosPares = (numeros) => {
    if (!numeros || numeros.length === 0) {
        return 'El arreglo de números está vacío.';
    }

    const numerosPares = numeros.filter(numero => numero % 2 === 0);

    return {
        cantidad: numerosPares.length,
        pares: numerosPares
    };
};

// Función para mostrar la tabla de multiplicar de un número
const mostrarTablaDeMultiplicar = (numeroBase) => {
    const resultados = [];
    for (let i = 1; i <= 10; i++) {
        const resultado = numeroBase * i;
        resultados.push(`${numeroBase} x ${i} = ${resultado}`);
    }
    return resultados;
};

// Función para encontrar el número mínimo y máximo en un arreglo de números
const encontrarMinimoMaximo = (numeros) => {
    if (!numeros || numeros.length === 0) {
        return 'El arreglo de números está vacío.';
    }

    let minimo = numeros[0];
    let maximo = numeros[0];
    let suma = 0;

    for (const numero of numeros) {
        if (numero < minimo) {
            minimo = numero;
        }
        if (numero > maximo) {
            maximo = numero;
        }
        suma += numero;
    }

    const promedio = suma / numeros.length;

    return {
        minimo: minimo,
        maximo: maximo,
        promedio: promedio
    };
};

// Función para iniciar sesión con claves predefinidas
const iniciarSesion = (clave) => {
    const clavesPredefinidas = ['cris', 'cristian', 'fafa'];
    if (clavesPredefinidas.includes(clave)) {
        return true;
    } else {
        return false;
    }
};

functions.determinarSigno = determinarSigno;
functions.encontrarCaracter = encontrarCaracter;
functions.encontrarProducto = encontrarProducto;
functions.aconsejarTransporte = aconsejarTransporte;
functions.calcularPrecioVenta = calcularPrecioVenta;
functions.recomendarBebida = recomendarBebida;
functions.accesoSalaDeJuegos = accesoSalaDeJuegos;
functions.contarNumeros = contarNumeros;
functions.mostrarNumerosPares = mostrarNumerosPares;
functions.contarEnBase = contarEnBase;
functions.repetirCaracter = repetirCaracter;
functions.contarNumerosPares = contarNumerosPares;
functions.mostrarTablaDeMultiplicar = mostrarTablaDeMultiplicar;
functions.encontrarMinimoMaximo = encontrarMinimoMaximo;
functions.iniciarSesion = iniciarSesion;

module.exports = functions;

// Puedes agregar cualquier otra función que desees aquí.
