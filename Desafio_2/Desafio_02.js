const fs = require("fs");

class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = "./archivos/" + nombreArchivo + ".json";
  }

  /* TODO: Metodo getData */
  async getData() {
    try {
      return await fs.promises.readFile(this.nombreArchivo, "utf-8");
    } catch (error) {
      if (error.code == "ENOENT") {
        fs.writeFile(this.nombreArchivo, "[]", (error) => {
          if (error) {
            console.log("El archivo no pudo ser creado");
          }
        });
      }
    }
  }

  /* TODO: Metodo getAll */
  async getAll() {
    const datos = await this.getData();
    return JSON.parse(datos);
  }

  /* TODO: Metodo Save */
  async save(objeto) {
    try {
      let contenidoDeArchivo = await this.getData();
      let contenidoEnJson = JSON.parse(contenidoDeArchivo);
      let arreglo = [];
      const indice = contenidoEnJson.map((x) => x.id).sort();
      objeto.id = indice[indice.length - 1] + 1;

      if (!objeto.id) {
        objeto.id = 1;
        arreglo = [{ ...objeto }];
        await fs.promises.writeFile(
          this.nombreArchivo,
          JSON.stringify(arreglo)
        );
        return arreglo[0].id;
      }

      contenidoEnJson.push(objeto);

      await fs.promises.writeFile(
        this.nombreArchivo,
        JSON.stringify(contenidoEnJson)
      );
    } catch (error) {
      console.log("No se grabo el archivo");
    }
  }

  /* TODO: Metodo getById */
  async getById(id) {
    try {
      let data = await this.getData();
      data = await JSON.parse(data);
      if (data.find((x) => x.id === id)) {
        console.log(data.find((x) => x.id === id));
      } else {
        console.log("El ID ingresado no existe");
      }
    } catch (error) {
      console.log(error);
    }
  }

  /* TODO: Metodo deleteById */
  async deleteById(id) {
    try {
      let data = await this.getData();
      data = JSON.parse(data);
      data = data.filter((x) => x.id != id);
      fs.writeFileSync(this.nombre, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  /* TODO: Metodo deleteAll */
  async deleteAll() {
    try {
      fs.writeFileSync(this.nombreArchivo, JSON.stringify([]));
    } catch (error) {
      console.log(error);
    }
  }
}

const objetoAdd = {
  title: "Drone Gadnic XP1",
  price: 200000,
  thumbnail:
    "https://www.bidcom.com.ar/publicacionesML/productos/DRGAD006/1000x1000-DRGAD006.jpg",
};

const contenedor = new Contenedor("contenedor");

/* contenedor.getData(); */
/* contenedor.save(objetoAdd); */
/* contenedor.getById(2); */
/* contenedor.deleteById(1) */
/* contenedor.deleteAll(); */

/* TODO: Llamar a todos los productos */

/* objetoAdd.getAll().then((x) => console.log(JSON.stringify(x))); */
