// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas
// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

// class Libro {
//   constructor(isbn, titulo, autor, numPag) {
//     //PROPIEDADES

//     this.isbn = isbn;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.numPag = numPag;
//   }

//   //SET
//   set setIsbn(isbn) {
//     this.isbn = isbn;
//   }
//   set setTitulo(titulo) {
//     this.titulo = titulo;
//   }
//   set setAutor(autor) {
//     this.autor = autor;
//   }
//   set setNumPag(numPag) {
//     this.numPag = numPag;
//   }

//   //GET

//   get getIsbn() {
//     return this.isbn;
//   }
//  get getTitulo() {
//     return this.titulo;
//   }
//  get getAutor() {
//     return this.autor;
//   }
//   get getNumPag() {
//     return this.numPag;
//   }

// //metodo
// mostrarLibro(){
// document.write(
//   `<p>El libro ${this.libro} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numPag} </p>`
// );

// }
// }
// //FUNCION
// function compararNumPagLibros (1, 2) {
// if (1.getNumPag > 2.getNumPag) {
//     return  document.write (
//       `<p> ${2.getTitulo} tiene mas paginas que el libro ${1.getTitulo} </p>`
//       );
// } else if (1.getTitulo < 2.getTitulo) {
//     return document.write (
//       `<p>El libro ${1.getTitulo} tiene mas paginas que el libro ${2.getTitulo}</p>`
//       );
//     } else {
// return document.write(
//   `<p> Ambos libros tienen el mismo numero de paginas </p>`
// );
//     }
// }

// //INSTANCIAR
// const elPibeqArruinabaLasFotos =new Libro (
//     9788415525059;
//     `El pibe que arruinaba las fotos`;
//     `Hernan Casciari`;
//     253;
// );

// const charlasConMiHemisferioIzquierdo = new Libro (
//   `Charlas con mi hemisferio izquierdo`;
//   `Hernan Casciari`;
//   249
// );

// document.write (`<h2>Comparacion entre libros segun la cantidad de paginas:</h2>`);

// compararNumPagLibros (elPibeqArruinabaLasFotos, charlasConMiHemisferioIzquierdo) {

class Libro {
  constructor(isbn, titulo, autor, numPaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  }
  // set
  set setIsbn(isbn) {
    this.isbn = isbn;
  }
  set setTiulo(titulo) {
    this.titulo = titulo;
  }
  set setAutor(autor) {
    this.autor = autor;
  }
  set setNumPaginas(numPaginas) {
    this.numPaginas = numPaginas;
  }

  //get
  get getIsbn() {
    return this.isbn;
  }
  get getTiulo() {
    return this.titulo;
  }
  get getAutor() {
    return this.autor;
  }
  get getNumPaginas() {
    return this.numPaginas;
  }

  mostrarLibro() {
    document.write(
      `<p>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas</p>`
    );
  }
}

//función
function compararNumPagLibros(l1, l2) {
  if (l1.getNumPaginas > l2.getNumPaginas) {
    return document.write(
      `<p>${l1.getTiulo} tiene más números de páginas que ${l2.getTiulo}</p>`
    );
  } else if (l1.getNroPaginas < l2.getNroPaginas) {
    return document.write(
      `<p>${l2.getTiulo} tiene más números de páginas que ${l1.getTiulo}</p>`
    );
  } else {
    return document.write(
      `<p>Ambos libros tiene el mismo número de páginas</p>`
    );
  }
}

//inicializar
const elPibeqArruinabaLasFotos = new Libro(
  `9788415525059`,
  `El pibe que arruinaba las fotos`,
  `Hernan Casciari`,
  253
);

const charlasConMiHemisferioIzquierdo = new Libro(
  `9788493877729`,
  `Charlas con mi hemisferio izquierdo`,
  `Hernan Casciari`,
  249
);

//ejecutar funciones
elPibeqArruinabaLasFotos.mostrarLibro();
charlasConMiHemisferioIzquierdo.mostrarLibro();

document.write(
  "<h3>Comparación de quien tiene más número de páginas entre los 2 libros: </h3>"
);

compararNumPagLibros(
  elPibeqArruinabaLasFotos,
  charlasConMiHemisferioIzquierdo
);
