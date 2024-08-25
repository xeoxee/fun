const yesBtn = document.querySelector('#yesBtn');
const carta = document.querySelector('#carta');

yesBtn.addEventListener('click', function() {
    carta.style.display = 'flex'; // Muestra la carta
    carta.querySelector('#open').click(); // Simula un clic en el botón de abrir carta
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});


document.getElementById('showFlower').addEventListener('click', function() {
    // Mostrar las flores
    document.getElementById('flowersContainer').style.display = 'block';
});

// Asegurarse de que el contenedor de flores esté inicialmente oculto
document.getElementById('flowersContainer').style.display = 'none';

document.getElementById('yesBtn').addEventListener('click', function() {
    // Mostrar la carta
    document.getElementById('carta').style.display = 'block';
    // Mostrar el botón de recoger flor
    document.getElementById('showFlower').style.display = 'inline-block';
});

