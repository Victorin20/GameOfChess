class King extends Piece{
    
    constructor(x, y, color, type)
    {
        super(x, y, color, type);
        this.image = document.createElement("img");
        this.image.id = (this.y).toString() + "-" + (this.x).toString();
        if(this.color === 'black'){
            this.opponent = -1;

            this.image.src = "./images/BlackKing.png";
        }
        if(this.color === 'white')
        {
            this.opponent = 1;
            this.image.src = "./images/WhiteKing.png";
        }
    }


    displayPossibleMovements(table)
    {
        if(this.y -1 >= 0 && table[this.y-1][this.x] === 0)
        {
            document.getElementById((this.y-1).toString()+"-"+(this.x).toString()).style.backgroundColor = "green";

        }

        if(this.y -1 >= 0 && table[this.y-1][this.x] === this.opponent)
        {
            document.getElementById((this.y-1).toString()+"-"+(this.x).toString()).style.backgroundColor = "red";

        }

        if(this.y +1 <8 && table[this.y+1][this.x] === 0)
        {
            document.getElementById((this.y+1).toString()+"-"+(this.x).toString()).style.backgroundColor = "green";

        }

        if(this.y +1 <8 && table[this.y+1][this.x] === this.opponent)
        {
            document.getElementById((this.y+1).toString()+"-"+(this.x).toString()).style.backgroundColor = "red";

        }

        if(this.y +1 <8 && this.x+1 < 8 &&  table[this.y+1][this.x+1] === 0)
        {
            document.getElementById((this.y+1).toString()+"-"+(this.x+1).toString()).style.backgroundColor = "green";

        }

        if(this.y +1 <8 && this.x+1 < 8 && table[this.y+1][this.x+1] === this.opponent)
        {
            document.getElementById((this.y+1).toString()+"-"+(this.x+1).toString()).style.backgroundColor = "red";

        }

        
        if(this.y -1 >= 0 && this.x+1 < 8 &&  table[this.y-1][this.x+1] === 0)
        {
            document.getElementById((this.y-1).toString()+"-"+(this.x+1).toString()).style.backgroundColor = "green";

        }

        if(this.y -1 >= 0 && this.x+1 < 8 && table[this.y-1][this.x+1] === this.opponent)
        {
            document.getElementById((this.y-1).toString()+"-"+(this.x+1).toString()).style.backgroundColor = "red";

        }

        if(this.x+1 < 8 &&  table[this.y][this.x+1] === 0)
        {
            document.getElementById((this.y).toString()+"-"+(this.x+1).toString()).style.backgroundColor = "green";

        }

        if(this.x+1 < 8 && table[this.y][this.x+1] === this.opponent)
        {
            document.getElementById((this.y).toString()+"-"+(this.x+1).toString()).style.backgroundColor = "red";

        }

        if(this.x-1 >= 0 &&  table[this.y][this.x-1] === 0)
        {
            document.getElementById((this.y).toString()+"-"+(this.x-1).toString()).style.backgroundColor = "green";

        }

        if(this.x-1 >= 0 && table[this.y][this.x-1] === this.opponent)
        {
            document.getElementById((this.y).toString()+"-"+(this.x-1).toString()).style.backgroundColor = "red";

        }

        if(this.x-1 >= 0 && this.y+1 < 8 &&  table[this.y+1][this.x-1] === 0)
        {
            document.getElementById((this.y+1).toString()+"-"+(this.x-1).toString()).style.backgroundColor = "green";

        }

        if(this.x-1 >= 0 && this.y+1 < 8 && table[this.y+1][this.x-1] === this.opponent)
        {
            document.getElementById((this.y+1).toString()+"-"+(this.x-1).toString()).style.backgroundColor = "red";

        }

        if(this.x-1 >= 0 && this.y-1 >= 0 &&  table[this.y-1][this.x-1] === 0)
        {
            document.getElementById((this.y-1).toString()+"-"+(this.x-1).toString()).style.backgroundColor = "green";

        }

        if(this.x-1 >= 0 && this.y-1 >= 0 && table[this.y-1][this.x-1] === this.opponent)
        {
            document.getElementById((this.y-1).toString()+"-"+(this.x-1).toString()).style.backgroundColor = "red";

        }


        
    }

    getPossibleMovements(table)
    {

        let possibleMovements = [];

        if(this.y -1 >= 0 && table[this.y-1][this.x] === 0)
        {
            possibleMovements.push((this.y-1).toString()+"-"+(this.x).toString());

        }

        if(this.y -1 >= 0 && table[this.y-1][this.x] === this.opponent)
        {
            possibleMovements.push((this.y-1).toString()+"-"+(this.x).toString());

        }

        if(this.y +1 <8 && table[this.y+1][this.x] === 0)
        {
            possibleMovements.push((this.y+1).toString()+"-"+(this.x).toString());

        }

        if(this.y +1 <8 && table[this.y+1][this.x] === this.opponent)
        {
            possibleMovements.push((this.y+1).toString()+"-"+(this.x).toString());

        }

        if(this.y +1 <8 && this.x+1 < 8 &&  table[this.y+1][this.x+1] === 0)
        {
            possibleMovements.push((this.y+1).toString()+"-"+(this.x+1).toString());

        }

        if(this.y +1 <8 && this.x+1 < 8 && table[this.y+1][this.x+1] === this.opponent)
        {
            possibleMovements.push((this.y+1).toString()+"-"+(this.x+1).toString());

        }

        
        if(this.y -1 >= 0 && this.x+1 < 8 &&  table[this.y-1][this.x+1] === 0)
        {
            possibleMovements.push((this.y-1).toString()+"-"+(this.x+1).toString());

        }

        if(this.y -1 >= 0 && this.x+1 < 8 && table[this.y-1][this.x+1] === this.opponent)
        {
            possibleMovements.push((this.y-1).toString()+"-"+(this.x+1).toString());

        }

        if(this.x+1 < 8 &&  table[this.y][this.x+1] === 0)
        {
            possibleMovements.push((this.y).toString()+"-"+(this.x+1).toString());

        }

        if(this.x+1 < 8 && table[this.y][this.x+1] === this.opponent)
        {
            possibleMovements.push((this.y).toString()+"-"+(this.x+1).toString());

        }

        if(this.x-1 >= 0 &&  table[this.y][this.x-1] === 0)
        {
            possibleMovements.push((this.y).toString()+"-"+(this.x-1).toString());

        }

        if(this.x-1 >= 0 && table[this.y][this.x-1] === this.opponent)
        {
            possibleMovements.push((this.y).toString()+"-"+(this.x-1).toString());

        }

        if(this.x-1 >= 0 && this.y+1 < 8 &&  table[this.y+1][this.x-1] === 0)
        {
            possibleMovements.push((this.y+1).toString()+"-"+(this.x-1).toString());

        }

        if(this.x-1 >= 0 && this.y+1 < 8 && table[this.y+1][this.x-1] === this.opponent)
        {
            possibleMovements.push((this.y+1).toString()+"-"+(this.x-1).toString());

        }

        if(this.x-1 >= 0 && this.y-1 >= 0 &&  table[this.y-1][this.x-1] === 0)
        {
            possibleMovements.push((this.y-1).toString()+"-"+(this.x-1).toString());

        }

        if(this.x-1 >= 0 && this.y-1 >= 0 && table[this.y-1][this.x-1] === this.opponent)
        {
            possibleMovements.push((this.y-1).toString()+"-"+(this.x-1).toString());

        }

        return possibleMovements;
    }

}