class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque
        switch (this.tipo) {
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break;
            case "ninja":
                ataque = "shuriken"
                break
            default:
                ataque = "usou um ataque indefinido"
        }

        const mensagem = `o ${this.tipo} ${this.nome} atacou usando ${ataque}`
        console.log(mensagem)
    }
}


const heroiMago = new Heroi("Radagash", 1200, "mago")
heroiMago.atacar()

const heroiGuerreiro = new Heroi("Boromir", 35, "guerreiro")
heroiGuerreiro.atacar()
