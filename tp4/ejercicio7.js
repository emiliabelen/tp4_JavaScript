// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

class Contacto {
    constructor(nombre, telefono) {
      this._nombre = nombre;
      this._telefono = telefono;
    }
    // set
    set nombre(nuevoNombre) {
      if (nuevoNombre.length > 0) {
        this._nombre = nuevoNombre;
      }
    }
    set telefono(nuevoTelefono) {
      if (nuevoTelefono.length > 0) {
        this._telefono = nuevoTelefono;
      }
    }
  
    //get
    get nombre() {
      return this._nombre;
    }
    get telefono() {
      return this._telefono;
    }
  }
  
  class Agenda {
    constructor(tamanio = 10) {
      this._contactos = [];
      this._tamanio = tamanio;
    }
  
    get contactos() {
      return this._contactos;
    }
  
    set contactos(nuevoContacto) {
      this._contactos.push(nuevoContacto);
    }
  
    get tamanio() {
      return this._tamanio;
    }
  
    set tamanio(nuevoTamanio) {
      if (nuevoTamanio > 0) {
        this._tamanio = nuevoTamanio;
      }
    }
  
    //metodos
    //1- Añadir contacto nuevo a la agenda
    aniadirContacto(contacto) {
      if (!this.agendaLlena()) {
        if (!this.existeContacto(contacto.nombre)) {
          this.contactos = contacto;
          alert(`Registrado el contacto con el nombre ${contacto.nombre}`);
        } else {
          alert(`Contacto rechazado.`);
        }
      } else {
        alert(
          `Superaste la cantidad máxima de contactos de la agenda. Contacto rechazado`
        );
      }
    }
  
    //2- Ver si existe un contacto
    existeContacto(nombre) {
      const contactoBuscado = this.contactos.find(
        (element) => element._nombre === nombre
      );
      if (contactoBuscado) {
        alert(`Si existe el contacto con el nombre ${contactoBuscado.nombre}`);
        return true;
      } else {
        alert(`No existe el contacto con el nombre ${nombre}`);
        return false;
      }
    }
  
    //3- Listar Contactos de la agenda
    listarContactos() {
      if (this.contactos.length === 0) {
        alert('La agenda está vacía.');
      } else {
        alert(JSON.stringify(this.contactos, null, 4));
      }
    }
  
    //4- Buscar Contacto en la agenda
    buscarContacto(nombre) {
      const contactoBuscado = this._contactos.find(
        (elem) => elem.nombre === nombre
      );
      if (contactoBuscado) {
        alert(
          `Si existe el contacto con el nombre ${contactoBuscado.nombre} y su teléfono es ${contactoBuscado.telefono}`
        );
      } else {
        alert(`No existe el contacto con el nombre ${nombre}`);
      }
    }
  
    //5- Eliminar Contacto por el nombre
    eliminarContacto(nombre) {
      if (this.contactos.length === 0) {
        alert('No hay contactos en la agenda.');
      } else if (this.existeContacto(nombre)) {
        this._contactos = this.contactos.filter(
          (element) => element._nombre !== nombre
        );
        alert(`El contacto fue eliminado correctamente`);
      } else {
        alert(`No existe el contacto con el nombre ${nombre} a eliminar`);
      }
    }
  
    //6- Ver si la agenda esta llena y
    agendaLlena() {
      if (this.contactos.length === this.tamanio) {
        alert(`La Agenda está llena.`);
        return true;
      } else {
        alert(`La Agenda no está llena.`);
        return false;
      }
    }
  
    //7- Ver si hay huecos libres en la Agenda
    huecosLibres() {
      if (this.contactos.length !== this.tamanio) {
        alert(`La Agenda aun tiene huecos libres.`);
        return true;
      } else {
        alert(`La Agenda no tiene huecos libres.`);
        return false;
      }
    }
  }
  
  //inicializar
  let agenda = new Agenda();
  
  //Variable
  let opcion = '';
  let contactoNuevoNombre = '';
  let contactoNuevoTelefono = '';
  do {
    //MENU
    opcion = prompt(`Ingrese una opción del Menú y presione Aceptar:
    [1] -- Registrar Contacto
    [2] -- Existe Contacto
    [3] -- Listar Contacto
    [4] -- Buscar Contacto
    [5] -- Eliminar Contacto
    [6] -- Ver si la Agenda está llena
    [7] -- Ver si hay huecos libres en la Agenda
    [8] -- Modificar el tamaño de la Agenda
    [BOTON CANCELAR] -- TERMINAR PROGRAMA
    `);
  
    switch (opcion) {
      case '1':
        const nuevoNombre = prompt('Ingresa Nombre del nuevo contacto:');
        const nuevoTelefono = prompt('Ingresa Telefono nuevo del contacto:');
        const nuevoContacto = new Contacto(nuevoNombre, nuevoTelefono);
        agenda.aniadirContacto(nuevoContacto);
        break;
      case '2':
        const contactoExiste = prompt('Ingrese el nombre del contacto a buscar:');
        agenda.existeContacto(contactoExiste);
        break;
      case '3':
        agenda.listarContactos();
        break;
      case '4':
        const contactoBuscar = prompt('Ingrese el nombre del contacto a buscar:');
        agenda.buscarContacto(contactoBuscar);
        break;
      case '5':
        const contactoaEliminar = prompt(
          'Ingrese el nombre del contacto que desea eliminar:'
        );
        agenda.eliminarContacto(contactoaEliminar);
        break;
      case '6':
        agenda.agendaLlena();
        break;
      case '7':
        agenda.huecosLibres();
        break;
      case '8':
        const modificarTamanio = parseInt(
          prompt('Ingrese el nuevo tamaño de la agenda:')
        );
        if (modificarTamanio <= agenda.contactos.length) {
          alert(
            `No es posible asignar un tamaño a la agenda menor o igual al actual que es: ${agenda.contactos.length}.`
          );
        } else {
          agenda.tamanio = modificarTamanio;
          alert(
            `Se cambió correctamente el tamaño de la agenda a ${agenda.tamanio}`
          );
        }
        break;
      case null:
        alert('FIN DE PROGRAMA');
        break;
      default:
        alert('Opción inválida');
    }
  } while (confirm('¿Desea realizar otra operación?'));