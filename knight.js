class Knight extends Piece{
    
    
    constructor(x, y, color, type)
    {
        super(x, y, color, type);
        this.image = document.createElement("img");
        this.image.id = (this.y).toString() + "-" + (this.x).toString();
        if(this.color === 'black')
        {
            this.opponent = -1;
            this.image.src = "./images/BlackKnight.png";

        }

        if(this.color === 'white')
        {
            this.opponent = 1;
            this.image.src = "./images/whiteKnight.png";

        }
    }


    displayPossibleMovements(table)
    {
       if(this.y+2 < 8 && this.x +1 < 8 && table[this.y+2][this.x+1] === 0)
       {
        document.getElementById((this.y+2).toString() + "-" + (this.x+1)).style.backgroundColor = "green";
       }

       else if(this.y+2 < 8 && this.x+1 < 8 && table[this.y+2][this.x+1] === this.opponent)
       {
        document.getElementById((this.y+2).toString() + "-" + (this.x+1)).style.backgroundColor = "red";
       }

       if(this.y+2 < 8 && this.x -1 >= 0 && table[this.y+2][this.x-1] === 0)
       {
        document.getElementById((this.y+2).toString() + "-" + (this.x-1)).style.backgroundColor = "green";
       }

       else if(this.y+2 < 8 && this.x-1 >= 0 && table[this.y+2][this.x-1] === this.opponent)
       {
        document.getElementById((this.y+2).toString() + "-" + (this.x-1)).style.backgroundColor = "red";
       }



       if(this.y-2 >= 0 && this.x +1 < 8 && table[this.y-2][this.x+1] === 0)
       {
        document.getElementById((this.y-2).toString() + "-" + (this.x+1)).style.backgroundColor = "green";
       }

       else if(this.y-2 >= 0 && this.x+1 < 8 && table[this.y-2][this.x+1] === this.opponent)
       {
        document.getElementById((this.y-2).toString() + "-" + (this.x+1)).style.backgroundColor = "red";
       }

       if(this.y-2 >= 0 && this.x -1 >= 0 && table[this.y-2][this.x-1] === 0)
       {
        document.getElementById((this.y-2).toString() + "-" + (this.x-1)).style.backgroundColor = "green";
       }

       else if(this.y-2 >= 0 && this.x-1 >= 0 && table[this.y-2][this.x-1] === this.opponent)
       {
        document.getElementById((this.y-2).toString() + "-" + (this.x-1)).style.backgroundColor = "red";
       }




       
       if(this.y+1 < 8 && this.x -2 >= 0 && table[this.y+1][this.x-2] === 0)
       {
        document.getElementById((this.y+1).toString() + "-" + (this.x-2)).style.backgroundColor = "green";
       }

       else if(this.y+1 < 8 && this.x -2 >= 0 && table[this.y+1][this.x-2] === this.opponent)
       {
        document.getElementById((this.y+1).toString() + "-" + (this.x-2)).style.backgroundColor = "red";
       }


       if(this.y-1 >= 0 && this.x -2 >= 0 && table[this.y-1][this.x-2] === 0)
       {
        document.getElementById((this.y-1).toString() + "-" + (this.x-2)).style.backgroundColor = "green";
       }

       else if(this.y-1 >= 0 && this.x -2 >= 0 && table[this.y-1][this.x-2] === this.opponent)
       {
        document.getElementById((this.y-1).toString() + "-" + (this.x-2)).style.backgroundColor = "red";
       }



       if(this.y+1 < 8 && this.x +2 < 8 && table[this.y+1][this.x+2] === 0)
       {
        document.getElementById((this.y+1).toString() + "-" + (this.x+2)).style.backgroundColor = "green";
       }

       else if(this.y+1 < 8 && this.x+2 < 8 && table[this.y+1][this.x+2] === this.opponent)
       {
        document.getElementById((this.y+1).toString() + "-" + (this.x+2)).style.backgroundColor = "red";
       }


       if(this.y-1 >= 0 && this.x +2 < 8 && table[this.y-1][this.x+2] === 0)
       {
        document.getElementById((this.y-1).toString() + "-" + (this.x+2)).style.backgroundColor = "green";
       }

       else if(this.y-1 >= 0 && this.x +2 < 8 && table[this.y-1][this.x+2] === this.opponent)
       {
        document.getElementById((this.y-1).toString() + "-" + (this.x+2)).style.backgroundColor = "red";
       }
        
    }

    getPossibleMovements(table)
    {

        let possibleMovements = [];

        if(this.y+2 < 8 && this.x +1 < 8 && table[this.y+2][this.x+1] === 0)
       {
        possibleMovements.push((this.y+2).toString() + "-" + (this.x+1));
       }

       else if(this.y+2 < 8 && this.x+1 < 8 && table[this.y+2][this.x+1] === this.opponent)
       {
        possibleMovements.push((this.y+2).toString() + "-" + (this.x+1));
       }

       if(this.y+2 < 8 && this.x -1 >= 0 && table[this.y+2][this.x-1] === 0)
       {
        possibleMovements.push((this.y+2).toString() + "-" + (this.x-1));
       }

       else if(this.y+2 < 8 && this.x-1 >= 0 && table[this.y+2][this.x-1] === this.opponent)
       {
        possibleMovements.push((this.y+2).toString() + "-" + (this.x-1));
       }



       if(this.y-2 >= 0 && this.x +1 < 8 && table[this.y-2][this.x+1] === 0)
       {
        possibleMovements.push((this.y-2).toString() + "-" + (this.x+1));
       }

       else if(this.y-2 >= 0 && this.x+1 < 8 && table[this.y-2][this.x+1] === this.opponent)
       {
        possibleMovements.push((this.y-2).toString() + "-" + (this.x+1));
       }

       if(this.y-2 >= 0 && this.x -1 >= 0 && table[this.y-2][this.x-1] === 0)
       {
        possibleMovements.push((this.y-2).toString() + "-" + (this.x-1));
       }

       else if(this.y-2 >= 0 && this.x-1 >= 0 && table[this.y-2][this.x-1] === this.opponent)
       {
        possibleMovements.push((this.y-2).toString() + "-" + (this.x-1));
       }




       
       if(this.y+1 < 8 && this.x -2 >= 0 && table[this.y+1][this.x-2] === 0)
       {
        possibleMovements.push((this.y+1).toString() + "-" + (this.x-2));
       }

       else if(this.y+1 < 8 && this.x -2 >= 0 && table[this.y+1][this.x-2] === this.opponent)
       {
        possibleMovements.push((this.y+1).toString() + "-" + (this.x-2));
       }


       if(this.y-1 >= 0 && this.x -2 >= 0 && table[this.y-1][this.x-2] === 0)
       {
        possibleMovements.push((this.y-1).toString() + "-" + (this.x-2));
       }

       else if(this.y-1 >= 0 && this.x -2 >= 0 && table[this.y-1][this.x-2] === this.opponent)
       {
        possibleMovements.push((this.y-1).toString() + "-" + (this.x-2));
       }



       if(this.y+1 < 8 && this.x +2 < 8 && table[this.y+1][this.x+2] === 0)
       {
        possibleMovements.push((this.y+1).toString() + "-" + (this.x+2));
       }

       else if(this.y+1 < 8 && this.x+2 < 8 && table[this.y+1][this.x+2] === this.opponent)
       {
        possibleMovements.push((this.y+1).toString() + "-" + (this.x+2));
       }


       if(this.y-1 >= 0 && this.x +2 < 8 && table[this.y-1][this.x+2] === 0)
       {
        possibleMovements.push((this.y-1).toString() + "-" + (this.x+2));
       }

       else if(this.y-1 >= 0 && this.x +2 < 8 && table[this.y-1][this.x+2] === this.opponent)
       {
        possibleMovements.push((this.y-1).toString() + "-" + (this.x+2));
       }

       return possibleMovements;

    }

}