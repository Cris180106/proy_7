const colors = require('colors');
const functions = require('./proy_modules/functions.js');

const separator = '------------------------------------------------------------';

const main = async () => {
    console.clear();

   
    const numero1 = -9;
    const signo = functions.determinarSigno(numero1);
    console.log(`FUNCIÓN: Determinar Signo`.bgCyan);
    console.log(`Número: ${numero1}`);
    console.log(`Resultado: ${signo}`.red);
    console.log(separator.bgMagenta);

  
    const caracter1 = 'Z';
    const resultado1 = functions.encontrarCaracter(caracter1);
    console.log(`FUNCIÓN: Encontrar Carácter`.bgRed);
    console.log(`Carácter: ${caracter1}`);
    console.log(`Resultado: ${resultado1}`.yellow);
    console.log(separator.bgMagenta);

   
    const producto = 'canela';
    const resultado2 = functions.encontrarProducto(producto);
    console.log(`FUNCIÓN: Encontrar Producto`.red);
    console.log(`Producto: ${producto}`);
    console.log(`Resultado: El cliente requiere ${producto} y ${resultado2}`.yellow);
    console.log(separator.bgMagenta);

   
    const medio = "avión";
    const consejo = functions.aconsejarTransporte(medio);
    console.log(`FUNCIÓN: Aconsejar Transporte`.green);
    console.log(`Medio de Transporte: ${medio}`);
    console.log(`Consejo: ${consejo}`.yellow);
    console.log(separator.bgMagenta);

    const precioBaseProducto = 6500;
    const descuentoProducto = 5;
    const cantidadProducto = 1;
    const resultado3 = functions.calcularPrecioVenta(precioBaseProducto, descuentoProducto, cantidadProducto);
    console.log(`FUNCIÓN: Calcular Precio de Venta`.bgBlue);
    console.log(`Precio Base: $${precioBaseProducto}`);
    console.log(`Descuento: ${descuentoProducto}%`);
    console.log(`Cantidad: ${cantidadProducto}`);
    console.log(`Resultado: El precio total de venta es $${resultado3.precioTotal}, con un descuento del ${resultado3.descuento}%`.yellow);
    console.log(separator.bgMagenta);

    
    const tipoMenu = 'carne';
    const bebidaRecomendada = functions.recomendarBebida(tipoMenu);
    console.log(`FUNCIÓN: Recomendar Bebida`.bgCyan);
    console.log(`Tipo de Menú: ${tipoMenu}`);
    console.log(`Bebida Recomendada: ${bebidaRecomendada}`.yellow);
    console.log(separator.bgMagenta);

  
    const pagoRealizado = 5000;
    const juegosAcceso = functions.accesoSalaDeJuegos(pagoRealizado);
    console.log(`FUNCIÓN: Acceso Sala de Juegos`.bgRed);
    console.log(`Monto Pagado: $${pagoRealizado}`);
    console.log(`Resultado: ${juegosAcceso}`.yellow);
    console.log(separator.bgMagenta);

   
    const numeroContar = 5;
    const numerosContados = functions.contarNumeros(numeroContar);
    console.log(`FUNCIÓN: Contar Números`.green);
    console.log(`Número a Contar: ${numeroContar}`);
    console.log(`Resultados:`.yellow);
    for (const numero of numerosContados) {
        console.log(numero);
    }
    console.log(separator.bgMagenta);

  
    const numeroMostrarPares = 24689;
    const numerosParesMostrados = functions.mostrarNumerosPares(numeroMostrarPares);
    console.log(`FUNCIÓN: Mostrar Números Pares`.bgBlue);
    console.log(`Número: ${numeroMostrarPares}`);
    console.log(`Números Pares:`.yellow);
    for (const numero of numerosParesMostrados) {
        console.log(numero);
    }
    console.log(separator.bgMagenta);

    
    const baseContar = 5;
    const numerosEnBase = functions.contarEnBase(baseContar);
    console.log(`FUNCIÓN: Contar en Base`.bgRed);
    console.log(`Base a Contar: ${baseContar}`);
    console.log(`Números en Base:`.yellow);
    for (const numero of numerosEnBase) {
        console.log(numero);
    }
    console.log(separator.bgMagenta);

   
    const caracterRepetir = 'X';
    const vecesRepetir = 3;
    const resultadoRepetir = functions.repetirCaracter(caracterRepetir, vecesRepetir);
    console.log(`FUNCIÓN: Repetir Carácter`.green);
    console.log(`Carácter: ${caracterRepetir}`);
    console.log(`Veces a Repetir: ${vecesRepetir}`);
    console.log(`Resultado: ${resultadoRepetir}`.yellow);
    console.log(separator.bgMagenta);

    
    const numerosParaContar = [5, 2, 9, 1, 7];
    const resultadosContarPares = functions.contarNumerosPares(numerosParaContar);
    console.log(`FUNCIÓN: Contar Números Pares en un Arreglo`.bgBlue);
    console.log(`Números:`.yellow);
    for (const numero of numerosParaContar) {
        console.log(numero);
    }
    console.log(`Resultados:`.yellow);
    console.log(`Cantidad de Números Pares: ${resultadosContarPares.cantidad}`);
    console.log(`Números Pares:`.yellow);
    for (const numero of resultadosContarPares.pares) {
        console.log(numero);
    }
    console.log(separator.bgMagenta);

    
    const numeroParaMultiplicar = 7;
    const tablaMultiplicar = functions.mostrarTablaDeMultiplicar(numeroParaMultiplicar);
    console.log(`FUNCIÓN: Mostrar Tabla de Multiplicar`.bgCyan);
    console.log(`Número para Multiplicar: ${numeroParaMultiplicar}`);
    console.log(`Tabla de Multiplicar:`.yellow);
    for (const resultado of tablaMultiplicar) {
        console.log(resultado);
    }
    console.log(separator.bgMagenta);

   
    const numerosMinMax = [4, 8, 2, 17, 1, 9];
    const resultadoMinMax = functions.encontrarMinimoMaximo(numerosMinMax);
    console.log(`FUNCIÓN: Encontrar Mínimo y Máximo en un Arreglo`.bgRed);
    console.log(`Números:`.yellow);
    for (const numero of numerosMinMax) {
        console.log(numero);
    }
    console.log(`Resultados:`.yellow);
    console.log(`Mínimo: ${resultadoMinMax.minimo}`);
    console.log(`Máximo: ${resultadoMinMax.maximo}`);
    console.log(`Promedio: ${resultadoMinMax.promedio}`);
    console.log(separator.bgMagenta);

    
    const claveSesion = 'cristian';
    const resultadoInicioSesion = functions.iniciarSesion(claveSesion);
    console.log(`FUNCIÓN: Iniciar Sesión`.bgCyan);
    console.log(`Clave de Sesión: ${claveSesion}`);
    if (resultadoInicioSesion) {
        console.log('Resultado: Inicio de sesión exitoso'.bgGreen);
    } else {
        console.log('Resultado: Inicio de sesión fallido'.bgRed);
    }
    console.log(separator.bgMagenta);
};

main();

