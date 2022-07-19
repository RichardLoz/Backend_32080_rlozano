/* TODO: Declaracion Usuario */

class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
    this.nombresLibros = [];
  }

  /* TODO: METODOS */

  getFullName() {
    return console.log(
      `El usuario se llama ${this.nombre} y se apellida ${this.apellido}`
    );
  }

  addMascota(nombreMascota) {
    this.mascotas.push(nombreMascota);
  }

  countMascotas() {
    return console.log(`El numero de mascotas es ${this.mascotas.length}`);
  }

  addBook(libro) {
    this.libros.push(libro);
  }

  getBookNames() {
    this.libros.forEach((libro) => {
      this.nombresLibros.push(libro.nombre);
    });

    console.log(this.nombresLibros);
  }
}

let usuarioP = new Usuario(
  "Richard",
  "Lozano",
  [
    { nombre: "Los Miserables", Autor: "Víctor Hugo" },
    { nombre: "La Divina Comedia", Autor: "Dante" },
  ],
  ["Perro", "Gato"]
);

usuarioP.getFullName();

usuarioP.addMascota("Leon");

usuarioP.countMascotas();

usuarioP.addBook({ nombre: "El Alquimista", Autor: "Paulo Coelho" });

usuarioP.getBookNames();
