// Multiverse exercise:
//      A global object called Multiverse that creates and stores universes
//      Universes contain matter and energy
//      there is a 0-sum relationship between matter an energy
//      '.change()' can be called directly by universe.'type'.change().
//          or by extracting 'type' and calling 'type'.change()




// Multiverse object:
//      allOfThem:  an array of universe objects
//      genesis:   a function that creates a universe and adds it to allOfThem
function Multiverse(){
    this.allOfThem = [];
};


// the creating multiverse handles naming the universes
//   they can be refrenced, but don't know their own name
Multiverse.prototype.genesis = function(amountMats, amountEns) {
    var mats = new Matter(amountMats);
    var ens = new Energy(amountEns);


    // some magic happens here:  this is the only really tricky bit in this code
    var uni = new Universe(mats, ens);
    Object.setPrototypeOf(mats, uni);
    Object.setPrototypeOf(ens, uni);


    this.allOfThem.push(uni);
};


// contains a matter and energy object
function Universe(mats, ens) {
    this.matter = mats;
    this.energy = ens;
};
// The tricky bit in 22 exists so that this function can be so flexible.
Universe.prototype.change = function(delta) {
    this.amount = this.amount + delta;

    if (!arguments[1]) {
        delta = -delta;
        if (this.whatAmI == 'energy') {
            this.__proto__.matter.change(delta, true);
        }
        else {
            this.__proto__.energy.change(delta, true);
        };
    };
};


// these contain only a type and an amount
//  BUT!! they also inherit from their universe's '.prototype'
function Matter(amount) {
    this.whatAmI = 'matter';
    this.amount = amount;
};
function Energy(amount) {
    this.whatAmI = 'energy';
    this.amount = amount;
};


// use this guy to do things
var multi = new Multiverse();

for (var i=0; i < 11; i++) {
    multi.genesis(10,10);
}
// multi.allOfThem[0].matter.change(5);
// multi.allOfThem[1].matter.change(10);
multi.allOfThem[9].matter.change(10);
console.log(multi.allOfThem);

