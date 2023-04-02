//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
// Output:
// objeto.encender();
// objeto.apadar()
// auto encendido
// El auto se apagó

class Auto {
  constructor(color, marca, modelo) {
    //propiedades
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
  }

  //metodos
  encender() {
    document.write(`<p>El auto se encendio correctamente </p>`);
  }
  apagar() {
    document.write(`<p> El auto se apago correctamente </p>`);
  }
}

//instanciar
let auto1 = new Auto("rojo", "Renault", "Sandero", false);

//ejecutamos los metodos

auto1.encender();
auto1.apagar();
