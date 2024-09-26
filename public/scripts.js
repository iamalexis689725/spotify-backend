document.addEventListener("DOMContentLoaded", function() {
    function obtenerGeneros() {
        fetch('/api/generos')
            .then(response => response.json())
            .then(generos => {
                const listaGeneros = document.getElementById('generos-list');
                listaGeneros.innerHTML = '';
                generos.forEach(genero => {
                    const li = document.createElement('li');

                    const div = document.createElement('div');
                    div.classList.add('card'); 
                    div.style.width = '18rem'; 

                    const img = document.createElement('img');
                    img.classList.add('card-img-top');
                    img.src = "." + genero.imagen; 
                    img.alt = genero.nombre; 

                    const divCardBody = document.createElement('div');
                    divCardBody.classList.add('card-body');
    
                    const h5 = document.createElement('h5');
                    h5.classList.add('card-title');
                    h5.textContent = genero.nombre;

                    const button = document.createElement('button'); // Agregar botón
                    button.textContent = 'Ir'; // Texto del botón
                    button.classList.add('btn', 'btn-primary', 'mt-2'); // Clases del botón
                    button.addEventListener('click', function() { // Evento de clic
                        window.location.href = 'artistas.html'; // Redirigir al HTML de artistas
                    });

                    divCardBody.appendChild(h5);
                    divCardBody.appendChild(button); // Agregar botón al divCardBody
                    div.appendChild(img);
                    div.appendChild(divCardBody);
                    li.appendChild(div);
                    listaGeneros.appendChild(li);
                });
            })
            .catch(error => console.error('Error al obtener generos:', error));
    }

    obtenerGeneros();
});
