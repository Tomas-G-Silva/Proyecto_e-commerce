
//DECLARACIONES ---- 
const SALIR = 5;
const ATRAS = 4;
const ArrayProductos = [];
const ArrayCarrito = [];
let idGlobal = 1;



//CONSTRUCT
class Productos {
    constructor(id, nombre, descripcion, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
    }
}
//Espumantes
const espumante1 = new Productos(idGlobal++, "Deseado Rose", "Espumante rojo cereza muy atractivo, brillante y de finas burbujas", 1600, "Espumantes");
ArrayProductos.push(espumante1);

const espumante2 = new Productos(idGlobal++, "Navarro Correas Extra Brut", "De color amarillo pálido verdoso. Aromas frescos afrutados y florales", 2500, "Espumantes");
ArrayProductos.push(espumante2);

const espumante3 = new Productos(idGlobal++, "Federico de Alvear", "Límpido, de color verde muy tenue, con un perlage persistente de gran calidad", 1100, "Espumantes");
ArrayProductos.push(espumante3);

//Vodkas
const vodkas1 = new Productos(idGlobal++, "Absolute 750ml", "Suave y maduro con el carácter distintivo del grano de trigo, seguido de un toque a frutas secas", 3800, "Vodkas");
ArrayProductos.push(vodkas1);

const vodkas2 = new Productos(idGlobal++, "Smirnoff 750ml", "Se trata de una variante con sabor, cuya pureza y neutralidad pretenden resaltar el sabor de la fruta", 2500, "Vodkas");
ArrayProductos.push(vodkas2);

const vodkas3 = new Productos(idGlobal++, "Sky 750ml", "Presenta un aspecto muy brillante, límpido y cristalino con un un sabor suave de leve amargor", 2450, "Vodkas");
ArrayProductos.push(vodkas3);

//Rones
const rones1 = new Productos(idGlobal++, "Bacardi Blanco", "Ron ligero y aromáticamente equilibrado", 3200, "Rones");
ArrayProductos.push(rones1);

const rones2 = new Productos(idGlobal++, "Bacardi Dorado", "Es el primer ron dorado ligero del mundo. Se envejece en barricas de roble blanco tostado al fuego para darle carácter", 3350, "Rones");
ArrayProductos.push(rones2);

const rones3 = new Productos(idGlobal++, "Havana Club", "Es considerado la transición entre los Rones Blancos y los Oscuros", 2100, "Rones");
ArrayProductos.push(rones3);



//FILTROS
const mostrarProductosCategoria = (categoria) => {
    const filtrado = ArrayProductos.filter((el) => el.categoria == categoria);
    let mensaje = "";

    filtrado.forEach((el) => {
        mensaje += "\n" + el.id + "-Prodcuto: " + el.nombre + "\nDescripción: " + el.descripcion + "\nPrecio: $" + el.precio + "\n"
    });

    const id = parseInt(prompt(mensaje + "\n" + "Ingrese el numero del producto para agregarlo al carrito"));
    const productoEncontrado = ArrayProductos.find(el => el.id === id);
    ArrayCarrito.push(productoEncontrado);
}



//OPCION 1 
const elegirProductos = () => {
    let menu
    menu = parseInt(prompt(" Selecciona una opción: \n 1-Espumantes \n 2-Vodkas \n 3-Rones \n 4-Volver al menu principal"));
    while (menu !== ATRAS) {
        switch (menu) {
            case 1: mostrarProductosCategoria("Espumantes");
                break;
            case 2: mostrarProductosCategoria("Vodkas");
                break;
            case 3: mostrarProductosCategoria("Rones");
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

//OPCION 4
const verCarrito = () => {
    let mensaje = "Mi Carrito 🛒 \n";

    ArrayCarrito.forEach((el) => {
        mensaje += "\n" + "Prodcuto: " + el.nombre + "\nPrecio: $" + el.precio + "\n"
    });

    //SUMA de carrito
    const total = ArrayCarrito.reduce((acumulador, el) => acumulador + el.precio, 0);

    mensaje += "\nEl total es $" + total;
    alert(mensaje);
}


let edad = parseInt(prompt("Hola, Bienvenido.\n Por favor, ingresa tu edad"))
if (edad >= 18) {

    let menu = parseInt(prompt("Por favor selecciona una opción: \n 1-Elegir Productos \n 2-Calcular Descuentos \n 3-Calcular Envio \n 4-Ver Carrito \n 5-Salir"));

    while (menu !== SALIR) {

        switch (menu) {
            case 1: elegirProductos();
                break;
            case 2: calcularDescuentos();
                break;
            case 3: calcularEnvio();
                break;
            case 4: verCarrito();
                break;
            default:
                alert("Ingreso una opcion invalida, por favor ingrese una de las opciones que se muestran en pantalla");
                break;
        }

        menu = parseInt(prompt("Selecciona una opción: \n 1-Elegir productos \n 2-Calcular descuentos \n 3-Calcular envio \n 4-Ver Carrito \n 5-Salir"));
    }

    alert("Gracias por su compra, vuelva pronto 😁")

} else {
    alert("Aun sos menor para poder ingresar a esta pagina");
}