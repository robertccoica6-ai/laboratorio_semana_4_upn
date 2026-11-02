const input = document.getElementById('tareaInput');
const boton = document.getElementById('agregarBtn');
const lista = document.getElementById('listaTareas');

boton.addEventListener('click', function() {
    const textoTarea = input.value.trim();
    
    if (textoTarea !== '') {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = textoTarea;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.style.marginLeft = '10px';

        // Evento para eliminar cada tarea individualmente
        btnEliminar.addEventListener('click', function() {
            lista.removeChild(nuevaTarea);
        });

        nuevaTarea.appendChild(btnEliminar);
        lista.appendChild(nuevaTarea);
        
        input.value = ''; // Limpiar el input
    }
});