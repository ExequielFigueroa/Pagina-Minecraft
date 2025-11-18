document.getElementById("Opcion").addEventListener("click", function (event) {
    event.preventDefault();

    const opcion = document.getElementById("mob").value.toLowerCase();
    reproducirAnimacion(opcion);
});

function reproducirAnimacion(opcion) {
    let archivo = "";

    switch (opcion) {
        case "blaze":
            archivo = "Blaze.mp4";
            break;
        case "shulker":
            archivo = "Shulker.mp4";
            break;
        case "bebe zombie":
            archivo = "Zombie.mp4";
            break;
        case "aldeano verde":
            archivo = "Aldeano.mp4";
            break;
        case "pollo":
            archivo = "Pollo.mp4";
            break;
        case "caballo esqueleto":
            archivo = "Caballo.mp4";
            break;
        default:
            alert("Opción no válida");
            return;
    }

    const video = document.getElementById("animacion");
    video.src = "imagenes/" + archivo;
    video.play();
}
