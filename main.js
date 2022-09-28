let resultado = ""
let primerNum;
let segundoNum;
let cuenta;
let resultadoFinal;

// Numero

const pantalla = document.querySelector('#pantalla')
const botonNum = document.querySelectorAll('.boton-num').forEach(elem => elem.addEventListener("click",
() => {
    resultado+= elem.value
    pantalla.value = resultado
}));

// Sumar

const sumar = document.querySelector("#sumar")
sumar.addEventListener('click', () => {
    primerNum = Number(resultado)
    resultado = ""
    cuenta = "+"
})

// Resta

const restar = document.querySelector("#restar")
restar.addEventListener('click', () => {
    primerNum = Number(resultado)
    resultado = ""
    cuenta = "-"
})

// Multiplicar

const multiplicar = document.querySelector("#multiplicar")
multiplicar.addEventListener('click', () => {
    primerNum = Number(resultado)
    resultado = ""
    cuenta = "*"
})

// Dividir

const dividir = document.querySelector("#dividir")
dividir.addEventListener('click', () => {
    primerNum = Number(resultado)
    resultado = ""
    cuenta = "/"
})

// Resultado

const igual = document.querySelector('#igual')
igual.addEventListener('click', () => {
    segundoNum = Number(resultado)
    resultado = ""
    if (cuenta === "+") resultadoFinal = primerNum + segundoNum
    else if (cuenta === "-") resultadoFinal = primerNum - segundoNum
    else if (cuenta === "*") resultadoFinal = primerNum * segundoNum
    else if (cuenta === "/") resultadoFinal = primerNum / segundoNum
    pantalla.value = resultadoFinal
    resultado = resultadoFinal
})

// Reset

const reset = document.querySelector('#reset')
reset.addEventListener('click', () => {
    resultado = ""
    primerNum = 0
    segundoNum = 0
    cuenta = 0
    resultadoFinal = 0
    pantalla.value = ""
})

// Remove last digit

const remove = document.querySelector('#remove')
remove.addEventListener('click', () => {
    pantalla.value = pantalla.value.slice(0, -1)
    resultado = pantalla.value
})

// Dark Mode

const darkMode = document.querySelector('#darkmode')
darkMode.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('dark-mode')
})

// Color

const color = document.querySelector('#color')
color.addEventListener('click', () => {
    document.querySelector('.color-container').classList.toggle('visible')
})

const light = document.querySelector('#light').addEventListener('click', () => {
    document.querySelectorAll('.boton').forEach(elem => elem.style.background = "#e3e0e8");
    document.querySelector('#pantalla').style.background = "#e3e0e8"
    document.querySelector('.calculadora').style.background = "#f4f1f9"
})
const dark = document.querySelector('#dark').addEventListener('click', () => {
    document.querySelectorAll('.boton').forEach(elem => elem.style.background = "#2d2f2f");
    document.querySelector('#pantalla').style.background = "#2d2f2f"
    document.querySelector('.calculadora').style.background = "#515555"
})
const purple = document.querySelector('#purple').addEventListener('click', () => {
    document.querySelectorAll('.boton').forEach(elem => elem.style.background = "hotpink");
    document.querySelector('#pantalla').style.background = "#c2bfc5"
    document.querySelector('.calculadora').style.background = "#f4f1f9"
})
const orange = document.querySelector('#orange').addEventListener('click', () => {
    document.querySelectorAll('.boton').forEach(elem => elem.style.background = "coral");
    document.querySelector('#pantalla').style.background = "#c2bfc5"
})
const blue = document.querySelector('#blue').addEventListener('click', () => {
    document.querySelectorAll('.boton').forEach(elem => elem.style.background = "aquamarine");
    document.querySelector('#pantalla').style.background = "#c2bfc5"
})



