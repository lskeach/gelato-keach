class Gelato{
    constructor(flavor, grams, sugar){
        this.flavor = flavor;
        this.grams = grams + 'g';
        this.sugar = sugar + '%';
    }

    yummy(){
        if (this.sugar === '0'){
            console.log('${this.flavor} is not yummy!');
        } else {
            console.log('${this.flavor} is yummy!');
        }
    }
}

class Nutella extends Gelato {
    constructor(flavor, grams, sugar, hasEspresso) {
        super(flavor, grams, sugar);
        this.hasEspresso = hasEspresso;
       
    }
}


const gelato1= new Gelato('Dark Chocolate', '10', '70');
const gelato2 = new Gelato('Malaga', '15', '60');
const gelato3 = new Gelato('Dirt', '0', '0');
const gelato4 = new Gelato('Nutella', '20', '40', '2 shots');

gelato1.yummy();
gelato2.yummy();
gelato3.yummy();
