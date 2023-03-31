//3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
  #alto;
  #ancho;
  constructor(alto, ancho) {
    //propiedades

    this.#alto = alto;
    this.#ancho = ancho;
  }

  //SET ALTO
  set alto(alto) {
    this.alto = alto;
  }

  //GET ALTO
  get alto() {
    console.log(this.#alto);
    return this.#alto;
  }

  //SET ANCHO
  set ancho(ancho) {
    this.ancho = ancho;
  }

  //GET ANCHO
  get ancho() {
    return this.ancho;
  }

  //METODOS
  calcularPerimetro() {
    let resultado = 0;
    resultado = 2 * (this.#ancho + this.#alto);
    document.write(`<p>El perimetro del rectangulo es ${resultado}</p>`);
  }
  calcularArea() {
    let resultado = 0;
    resultado = this.#ancho * this.#alto;
    document.write(`<p>El area del perimetro es ${resultado}</p>`);
  }
}

//INSTANCIAR

let rect1 = new Rectangulo(3, 4);
let rect2 = new Rectangulo(8, 5);

//EJECUTAMOS

document.write (`<h2>Rectangulo n1:</h2>`)
rect1.calcularArea ();
rect1.calcularPerimetro ();

document.write (`<h2>Rectangulo n2:</h2>`)
rect2.calcularArea ();
rect1.calcularPerimetro();

