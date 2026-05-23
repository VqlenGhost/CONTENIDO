const catalogo = document.getElementById('catalogo');

productos.forEach(producto => {
  const card = document.createElement('div');
  card.className = 'producto';
  card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h2>${producto.nombre}</h2>
    <p class="precio">$${parseInt(producto.precio).toLocaleString()}</p>
    <p>${producto.descripcion}</p>
    <button onclick="pedirPorTelegram('${producto.nombre}', ${producto.precio}, '${producto.imagen}')">
      Pedir por Telegram
    </button>
  `;
  catalogo.appendChild(card);
});

function pedirPorTelegram(nombre, precio, imagen) {
  const mensaje = `Hola! Quiero este producto:%0A%0A` +
                  `🛍️ *${encodeURIComponent(nombre)}*%0A` +
                  `💰 Precio: $${precio}%0A` +
                  `🖼️ Imagen: ${encodeURIComponent(imagen)}`;

  const url = `https://t.me/ghostvqle?text=${mensaje}`;
  window.open(url, '_blank');
}