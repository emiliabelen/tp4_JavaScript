// 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona {
    constructor(nombre, edad, profesion) {
        //propiedades
    
        this.nombre = nombre;
        this.edad = edad;
        this.profesion= profesion;
    }
             //metodos
      saludar() {
        document.write (`<p>Hola ${this.nombre} !</p>`)
    }
despedirse (){
    document.write (`<p>Hasta luego ${this.nombre}</p>`);
}
    }

//instanciar

const andrea = new Persona(`Andrea`, 42, `Docente`);
const noelia = new Persona (`Noelia`, 31, `Psicologa`)

//ejecutamos los metodos

andrea.saludar ();
andrea.despedirse();
noelia.saludar();
noelia.despedirse ();

    
 