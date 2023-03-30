// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
// Rectángulos

class Cuenta {
  constructor(titular, saldo) {
    //propiedades

    this.titular = titular;
    this.saldo = saldo;
  }

  //metodos
  ingresar(cantidad) {
    this.saldo += cantidad;
    document.write(
      `<p>Se ingreso correctamente el dinero. Saldo actual: ${this.saldo} </p>`
    );
  }
  extraer(cantidad) {
    this.saldo -= cantidad;
    document.write(`<p>Se extrajo correctamente el dinero. Saldo actual: ${this.saldo} </p>`);
  }
  informar() {
    document.write(`<p> Saldo actual: ${this.saldo} </p>`);
  }
}
//instanciar

let persona1 = new Cuenta("Alex", 0);

//ejecutamos los metodos

persona1.informar ();
persona1.ingresar(300);
persona1.ingresar(500);
persona1.extraer  (200)
