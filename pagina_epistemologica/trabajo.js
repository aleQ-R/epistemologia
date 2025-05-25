// Función para mostrar la sección correspondiente al menú lateral
function mostrarParte(numero) {
    const partes = document.querySelectorAll('.parte');
    const items = document.querySelectorAll('.sidebar li');
  
    partes.forEach((parte, index) => {
      parte.classList.remove('visible');
      if (index === numero - 1) {
        parte.classList.add('visible');
      }
    });
  
    items.forEach((item, index) => {
      item.classList.remove('selected');
      if (index === numero - 1) {
        item.classList.add('selected');
      }
    });
  }