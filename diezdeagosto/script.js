document.addEventListener("DOMContentLoaded", function () {

    const secciones = document.querySelectorAll("section");
    const links = document.querySelectorAll("#nav-links a");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    /* =========================
       OCULTAR TODAS LAS SECCIONES
    ========================= */
    function ocultarSecciones() {
        secciones.forEach(function(seccion) {
            seccion.style.display = "none";
        });
    }

    /* =========================
       MOSTRAR SECCIÓN
    ========================= */
    function mostrarSeccion(id) {
        ocultarSecciones();
        const activa = document.getElementById(id);
        if (activa) {
            activa.style.display = "block";
        }

        // SI ES ADMISIONES → mostrar promociones primero
        if(id === "admisiones"){
            mostrarPromociones();
        }
    }

    /* =========================
       CLICK EN MENÚ
    ========================= */
    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const destino = this.getAttribute("href").replace("#", "");
            mostrarSeccion(destino);

            // cerrar menú móvil
            navLinks.classList.remove("active");
        });
    });

    /* =========================
       MENÚ HAMBURGUESA
    ========================= */
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    /* =========================
       BOTÓN INICIO
    ========================= */
    window.scrollToSection = function(id) {
        mostrarSeccion(id);

         // Si vamos a admisiones, mostrar Promociones primero
        if(id === "admisiones") {
            mostrarPromociones();
        }
    };

    // Mostrar inicio al cargar
    mostrarSeccion("inicio");


});

//funcion hisroria
function mostrarHistoria(){
    document.getElementById("contenido-historia").style.display = "block";
    document.getElementById("contenido-galeria").style.display = "none";
}

function mostrarGaleria(){
    document.getElementById("contenido-historia").style.display = "none";
    document.getElementById("contenido-galeria").style.display = "block";
}
 
// funciones para abrir imagenes
function abrirImagen(img){
    var visor = document.getElementById("visorImagen");
    var imagenGrande = document.getElementById("imagenGrande");
    var texto = document.getElementById("textoImagen");

    visor.style.display = "block";
    imagenGrande.src = img.src;
    texto.innerText = img.dataset.texto;
}

function cerrarImagen(){
    document.getElementById("visorImagen").style.display = "none";
}

//funcion ofertas acdemicas
function mostrarPromociones(){
    document.getElementById("contenido-promociones").style.display="block";
    document.getElementById("contenido-ofertas").style.display="none";
}

function mostrarOfertas(){
    document.getElementById("contenido-promociones").style.display="none";
    document.getElementById("contenido-ofertas").style.display="block";
}

const imagenesInicio = [
"imgue/uediezvinces.jpg",
//cambiar images auto
"imgue/uediezvinces.jpg",
"imgue/uediezvinces.jpg"
];

let indexInicio = 0;
const inicio = document.querySelector(".inicio");

function cambiarImagenInicio(){

inicio.style.background =
`linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0)),
 linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0)),
 url(${imagenesInicio[indexInicio]}) center/cover fixed no-repeat`;

indexInicio++;

if(indexInicio >= imagenesInicio.length){
    indexInicio = 0;
}

}

setInterval(cambiarImagenInicio, 5000);

cambiarImagenInicio();

//funcion dece
function mostrarDECE(){

let seccion = document.getElementById("contenido-dece");

seccion.style.display = "block";

/* después de 15 segundos se oculta */
setTimeout(function(){
    seccion.style.display = "none";
}, 15000);

}

//funcion ints
function abrirGaleriaQS(img){
    document.getElementById("visor-qs").style.display="flex";
    document.getElementById("img-qs").src = img.src;
    document.getElementById("texto-qs").innerText = img.dataset.texto;
}

function cerrarGaleriaQS(){
    document.getElementById("visor-qs").style.display="none";
}

//deslizargaleria
// VARIABLES
let imagenesGaleria = [];
let indiceGaleria = 0;
let inicioXGaleria = 0;

// ABRIR IMAGEN DE LA GALERÍA
function abrirImagenGaleria(img) {
    imagenesGaleria = Array.from(document.querySelectorAll("#contenido-galeria img"));
    indiceGaleria = imagenesGaleria.indexOf(img);

    const visor = document.getElementById("visorImagen");
    const imagenGrande = document.getElementById("imagenGrande");
    const texto = document.getElementById("textoImagen");

    visor.style.display = "block";
    visor.dataset.tipo = "galeria"; // 🔹 Marca que es galería
    imagenGrande.src = img.src;
    texto.innerText = img.dataset.texto;

    // 🔹 Mostrar flechas solo para galería
    visor.querySelector(".flecha-izquierda").style.display = "block";
    visor.querySelector(".flecha-derecha").style.display = "block";
}

