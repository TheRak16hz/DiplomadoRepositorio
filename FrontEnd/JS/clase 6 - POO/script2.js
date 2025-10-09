class Peliculas {
    #id
    #titulo
    #genero
    #duracion
    #clase

    constructor(id, titulo, genero, duracion, clase) {
        //console.log("mensaje desde el constructor");
        this.#id = id
        this.#titulo = titulo
        this.#genero = genero
        this.#duracion = duracion
        this.#clase = clase
    }

        //getter
    get id() {return this.#id};
    get titulo() {return this.#titulo};
    get genero() {return this.#genero};
    get duracion() {return this.#duracion}
    get clase() {return this.#clase}

    //setter
    set titulo(nuevoTitulo) {this.#titulo=nuevoTitulo};
    set genero(nuevoGenero) {this.#genero = nuevoGenero};

    consultar() {
        let salida = `ID: ${this.id}, Titulo: ${this.titulo}, Genero: ${this.genero}, Duracion: ${this.duracion}, clase: ${this.clase}`;
        let clasificacion = this.clase

        if (clasificacion == "A") {
            salida += ', nota: apta para todo publico';
        } else if (clasificacion == "B") {
            salida += ', nota: apta para mayores de 16 años de edad'
        }
    
        return salida;
    }

}


class Series extends Peliculas {

    #temporada
    #episodio

    constructor(id, titulo, genero, duracion, clase, temporada, episodio) {
        super(id, titulo, genero, duracion, clase);
        this.#temporada = temporada
        this.#episodio = episodio
    }

    consultar() {
        let info2 = super.consultar();
        let informacion = `Temporada ${this.#temporada}, Episodios ${this.#episodio.toString()}`;
        console.log(informacion)
        console.log(info2)
    }
}
///////// ejecuciones

const serie1 = new Series(id=1, titulo="exploradores del hielo", genero="suspenso", duracion=1.32, clase="B", temporada='01', episodio=[1,2,3,4,5,6,7,8])


serie1.consultar()



const pelicula1 = new Peliculas(1, "la fuga", "accion", 2.23, "B")
const pelicula2 = new Peliculas(2, "maravillas", "infantil", 1.45, "A")
const pelicula3 = new Peliculas(3, "KNY infinte castle", "anime", 2.30, "A")
const pelicula4 = new Peliculas(4, "tron", "sci-fi", 2.00, "B")

// console.log(pelicula1);
// console.log(pelicula2);
// console.log(pelicula3);
// console.log(pelicula4);

// console.log(pelicula1.titulo)
// console.log(pelicula1['genero'])

// console.log(pelicula1.consultar())
// console.log(pelicula2.consultar())
// console.log(pelicula3.consultar())
// console.log(pelicula4.consultar())

// console.log("Original "); pelicula1.consultar();
// pelicula1.id='4';
// pelicula1.titulo='Escapada';
// pelicula1.genero='Terror';
// console.log("Modificada "); pelicula1.consultar()



