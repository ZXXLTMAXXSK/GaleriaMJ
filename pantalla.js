// Frases para cada imagen
const frases = [
    "Te quiero mucho.",
    "Eres especial.",
    "Siempre en mi corazón.",
    "Nunca te olvidaré.",
    "Eres única.",
    "Mi favorita.",
    "Siempre contigo.",
    "La alegría de mis días.",
    "Un recuerdo hermoso.",
    "Inolvidable.",
    "Te llevo en mi mente.",
    "Eres un tesoro.",
    "Siempre sonriente.",
    "Luz de mi vida.",
    "Eres un sueño.",
    "Te quiero infinito.",
    "Eres la razón.",
    "Un abrazo a la distancia.",
    "Eres mi inspiración.",
    "Te quiero más que a nada."
];

/// Función para abrir el modal
function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const modalText = document.getElementById("modalText");
    
    modal.style.display = "block"; // Mostrar el modal
    modalImg.src = img.src; // Establecer la imagen del modal
    modalImg.style.width = "10%"; // Cambia el ancho según necesites
    modalImg.style.maxHeight = "90%"; // Altura máxima
    const index = Array.from(img.parentNode.children).indexOf(img); // Obtener el índice de la imagen
    modalText.innerHTML = frases[index]; // Establecer el texto correspondiente
}


// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Ocultar el modal
}
