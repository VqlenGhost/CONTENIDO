const catalogo = document.getElementById('catalogo');

productos.forEach(producto => {
  const card = document.createElement('div');
  card.className = 'producto';
  card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h2>${producto.nombre}</h2>
    <p class="precio">$${parseInt(producto.precio).toLocaleString()}</p>
    <p>${producto.descripcion}</p>
    
    <div class="botones">
      <button class="btn-vista" onclick="mostrarVistaPrevia('${producto.previewUrl}')">
        👁️ Vista Previa
      </button>
      <button class="btn-telegram" onclick="pedirPorTelegram('${producto.nombre}', ${producto.precio}, '${producto.imagen}')">
        📨 Pedir por Telegram
      </button>
    </div>
  `;
  catalogo.appendChild(card);
});

// Modal con iframe
const modal = document.getElementById('modal');
const modalIframe = document.getElementById('modal-iframe');

function mostrarVistaPrevia(url) {
  if (url) {
    modalIframe.src = url;
    modal.style.display = 'flex';
  } else {
    alert("Vista previa no disponible para este producto");
  }
}

// Cerrar modal
document.querySelector('.close').onclick = function() {
  modal.style.display = 'none';
  setTimeout(() => {
    modalIframe.src = ''; // Limpiar iframe
  }, 300);
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    setTimeout(() => {
      modalIframe.src = '';
    }, 300);
  }
};

function pedirPorTelegram(nombre, precio, imagen) {
  const mensaje = `Hola! Quiero este producto:%0A%0A` +
                  `🛍️ *${encodeURIComponent(nombre)}*%0A` +
                  `💰 Precio: $${precio}%0A` +
                  `🖼️ Imagen: ${encodeURIComponent(imagen)}`;

  const url = `https://t.me/TU_USUARIO?text=${mensaje}`;  // ← Cambia TU_USUARIO
  window.open(url, '_blank');
}
