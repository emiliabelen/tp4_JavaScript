

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
function compararNumPagLibros(libro1, libro2) {
  if (libro1.getNumPaginas > libro2.getNumPaginas) {
    return document.write(
      `<p>${libro1.getTiulo} tiene más números de páginas que ${libro2.getTiulo}</p>`
    );
  } else if (libro1.getNroPaginas < libro2.getNroPaginas) {
    return document.write(
      `<p>${libro2.getTiulo} tiene más números de páginas que ${libro1.getTiulo}</p>`
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
