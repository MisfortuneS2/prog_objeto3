//area da base e volume

class Cone{
    constructor(raio = 2, altura = 3){
        this.raio = raio
        this.altura = altura
    }

    // cálculo da área da base
    calcularVol(){
        return (Math.PI * (this.raio * this.raio) * this.altura) / 3
    }

    //cálculo do volume
}