//area total e volume

class Cilindro{
    constructor(raio = 2, altura = 3){
        this.raio = raio
        this.altura = altura
    }
    
    // cálculo da área da base
    calcularAB(){
        return Math.PI * this.raio * this.raio
    }

    //cálculo da área lateral
    calcularAL(){
        return 2 * Math.PI * this.raio * this.altura
    }

    //cálculo do volume
    calcularVol(){
        return Math.PI * (this.raio * this.raio) * this.altura
    }

    //cálculo da área total
    calcularATotal(){
        return (this.calcularAB * 2) + this.calcularAL
    }
}

module.exports = Cilindro