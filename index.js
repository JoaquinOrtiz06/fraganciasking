//Constantes Toggle Titles
const toggleDescription = document.querySelector('.title-description')
const toggleNotes = document.querySelector('.title-notes')

// Constantes Contenido Texto

const contentDescription = document.querySelector('.text-description')
const contentNotes = document.querySelector('.text-notes')

contentDescription.classList.remove('hidden');

// Funciones toggle

toggleDescription.addEventListener('click', () => {
    contentDescription.classList.toggle('hidden');
})

toggleNotes.addEventListener('click', () => {
    contentNotes.classList.toggle('hidden');
})

document.querySelectorAll('.title-description').forEach(title => {
  const icon = title.querySelector('i');
  const desc = title.closest('.container-description').nextElementSibling;

  title.addEventListener('click', () => {
    desc.classList.toggle('hidden');
    icon.classList.toggle('rotate');
  });
});





const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const perfumes = {
  "9pm": {
    nombre: "9PM",
    imagen: "imgs/perfume-9pm.png",
    descripcion: "9PM es una fragancia masculina de carácter intenso y envolvente. Con un equilibrio perfecto entre oud, especias y toques florales, esta fragancia crea una experiencia única y duradera. Ideal para quienes buscan un perfume sofisticado y exclusivo.",
    precio: "$65.000",
    notasImg: "imgs/9pmnotas.jpg",
    categoria: "Unisex",
    stock: false,
  },
  "khamrahqahwa": {
    nombre: "Khamrah Qahwa",
    imagen: "imgs/khamrahqahwaposta.png",
    descripcion: "Khamrah Qahwa es una fragancia cálida y especiada, con notas predominantes de canela, cardamomo y un toque de madera. A medida que evoluciona, se mezclan con ámbar y vainilla, creando una esencia amaderada y dulce. Es una fragancia envolvente y profunda, perfecta para hombres que buscan un aroma cálido y distintivo.",
    precioOriginal: 70000,
    descuento: 20,
    notasImg: "imgs/notaskhamrahq.png",
    categoria: "Unisex",
    stock: true,
  },
  "fakhar": {
    nombre: "Fakhar Pride",
    imagen: "imgs/fakhar-800 (1).png",
    descripcion: "Lataffa Fhakar Pride es una fragancia oriental intensa, con notas de ámbar, vainilla y maderas exóticas. Perfecta para quienes buscan un aroma cálido, sofisticado y duradero. Ideal para noches especiales y ocasiones elegantes. Es muy elegante y masculino, con un fondo amaderado.",
    precioOriginal: 67500,
    descuento: 20,
    notasImg: "imgs/fakharnotas.webp",
    categoria: "Masculina",
    stock: true,
  },
  "honor": {
    nombre: "Honor & Glory",
    imagen: "imgs/honorglory (1).png",
    descripcion: "Lattafa Honor & Glory es una fragancia masculina intensa y seductora, ideal para hombres con carácter y presencia. Abre con una explosión especiada de canela y pimienta negra, seguida de un corazón aromático con lavanda y notas amaderadas. En el fondo, se combinan la vainilla, el incienso y el ámbar gris, dejando una estela cálida, misteriosa y poderosa. Este perfume es perfecto para un hombre seguro de sí mismo que busca destacar con un aroma envolvente y sofisticado, ideal para noches especiales o climas frescos.",
    precio: "$65.000",
    notasImg: "imgs/notashonor.png",
    categoria: "Unisex",
    stock: false,
  },
  "bourbon": {
    nombre: "Asad Bourbon",
    imagen: "imgs/asadbourbon1.png",
    descripcion: "Asad Bourbon de Lattafa es un perfume cálido, especiado y adictivo que combina notas intensas de vainilla, ámbar y especias con un fondo ahumado inspirado en el bourbon. Ideal para las noches frescas, destaca por su presencia envolvente y masculina.",
    precioOriginal: 80000,
    descuento: 20,
    notasImg: "imgs/notasbourbon.png",
    categoria: "Unisex",
    stock: true,
  },
  "oudforglory": {
    nombre: "Oud for Glory",
    imagen: "imgs/oudforgloy2.png",
    descripcion: "Oud for Glory de Lattafa es una fragancia oriental intensa y majestuosa, pensada para hombres que buscan dejar una huella inolvidable. Su apertura combina notas especiadas y amaderadas que despiertan los sentidos, seguida de un corazón dominado por la riqueza del oud y el patchouli, aportando profundidad y carácter. En el fondo, el ámbar y la vainilla suavizan la composición, creando una estela cálida, opulenta y envolvente.",
    precioOriginal: 62500,
    descuento: 20,
    notasImg: "imgs/notasoudforglory.png",
    categoria: "Unisex",
    stock: true,
  },
  "thekingdom": {
    nombre: "The Kingdom",
    imagen: "imgs/thekingdom500.png",
    descripcion: "The Kingdom de Lattafa es una fragancia intensa y majestuosa, con notas amaderadas, cuero y especias que transmiten autoridad y sofisticación. Su aroma profundo y varonil la hace ideal para noches frescas o eventos formales.",
    precioOriginal: 80000,
    descuento: 20,
    notasImg: "imgs/notasthekingdom.png",
    categoria: "Masculina",
    stock: true,
  },
  "yara": {
    nombre: "Yara Moi",
    imagen: "imgs/lattafa-yara-moi-2-PhotoRoom.png",
    descripcion: "Lattafa Yara Moi es una fragancia femenina cremosa y exótica, ideal para mujeres que buscan un aroma elegante y cautivador. Sus notas de salida combinan leche y mango, creando una apertura suave y tropical. En el corazón, florecen acordes de jazmín y flor de azahar que aportan un toque floral envolvente. La base se compone de vainilla, almizcle y sándalo, dejando un rastro cálido y adictivo. Esta versión blanca de Yara es perfecta para una mujer dulce y sofisticada que quiere destacar con una fragancia única y encantadora, ideal tanto para el día como para la noche.",
    precio: "$60.000",
    notasImg: "imgs/notasyaramoi.png",
    categoria: "Femenina",
    stock: false,
  }
};

