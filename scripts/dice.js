class dice  {

    constructor(dices, sides = 6, time = 1) {
        this.time = time;
        this.dices = dices;

        if (Number.isNaN(sides))   {sides = 6}
        this.sides = sides;
    }

    getdata(sides = 6) {
        let data = [];
        data.push(this.dices);
        for(let i = 1; i <= this.time; i++)    {
            this.dices = this.throw(this.dices, sides); 
            data.push(this.dices);
        }
        return data;
    }

    generator(sides)    {return Math.floor(Math.random() * sides) + 1};

    throw(amount, sides)    {
        let removed = 0;    
        for(let i = 0; i < amount; i++)  {
            let random = this.generator(sides);
            if (random == 1)   {
                removed += 1;
            }
        }
        return (amount - removed);
    } 

    count()   {
        var data = Array(this.sides).fill(0);
        for (let i = 0; i < this.dices; i++)    {
            let ans = this.generator(this.sides);
            data[ans - 1] += 1;
        }

        return data;
    }

}
