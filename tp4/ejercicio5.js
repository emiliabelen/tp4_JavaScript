// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
//Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
//Si quieres añadir alguna propiedad extra puedes hacerlo.
//Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada
// y cual es el rasgo característico de esta generación.
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

let generaciones = [
    {
      nombre: 'generaciónZ',
      marcoTemporal: [
        1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
        2006, 2007, 2008, 2009, 2010,
      ],
      cantidadPoblacion: 7800000,
      circunstanciaHistorica: 'Expansión masiva de Internet',
      rasgoCaracteristico: 'Irreverencia',
    },
    {
      nombre: 'generaciónY',
      marcoTemporal: [
        1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
        1993,
      ],
      cantidadPoblacion: 7200000,
      circunstanciaHistorica: 'Inicio de la digilitación',
      rasgoCaracteristico: 'Frustración',
    },
    {
      nombre: 'generaciónX',
      marcoTemporal: [
        1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1978, 1979,
      ],
      cantidadPoblacion: 9300000,
      circunstanciaHistorica: 'Crisis del 73 y transición española',
      rasgoCaracteristico: 'Obsesión por el éxito',
    },
    {
      nombre: 'Baby Boom',
      marcoTemporal: [
        1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960,
        1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968,
      ],
      cantidadPoblacion: 12200000,
      circunstanciaHistorica: 'Paz y explotasión demográfica',
      rasgoCaracteristico: 'Ambición',
    },
    {
      nombre: 'SilentGeneration(Los niños de la PostGuerra)',
      marcoTemporal: [
        1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941,
        1942, 1943, 1944, 1945, 1946, 1947, 1948,
      ],
      cantidadPoblacion: 6300000,
      circunstanciaHistorica: 'Conflictos bélicos',
      rasgoCaracteristico: 'Austeridad',
    },
  ];
  
  class Persona {
    constructor(nombre, edad, dni, genero, peso, altura, anionacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.genero = genero;
      this.peso = peso;
      this.altura = altura;
      this.anionacimiento = anionacimiento;
    }
    mostrarGeneracion() {
      let generacion = generaciones.find((element) =>
        element.marcoTemporal.includes(this.anionacimiento)
      );
      document.write(
        `Pertenece a la generación: ${generacion.nombre} y su rasgo característico es: ${generacion.rasgoCaracteristico}`
      );
    }
    esMayordeEdad() {
      if (this.edad >= 18) {
        document.write(`Es mayor de edad`);
      } else {
        document.write(`Es menor de edad`);
      }
    }
    mostrarDatos() {
      document.write('<h3>Datos personales:</h3>');
      document.write('<ul>');
      document.write(`<li>Código: ${this.nombre}</li>`);
      document.write(`<li>Nombre: ${this.edad}</li>`);
      document.write(`<li>DNI: ${this.dni}</li>`);
      document.write(`<li>Género: ${this.genero}</li>`);
      document.write(`<li>Peso: ${this.peso}</li>`);
      document.write(`<li>Altura: ${this.altura}</li>`);
      document.write(`<li>Año de nacimiento: ${this.anionacimiento}</li>`);
      document.write(`</ul>`);
    }
    generarDNI() {
      this.dni = Math.floor(Math.random() * 99999999 + 1);
      document.write(`Nuevo DNI generado: ${this.dni}`);
    }
  }
  
  //función
  mostrarDatosPersona = (persona) => {
    document.write(`<h2>Datos de ${persona.nombre}:</h2>`);
    document.write(`<ul>`);
    document.write(`<li>`);
    persona.mostrarGeneracion();
    document.write(`</li>`);
    document.write(`<li>`);
    persona.esMayordeEdad();
    document.write(`</li>`);
    document.write(`<li>`);
    persona.mostrarDatos();
    document.write(`</li>`);
    document.write(`<li>`);
    persona.generarDNI();
    document.write(`</li>`);
    document.write(`</ul>`);
  };
  
//inicializar
const Santi = new Persona(`Santi`, 7, `55455213`, `M`, 44, 125, 2008 );

const Mene = new Persona(`Mene`, 57, `18341680`, `F`, 66, 159, 1966);

//ejecutar funciones
mostrarDatosPersona(Santi);
document.write(`<hr>`);
mostrarDatosPersona(Mene);
document.write(`<hr>`);
