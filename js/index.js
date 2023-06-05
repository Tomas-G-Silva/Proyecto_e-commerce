
//DECLARACIONES ---- 
const SALIR = 4;

//OPCION 1 
const elegirProductos = () => {
    let menu
    menu = parseInt(prompt(" Selecciona una opción: \n 1-Espumantes \n 2-Vodkas \n 3-Rones \n 4-Volver al menu principal"));
    while (menu !== SALIR) {
        switch (menu) {
            case 1: mostrarEspumantes();
                break;
            case 2: mostrarVodkas();
                break;
            case 3: mostrarRones();
                break;
            default:
                alert("Ingreso una opcion invalida");
                break;
        }

        menu = parseInt(prompt(" Selecciona una opción: \n 1-Espumantes \n 2-Vodkas \n 3-Rones \n 4-Volver al menu principal"));
    }
}

//OPCION 2

const calcularDescuentos = () => {
    let precio = parseInt(prompt("Ingrese el valor del producto en pesos ($) :"));
    let descuento = parseInt(prompt("Ingrese el porncetaje de descuento (%) :"));
    let descuentoDecimal = descuento * 0.01;
    let resultado = precio - (precio * descuentoDecimal);

    alert("El valor final del producto es de: " + "$" + resultado)
}



//OPCION 3

const calcularEnvio = () => {
    let distancia = parseInt(prompt("Ingrese su distancia con respecto al barrio Colegiales en \"km\":"))

    if (distancia >= 0 && distancia <= 5) {
        alert("Su envio costara al rededor de los $1000");

    } else if (distancia > 5 && distancia <= 10) {
        alert("Su envio costara al rededor de los $2500");
    }
    else if (distancia > 10 && distancia <= 20) {
        alert("Su envio costara al rededor de los $4000");
    } else {
        alert("Lamentablemente no realizamos envios por esa zona");
    }
}




let edad = parseInt(prompt("Hola, Bienvenido.\n Por favor, ingresa tu edad"))
if (edad >= 18) {

    let menu = parseInt(prompt("Por favor selecciona una opción: \n 1-Elegir productos \n 2-Calcular descuentos \n 3-Calcular envio \n 4-Salir"));

    while (menu !== SALIR) {

        switch (menu) {
            case 1: elegirProductos();
                break;
            case 2: calcularDescuentos();
                break;
            case 3: calcularEnvio();
                break;
            default:
                alert("Ingreso una opcion invalida, por favor ingrese una de las opciones que se muestran en pantalla");
                break;
        }

        menu = parseInt(prompt("Selecciona una opción: \n 1-Elegir productos \n 2-Calcular descuentos \n 3-Calcular envio \n 4-Salir"));
    }

    alert("Gracias por su compra, vuelva pronto 😁")

} else {
    alert("Aun sos menor para poder ingresar a esta pagina");
}