class dice  {

    constructor(time, dices, sides) {
        this.time = time;
        this.dices = dices;
        this.sides = sides;
    }

    getdata() {
        let data = [];
        data.push(this.dices);
        for(let i = 1; i <= this.time; i++)    {
            this.dices = this.throw(this.dices, this.sides); 
            data.push(this.dices);
        }
        return data;
    }

    throw(amount, sides)    {
        let removed = 0;
        for(let i = 0; i < amount; i++)  {
            let random = Math.ceil(Math.random() * sides);
            if (random == 1)   {
                removed += 1;
            }
        }
        return (amount - removed);
    } 
}
