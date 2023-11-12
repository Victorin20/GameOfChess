class King extends Piece{
    
    constructor(x, y, color, type)
    {
        super(x, y, color, type);
        this.image = document.createElement("img");
        this.image.id = (this.y).toString() + "-" + (this.x).toString();
        if(this.color === 'black'){

            this.image.src = "./images/BlackKing.png";
        }
        if(this.color === 'white')
        {
            this.image.src = "./images/WhiteKing.png";
        }
    }


    displayPossibleMovements(table)
    {
        for(let y = 0; y < 8; y++)
        {

            if(this.y !== y)
            document.getElementById((y).toString() + "-" +(this.x).toString()).style.backgroundColor = "green";

        }

        for(let x = 0; x < 8; x++)
        {

            if(this.x !== x)
            document.getElementById((this.y).toString() + "-" +(x).toString()).style.backgroundColor = "green";

        }
        
    }

}