const perfume = perfumes[id];

if (perfume) {
  // Cargar la información del perfume
  document.getElementById("imagen-perfume").src = perfume.imagen;
  document.getElementById("descripcion-perfume").textContent = perfume.descripcion;
  document.getElementById("notas-perfume").src = perfume.notasImg;
  document.getElementById("notas-perfume").alt = "Notas de " + perfume.nombre;
  document.getElementById("precio-perfume").textContent = perfume.precio;


  // Mostrar precio o mensaje "Sin Stock"
  const precioElemento = document.getElementById("precio-perfume");
  if (perfume.stock) {
    if (perfume.descuento && perfume.precioOriginal) {
      const precioConDescuento = perfume.precioOriginal * (1 - perfume.descuento / 100);
    precioElemento.innerHTML = `
    <span class="price">$${perfume.precioOriginal.toLocaleString()}</span>
        <span class="discount">$${precioConDescuento.toLocaleString()}</span>
        <span class="discount-badge">-${perfume.descuento}%</span>
      `;
    } else {
      precioElemento.textContent = `$${perfume.precioOriginal.toLocaleString()}`;
    }
  precioElemento.style.color = "black"; // para asegurarte que el texto esté en negro
  } else {
    precioElemento.textContent = "Sin Stock";
    precioElemento.style.color = "red"; // Opcional: cambia el color para destacar
  }

  // === PRODUCTOS RELACIONADOS DINÁMICOS ===
  const productosRelacionados = {
    "9pm": ["khamrahqahwa","bourbon","oudforglory"],
    "khamrahqahwa": ["9pm","bourbon","oudforglory"],
    "honor": ["9pm", "khamrahqahwa","bourbon","oudforglory"],
    "bourbon": ["9pm", "khamrahqahwa","oudforglory"],
    "oudforglory": ["9pm", "khamrahqahwa","bourbon"],
    "fakhar": ["thekingdom"],
    "thekingdom": ["fakhar"],
    "yara": []
  };

  const relacionados = productosRelacionados[id] || [];
  const contenedorRelacionados = document.getElementById('contenedor-relacionados');
  const seccionRelacionados = document.getElementById('pdrelacionados');

  // Limpiar los productos relacionados antes de insertar los nuevos
  contenedorRelacionados.innerHTML = '';

  // Verifica que hay productos relacionados para el perfume actual
  if (relacionados.length > 0) {
    relacionados.forEach((relId) => {
      if (relId === id) return; // Evita mostrar el perfume actual

      const rel = perfumes[relId];
      const card = document.createElement('a');
      card.href = `product.html?id=${relId}`;  // Se genera el enlace dinámicamente
      card.className = 'card';
      card.innerHTML = `
        <div class="card-img">
          <img src="${rel.imagen}" alt="${rel.nombre}">
        </div>
        <div class="info-card">
          <div class="text-product">
            <h3>${rel.nombre}</h3>
            <p class="category">${rel.descripcion}</p>
          </div>
          <span class="price">${rel.precioOriginal ? "$" + rel.precioOriginal.toLocaleString() : rel.precio}</span>
      ${rel.descuento ? `<span class="discount">$${(rel.precioOriginal * (1 - rel.descuento / 100)).toLocaleString()}</span>` : ""}
      ${rel.descuento ? `<span class="discount-badge">${rel.descuento}% OFF</span>` : ""}
        </div>
      `;
      contenedorRelacionados.appendChild(card);
    });
  } else {
    seccionRelacionados.style.display = 'none';  // Si no hay productos relacionados, ocultamos la sección
  }
} else {
  // Si no existe el perfume
  document.body.innerHTML = "<p>Perfume no encontrado. <a href='index.html'>Volver al catálogo</a></p>";
}
