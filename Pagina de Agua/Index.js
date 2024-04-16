document.querySelectorAll('.container > div').forEach(item => {
    item.addEventListener('click', event => {
        const contenido = item.querySelector('.contenido');
        contenido.classList.toggle('hidden');
        event.stopPropagation();// Evita que el evento de clic se propague a los elementos superiores
        
    });
});
