// 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 


class Animal {
    #nombre;
    #edad;
    constructor(nombre, edad) {
      this.#nombre = nombre;
      this.#edad = edad;
    }
    //getter y setter
    set nombre(nuevoNombre) {
      if (nuevoNombre.length > 0) {
        this.#nombre = nuevoNombre;
      }
    }
  
    get nombre() {
      return this.#nombre;
    }
  
    set edad(nuevaEdad) {
      if (nuevaEdad.length > 0) {
        this.#edad = nuevaEdad;
      }
    }
  
    get edad() {
      return this.#edad;
    }
  
    //metodos
    emitirSonido() {
      document.write(`<p>El animal emite su sonido.</p>`);
    }
  }
  
  class Perro extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad); //invoco al constructor del padre
    }
    emitirSonido() {
      super.emitirSonido();
      document.write(`<p>Los perros emiten el sonido: ¡Guau guau!</p>`);
    }
  }
  class Gato extends Animal {
    emitirSonido() {
      super.emitirSonido();
      document.write(`<p>Los gatos emiten el sonido: miau, miau!</p>`);
    }
  }
  
  const antonito = new Perro('antonito', 5);
  const buendi = new Gato('buendi', 4);
  
  antonito.emitirSonido();
  buendi.emitirSonido();