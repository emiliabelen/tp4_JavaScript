//4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las
//propiedades código, nombre y precio, además del método imprime datos, el cual escribe
//por pantalla los valores de sus propiedades.
//Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
//Por último, utilice el método imprime datos para mostrar por pantalla los valores de
//los tres objetos instanciados.

//PROPIEDADES
class Producto {
  constructor(codigo, nombre, precio) {
    //PROPIEDADES
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  //METODOS
  imprimirDatos() {
    document.write(`<h3>Datos del producto:</h3>`);
    document.write(`<ul>`);
    document.write(`<li>Codigo: ${this.codigo}</li>`);
    document.write(`<li>Nombre: ${this.nombre}</li>`);
    document.write(`<li>Precio: ${this.precio}</li>`);
    document.write(`</ul>`);
  }
}
//INSTANCIAR
const tvPlasma = new Producto(000701, `TV Plasma HITACHI`, 145.999);
const compuHP = new Producto(000452, `HP CoreI3`, 125.999);

//EJECUTAR METODOS
tvPlasma.imprimirDatos();
compuHP.imprimirDatos();
