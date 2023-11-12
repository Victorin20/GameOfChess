class ChessPawn extends Piece{
    
    constructor(x, y, color, type)
    {
        super(x, y, color, type);
        this.image = document.createElement("img");
        this.image.id = (this.y).toString() + "-" + (this.x).toString();
        if(this.color === 'black')
        {
            this.image.src = "./images/blackChessPawn.png";
            this.opponent = -1;

        }

        if(this.color === 'white')
        {
            this.image.src = "./images/whiteChessPawn.png";
            this.opponent = 1;
        }
        
    }


    displayPossibleMovements(table)
    {
        if(this.color === 'white')
        {   
            
            if(this.y === 6)
            {
                let redValue = 0;
                let greenValue = 255;
                let blueValue = 0;

                // Create an RGB color string
                let rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
                if(this.y -2 >= 0 && table[this.y-2][this.x] === 0 && table[this.y-1][this.x] === 0)
                {

                    document.getElementById((this.y-1).toString() + "-" +(this.x).toString()).style.backgroundColor = rgbColor;
                    greenValue-=20;
                    rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
                    document.getElementById((this.y-2).toString() + "-" +(this.x).toString()).style.backgroundColor = rgbColor;
                }
                


                if(this.y-1 >= 0 && this.x+1 < 8 && table[this.y-1][this.x+1] === this.opponent)
                {
                    document.getElementById((this.y-1).toString() + "-" +(this.x+1).toString()).style.backgroundColor = 'red';
                }

                if(this.y-1 >= 0 && this.x-1 >=0 && table[this.y-1][this.x-1] === this.opponent)
                {
                    document.getElementById((this.y-1).toString() + "-" +(this.x-1).toString()).style.backgroundColor = 'red';
                }
        
        
            }

            else{

                if(this.y-1 >= 0 && this.x+1 < 8 && table[this.y-1][this.x+1] === this.opponent)
                {
                    document.getElementById((this.y-1).toString() + "-" +(this.x+1).toString()).style.backgroundColor = 'red';
                }

                if(this.y-1 >= 0 && this.x-1 >=0 && table[this.y-1][this.x-1] === this.opponent)
                {
                    document.getElementById((this.y-1).toString() + "-" +(this.x-1).toString()).style.backgroundColor = 'red';
                }
                if(table[this.y-1][this.x] === 0)
                {

                    document.getElementById((this.y-1).toString() + "-" +(this.x).toString()).style.backgroundColor = 'green'
                }
            }

            
            
            
        }
        if(this.color === 'black')
        {

            if(this.y === 1)
            {
                let redValue = 0;
                let greenValue = 255;
                let blueValue = 0;
                
                // Create an RGB color string
                if(this.y+2 < 8 && table[this.y+2][this.x] === 0 && table[this.y+1][this.x] === 0)
                {

                    let rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
                    document.getElementById((this.y+1).toString() + "-" +(this.x).toString()).style.backgroundColor = rgbColor;
                    greenValue-=20;
                    rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
                    document.getElementById((this.y+2).toString() + "-" +(this.x).toString()).style.backgroundColor = rgbColor;
                }

                if(this.y+1 >= 0 && this.x+1 < 8 && table[this.y+1][this.x+1] === this.opponent)
                {
                    document.getElementById((this.y+1).toString() + "-" +(this.x+1).toString()).style.backgroundColor = 'red';
                }

                if(this.y+1 >= 0 && this.x-1 >=0 && table[this.y+1][this.x-1] === this.opponent)
                {
                    document.getElementById((this.y+1).toString() + "-" +(this.x-1).toString()).style.backgroundColor = 'red';
                }
                
                
            }
            else {
                if(this.y+1 < 8 && this.x+1 < 8 && table[this.y+1][this.x+1] === this.opponent)
                {
                    document.getElementById((this.y+1).toString() + "-" +(this.x+1).toString()).style.backgroundColor = 'red';
                }
                
                if(this.y+1 < 8 && this.x-1 >=0 && table[this.y+1][this.x-1] === this.opponent)
                {
                    document.getElementById((this.y+1).toString() + "-" +(this.x-1).toString()).style.backgroundColor = 'red';
                }
                if(this.y+1 < 8 && table[this.y+1][this.x] === 0)
                {
                document.getElementById((this.y+1).toString() + "-" +(this.x).toString()).style.backgroundColor = 'green';
                }
            }
        }
        
    }

    getPossibleMovements(table)
    {

        let possibleMovements = [];

        
            if(this.color === 'white')
            {   
                
                if(this.y === 6)
                {
                    
                    if(this.y -2 >= 0 && table[this.y-2][this.x] === 0 && table[this.y-1][this.x] === 0)
                    {
                        possibleMovements.push((this.y-1).toString() + "-" +(this.x).toString());
                        possibleMovements.push((this.y-2).toString() + "-" +(this.x).toString());
                        
                    }
                    if(this.y-1 >= 0 && this.x+1 < 8 && table[this.y-1][this.x+1] === this.opponent)
                    {
                        possibleMovements.push((this.y-1).toString() + "-" +(this.x+1).toString());
                    }
    
                    if(this.y-1 >= 0 && this.x-1 >=0 && table[this.y-1][this.x-1] === this.opponent)
                    {
                        possibleMovements.push((this.y-1).toString() + "-" +(this.x-1).toString());
                    }
            
            
                }
    
                else{
    
                    if(this.y-1 >= 0 && this.x+1 < 8 && table[this.y-1][this.x+1] === this.opponent)
                    {
                        possibleMovements.push((this.y-1).toString() + "-" +(this.x+1).toString());
                    }
    
                    if(this.y-1 >= 0 && this.x-1 >=0 && table[this.y-1][this.x-1] === this.opponent)
                    {
                        possibleMovements.push((this.y-1).toString() + "-" +(this.x-1).toString());
                    }
                    if(table[this.y-1][this.x] === 0)
                    {
                        possibleMovements.push((this.y-1).toString() + "-" +(this.x).toString());
                    }
                }
    
                
                
                
            }
            if(this.color === 'black')
            {
    
                if(this.y === 1)
                {
                    if(this.y+2 < 8 && table[this.y+2][this.x] === 0 && table[this.y+1][this.x] === 0)
                    {
                    possibleMovements.push((this.y+1).toString() + "-" +(this.x).toString());
                    possibleMovements.push((this.y+2).toString() + "-" +(this.x).toString());
                    }
                    if(this.y+1 >= 0 && this.x+1 < 8 && table[this.y+1][this.x+1] === this.opponent)
                    {
                        possibleMovements.push((this.y+1).toString() + "-" +(this.x+1).toString());
                    }
    
                    if(this.y+1 >= 0 && this.x-1 >=0 && table[this.y+1][this.x-1] === this.opponent)
                    {
                        possibleMovements.push((this.y+1).toString() + "-" +(this.x-1).toString());
                    }
                    
                    
                }
                else {
                    if(table[this.y+1][this.x] === 0)
                    {
                    possibleMovements.push((this.y+1).toString() + "-" +(this.x).toString());
                    }
                    if(this.y+1 < 8 && this.x+1 < 8 && table[this.y+1][this.x+1] === this.opponent)
                    {
                        possibleMovements.push((this.y+1).toString() + "-" +(this.x+1).toString());
                    }
    
                    if(this.y+1 < 8 && this.x-1 >=0 && table[this.y+1][this.x-1] === this.opponent)
                    {
                        possibleMovements.push((this.y+1).toString() + "-" +(this.x-1).toString());
                    }
                }
            }
            
        


        return possibleMovements;
    }




}