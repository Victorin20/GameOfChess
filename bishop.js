class Bishop extends Piece{
    
    constructor(x, y, color, type)
    {
        super(x, y, color, type);
        this.image = document.createElement("img");
        this.image.id = (this.y).toString() + "-" + (this.x).toString();
        if(this.color === 'black')
        {
            this.opponent = -1;
            this.image.src = "./images/BlackBishop.png";
        }
        if(this.color === 'white')
        {
            this.opponent = 1;
            this.image.src = "./images/whiteBishop.png";
        }
    }


    displayPossibleMovements(table)
    {
        let redValue = 0;
        let greenValue = 255;
        let blueValue = 0;
        let factor = 25;
                
    
        let rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        for(let y = this.y+1, x = 1; y < 8; y++, x++)
        {     
            if(table[y][this.x+x] === -1 && this.getColor() === 'white')break;
            if(table[y][this.x+x] === 1 && this.getColor() === 'black')break;
            if(table[y][this.x+x] === 0)
            {
                document.getElementById((y).toString() + "-" +(this.x+x).toString()).style.backgroundColor = rgbColor;
                greenValue-=factor;
                rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
            }
            
            
            if(table[y][this.x+x] === this.opponent)
            {
                document.getElementById((y).toString() + "-" +(this.x+x).toString()).style.backgroundColor = "red";
                break;
                
            }

        }

        redValue = 0;
        greenValue = 255;
        blueValue = 0;
                
    
        rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        /////////////////////////------------------------->
        for(let y = this.y-1, x = 1; y >= 0; y--, x++)
        {     
            if(table[y][this.x-x] === -1 && this.getColor() === 'white')break;
            if(table[y][this.x-x] === 1 && this.getColor() === 'black')break;
            if(table[y][this.x-x] === 0)
            {
                document.getElementById((y).toString() + "-" +(this.x-x).toString()).style.backgroundColor = rgbColor;
                greenValue-=factor;
                rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
            }
            
            
            if(table[y][this.x-x] === this.opponent)
            {
                document.getElementById((y).toString() + "-" +(this.x-x).toString()).style.backgroundColor = "red";
                break;
                
            }

        }

        redValue = 0;
        greenValue = 255;
        blueValue = 0;
                
    
        rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        /////////////////////////------------------------->
        for(let y = this.y-1, x = 1; y >= 0; y--, x++)
        {     
            
            if(table[y][this.x+x] === -1 && this.getColor() === 'white')break;
            if(table[y][this.x+x] === 1 && this.getColor() === 'black')break;
            if(table[y][this.x+x] === 0)
            {
                
                document.getElementById((y).toString() + "-" +(this.x+x).toString()).style.backgroundColor = rgbColor;
                greenValue-=factor;
                rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
            }
            
            
            if(table[y][this.x+x] === this.opponent)
            {
                document.getElementById((y).toString() + "-" +(this.x+x).toString()).style.backgroundColor = "red";
                break;
                
            }

        }

        redValue = 0;
        greenValue = 255;
        blueValue = 0;
                
    
        rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        /////////////////////////------------------------->
        for(let y = this.y+1, x = 1; y < 8; y++, x++)
        {     
            
            if(table[y][this.x-x] === -1 && this.getColor() === 'white')break;
            if(table[y][this.x-x] === 1 && this.getColor() === 'black')break;
            if(table[y][this.x-x] === 0)
            {
                
                document.getElementById((y).toString() + "-" +(this.x-x).toString()).style.backgroundColor = rgbColor;
                greenValue-=factor;
                rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
            }
            
            
            if(table[y][this.x-x] === this.opponent)
            {
                document.getElementById((y).toString() + "-" +(this.x-x).toString()).style.backgroundColor = "red";
                break;
                
            }

        }
        
    }

    getPossibleMovements(table)
    {
        let possibleMovements = [];
        for(let y = this.y+1, x = 1; y < 8; y++, x++)
        {     
            if(table[y][this.x+x] === -1 && this.getColor() === 'white')break;
            if(table[y][this.x+x] === 1 && this.getColor() === 'black')break;
            if(table[y][this.x+x] === 0)
            {
                possibleMovements.push((y).toString() + "-" +(this.x+x).toString());
              
            }
            
            
            if(table[y][this.x+x] === this.opponent)
            {
                possibleMovements.push((y).toString() + "-" +(this.x+x).toString());
                break;
                
            }

        }
        /////////////////////////------------------------->
        for(let y = this.y-1, x = 1; y >= 0; y--, x++)
        {     
            if(table[y][this.x-x] === -1 && this.getColor() === 'white')break;
            if(table[y][this.x-x] === 1 && this.getColor() === 'black')break;
            if(table[y][this.x-x] === 0)
            {
                possibleMovements.push((y).toString() + "-" +(this.x-x).toString());
                
            }
            
            
            if(table[y][this.x-x] === this.opponent)
            {
                possibleMovements.push((y).toString() + "-" +(this.x-x).toString());
                break;
                
            }

        }
        /////////////////////////// ||||
        for(let y = this.y-1, x = 1; y >= 0; y--, x++)
        {     
            
            if(table[y][this.x+x] === -1 && this.getColor() === 'white')break;
            if(table[y][this.x+x] === 1 && this.getColor() === 'black')break;
            if(table[y][this.x+x] === 0)
            {
                
               possibleMovements.push((y).toString() + "-" +(this.x+x).toString());
            
            }
            
            
            if(table[y][this.x+x] === this.opponent)
            {
               possibleMovements.push((y).toString() + "-" +(this.x+x).toString());
                break;
                
            }

        }

        ///////////////////////// <-------------------------///////////////
        for(let y = this.y+1, x = 1; y < 8; y++, x++)
        {     
            
            if(table[y][this.x-x] === -1 && this.getColor() === 'white')break;
            if(table[y][this.x-x] === 1 && this.getColor() === 'black')break;
            if(table[y][this.x-x] === 0)
            {
                
                possibleMovements.push((y).toString() + "-" +(this.x-x).toString());
      
            }
            
            
            if(table[y][this.x-x] === this.opponent)
            {
                possibleMovements.push((y).toString() + "-" +(this.x-x).toString());
                break;
                
            }

        }

        return possibleMovements;
    }


}