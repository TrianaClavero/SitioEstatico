const recetas = [
    {
        nombre: "Pasta a la carbonara",
        imagen: "images/Pastas/pasta-a-la-carbonara.jpg",
        tiempoPreparacion: "30 minutos",
        url: 'arroz_con_pollo.html'
    },
    {
        nombre: "Sorrentinos rellenos de jamon y queso",
        imagen: "images/Pastas/Sorrentinos-rellenos-de-jamon-y-queso.jpg",
        tiempoPreparacion: "45 minutos",
        url: 'arroz_con_pollo.html'
    },
    {
        nombre: "Pasta a la carbonara",
        imagen: "images/Pastas/pasta-a-la-carbonara.jpg",
        tiempoPreparacion: "30 minutos",
        url: 'arroz_con_pollo.html'
    },
    {
        nombre: "Sorrentinos rellenos de jamon y queso",
        imagen: "images/Pastas/Sorrentinos-rellenos-de-jamon-y-queso.jpg",
        tiempoPreparacion: "45 minutos",
        url: 'arroz_con_pollo.html'
    },
    {
        nombre: "Pasta a la carbonara",
        imagen: "images/Pastas/pasta-a-la-carbonara.jpg",
        tiempoPreparacion: "30 minutos",
        url: 'arroz_con_pollo.html'
    },
    {
        nombre: "Sorrentinos rellenos de jamon y queso",
        imagen: "images/Pastas/Sorrentinos-rellenos-de-jamon-y-queso.jpg",
        tiempoPreparacion: "45 minutos",
        url: 'arroz_con_pollo.html'
    },
    {
        nombre: "Pasta a la carbonara",
        imagen: "images/Pastas/pasta-a-la-carbonara.jpg",
        tiempoPreparacion: "30 minutos",
        url: 'arroz_con_pollo.html'
    },
    {
        nombre: "Sorrentinos rellenos de jamon y queso",
        imagen: "images/Pastas/Sorrentinos-rellenos-de-jamon-y-queso.jpg",
        tiempoPreparacion: "45 minutos",
        url: 'arroz_con_pollo.html'
    },
    {
        nombre: "Pasta a la carbonara",
        imagen: "images/Pastas/pasta-a-la-carbonara.jpg",
        tiempoPreparacion: "30 minutos",
        url: 'arroz_con_pollo.html'
    },
    {
        nombre: "Sorrentinos rellenos de jamon y queso",
        imagen: "images/Pastas/Sorrentinos-rellenos-de-jamon-y-queso.jpg",
        tiempoPreparacion: "45 minutos",
        url: 'arroz_con_pollo.html'
    },
    {
        nombre: "Pasta a la carbonara",
        imagen: "images/Pastas/pasta-a-la-carbonara.jpg",
        tiempoPreparacion: "30 minutos",
        url: 'arroz_con_pollo.html'
    },
    {
        nombre: "Sorrentinos rellenos de jamon y queso",
        imagen: "images/Pastas/Sorrentinos-rellenos-de-jamon-y-queso.jpg",
        tiempoPreparacion: "45 minutos",
        url: 'arroz_con_pollo.html'
    },
    // mas recetas
];
document.addEventListener("DOMContentLoaded", function() {
    const recipesContainer = document.getElementById("recipes-container");

    recetas.forEach(receta => {
        const link = document.createElement("a");
        link.href = receta.url; 
        link.classList.add("card-link");

        // crea un div para la tarjeta de receta
        const card = document.createElement("div");
        card.classList.add("card-receta");

        // crea img para la imagen de la receta
        const imagen = document.createElement("img");
        imagen.src = receta.imagen;
        imagen.alt = "Imagen de la receta";

        // Crea un div para los datos de la receta
        const detailsRecipe = document.createElement("div");
        detailsRecipe.classList.add("details-recipe");

        // Crea un h2 para el nombre de la receta
        const nombreReceta = document.createElement("h2");
        nombreReceta.textContent = receta.nombre;

        // Crea un p para el tiempo de preparación
        const tiempoPreparacion = document.createElement("p");
        tiempoPreparacion.textContent = "Tiempo de preparación: " + receta.tiempoPreparacion;

        // Agrega la imagen, el nombre y el tiempo de preparación a la tarjeta de receta
        card.appendChild(imagen);
        detailsRecipe.appendChild(nombreReceta);
        detailsRecipe.appendChild(tiempoPreparacion);
        card.appendChild(detailsRecipe);

        link.appendChild(card);

        // Agrega la tarjeta de receta al contenedor de recetas
        recipesContainer.appendChild(link);
    });
});