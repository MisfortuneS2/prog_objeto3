//area total e volume

class Cubo{
    constructor(aresta = 3){
        this.aresta = aresta
    }

    // cálculo do volume
    calcularVol(){
        return this.aresta * this.aresta * this.aresta
    }

    // cálculo da área total
    calcularAreaTotal(){
        return 6 * this.aresta * this.aresta
    }
}

module.exports = Cubo