// CERRAR VISOR
function cerrarImagen() {
    const visor = document.getElementById("visorImagen");
    visor.style.display = "none";

    // 🔹 Ocultar flechas al cerrar
    visor.querySelector(".flecha-izquierda").style.display = "none";
    visor.querySelector(".flecha-derecha").style.display = "none";

    // Limpiar tipo
    delete visor.dataset.tipo;
}

// FUNCIONES SIGUIENTE/ANTERIOR SOLO PARA GALERÍA
function siguienteImagen() {
    const visor = document.getElementById("visorImagen");
    if (visor.dataset.tipo !== "galeria") return; // solo galería
    if (imagenesGaleria.length === 0) return;

    indiceGaleria = (indiceGaleria + 1) % imagenesGaleria.length;
    actualizarVisorGaleria();
}

function imagenAnterior() {
    const visor = document.getElementById("visorImagen");
    if (visor.dataset.tipo !== "galeria") return; // solo galería
    if (imagenesGaleria.length === 0) return;

    indiceGaleria = (indiceGaleria - 1 + imagenesGaleria.length) % imagenesGaleria.length;
    actualizarVisorGaleria();
}

// ACTUALIZAR VISOR
function actualizarVisorGaleria() {
    const imagenGrande = document.getElementById("imagenGrande");
    const texto = document.getElementById("textoImagen");

    imagenGrande.src = imagenesGaleria[indiceGaleria].src;
    texto.innerText = imagenesGaleria[indiceGaleria].dataset.texto;
}

// DESLIZAMIENTO TÁCTIL
const visorGaleria = document.getElementById("visorImagen");

if (visorGaleria) {
    visorGaleria.addEventListener("touchstart", e => {
        inicioXGaleria = e.touches[0].clientX;
    });

    visorGaleria.addEventListener("touchend", e => {
        if (visorGaleria.dataset.tipo !== "galeria") return; // solo galería
        const finX = e.changedTouches[0].clientX;
        const diferencia = inicioXGaleria - finX;

        if (diferencia > 50) siguienteImagen();      // izquierda
        else if (diferencia < -50) imagenAnterior(); // derecha
    });
}

//
// Referencia de secciones
const secciones = document.querySelectorAll("section");

// Ocultar todas las secciones
function ocultarSecciones() {
    secciones.forEach(sec => sec.style.display = "none");
}

// Mostrar sección y actualizar historial sin duplicar
function mostrarSeccion(id) {
    ocultarSecciones();
    const activa = document.getElementById(id);
    if (activa) activa.style.display = "block";

    if (id === "admisiones") mostrarPromociones();

    // Evitar duplicar historial si ya estamos en esa sección
    if (window.location.hash.replace('#','') !== id) {
        window.history.pushState({ seccion: id }, '', '#' + id);
    }
}

// Detectar flecha atrás / adelante (móviles y PC)
window.addEventListener('popstate', function(event) {
    const id = (event.state && event.state.seccion) || 'inicio';
    ocultarSecciones();
    const activa = document.getElementById(id);
    if (activa) activa.style.display = "block";

    if (id === "admisiones") mostrarPromociones();
});

// Inicializar al cargar
document.addEventListener("DOMContentLoaded", function() {
    // Mostrar la sección que viene en el hash o inicio
    const inicioId = window.location.hash.replace('#','') || 'inicio';
    mostrarSeccion(inicioId);

    // Reemplazar estado inicial para que el historial funcione bien en móviles
    window.history.replaceState({ seccion: inicioId }, '', '#' + inicioId);

    // Click en links del menú
    document.querySelectorAll("#nav-links a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const destino = this.getAttribute("href").replace('#','');
            mostrarSeccion(destino);
        });
    });
});

// IMAGENES AUTOMATICAS COMUNIDAD EDUCATIVA
const imagenesQS = [
"exp/computersupport.jpg",
"exp/computersecurity.jpg",
"exp/financial_and_accountingmanagement.jpg",
"exp/physicalactivity.jpg"
];

let indiceQS = 0;

const imagenQS = document.querySelector(".cuadro-grande .promociones-img img");

function rotarImagenQS(){

if(!imagenQS) return;

indiceQS++;

if(indiceQS >= imagenesQS.length){
    indiceQS = 0;
}

imagenQS.src = imagenesQS[indiceQS];

}

// cambiar cada 10 segundos
setInterval(rotarImagenQS, 10000);