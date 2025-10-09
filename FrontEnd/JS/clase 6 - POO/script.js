//creando clases

class Pokemon {
    constructor(nombre, tipo, salud, ataque) {
        this.nombre = nombre
        this.tipo = tipo
        this.salud = salud
        this.ataque = ataque
        this.level = 1
    }

    mostrarInfo() {
    console.log("----info del pokemon----");
    console.log(`ataque = ${this.ataque}`);
    console.log(`salud = ${this.salud}`)
    }

    atacar(objetivo) {
        console.log(`${this.nombre} ataca a ${objetivo.nombre}`);
        const damage = this.ataque;
        objetivo.recibirDaño(damage);
    }

    recibirDaño(damage) {
        this.salud -= damage
        
        if (this.salud < 0) {
            this.salud = 0
            console.log(`${this.nombre} ha sido debilitado!`)
        } else {
            console.log(`${this.nombre} recibio daño! salud restante: ${this.salud}`)
        }
    }
};

// ----------------------------------------------------
// Creación de objetos (instancias) Pokémon
// ----------------------------------------------------

const pikachu = new Pokemon("Pikachu", "Eléctrico", 80, 45);
const charmander = new Pokemon("Charmander", "Fuego", 90, 50);

console.log('--- Creación de Pokémones ---');
pikachu.mostrarInfo();
charmander.mostrarInfo();

// ----------------------------------------------------
// Uso de los métodos para la interacción
// ----------------------------------------------------

console.log('\n--- Simulación de Combate ---');
pikachu.atacar(charmander);
charmander.atacar(pikachu);

