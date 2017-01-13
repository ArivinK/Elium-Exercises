var Universe = {

    Energy : {
        qte : 10000,
        add : function(qte){
            this.qte += qte;
        },
        total : function(){
            return this.qte;
        }
    },
    Matter : {
        amount : 10000,
        destroy : function (amount){
            this.amount -= amount;
            Universe.Energy.add(amount);
        },
        total : function(){
            return this.amount;
        }
    }

};



Universe.Matter.destroy(8000);

console.log ("Matter: " + Universe.Matter.total());
console.log("Energy: " + Universe.Energy.total());