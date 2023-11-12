class Piece{
    
    constructor(x, y, color, type)
    {
        this.x = x;
        this.y = y;
        this.type = type;
        this.color = color;
        this.isSelected = false;
        this.element = document.createElement("div");

    }
    
    getX(){return this.x;}
    getY(){return this.y;}
    getType(){return this.type;}
    getImage(){return this.image;}
    setX(x){this.x = x;}
    setY(y){this.y = y;}
    getElement(){return this.element;}
    IsSelected(){return this.isSelected;}
    setIsSelected(){this.isSelected = true;}
    setIsNotSelected(){this.isSelected = false;}
    getPiecePosition(){return this.y.toString() + "-" + this.x.toString();}
    getColor(){return this.color;}


    markSelectedPiece(selectedPiece)
    {      
        document.getElementById(selectedPiece).style.backgroundColor = "yellow";
    }

    clearLastMove(lastSelection){     
        if(typeof lastSelection !== 'undefined'){
        document.getElementById(lastSelection).style.backgroundColor = "white";

    }}
    clearLastMoves(){ 
       
            
            for(let x=0; x < 8; x++)
            {
                for(let y = 0; y < 8; y++)
                {
                    if( x %2 === y%2)
                    {

                        document.getElementById(y.toString() + "-" + x.toString()).style.backgroundColor = 'white';
                    }
                    else{
                        document.getElementById(y.toString() + "-" + x.toString()).style.backgroundColor = '#A1662F';
                    }
                }
            }
   
    
    }

    clearAllLastMoves()
    {
        for(let y = 0; y < 8; y++)
        {
            for(let x = 0; x < 8; x++)
            {
                if(y %2 === x%2)
                {
  
                    this.clearLastMoves();
                }

            }
        }
    }

    displayPossibleMovements(table)
    {
            if(this.getColor() == "black" &&  this.type === "stone" && table[this.y-1][this.x+1] === 0)
            {
                
                document.getElementById((this.y-1).toString() + "-" +(this.x+1).toString()).style.backgroundColor = "green";             
            }

            if(this.getColor() == "black" && this.type === "stone" && table[this.y-1][this.x-1] === 0)
            {
                document.getElementById((this.y-1).toString() + "-" +(this.x-1).toString()).style.backgroundColor = "green";
            }



            if(this.getColor() == "white" &&  this.type === "stone" && table[this.y+1][this.x+1] === 0)
            {
                
                document.getElementById((this.y+1).toString() + "-" +(this.x+1).toString()).style.backgroundColor = "green";             
            }

            if(this.getColor() == "white" && this.type === "stone" && table[this.y+1][this.x-1] === 0)
            {
                document.getElementById((this.y+1).toString() + "-" +(this.x-1).toString()).style.backgroundColor = "green";
            }
    }

    getPossibleMovements(table)
    {

        let posibleMovements = [];

            if(this.getColor() == "black" && this.type === "stone" && table[this.y-1][this.x+1] === 0)
            {
                
                posibleMovements.push((this.y-1).toString() + "-" +(this.x+1).toString());            
            }

            if(this.getColor() == "black" && this.type === "stone" && table[this.y-1][this.x-1] === 0)
            {
                posibleMovements.push((this.y-1).toString() + "-" +(this.x-1).toString())
            }

            if(this.getColor() == "white" && this.type === "stone" && table[this.y+1][this.x+1] === 0)
            {
                
               posibleMovements.push((this.y+1).toString() + "-" +(this.x+1).toString())             
            }

            if(this.getColor() == "white" && this.type === "stone" && table[this.y+1][this.x-1] === 0)
            {
                posibleMovements.push((this.y+1).toString() + "-" +(this.x-1).toString())
            }

            return posibleMovements;
    }

    takePiece(yPosition, xPosition,posibleMovement, pieces)
    {
        let id = yPosition.toString() + "-" + xPosition.toString();
        let targetElement = document.getElementById(id);

        if (targetElement) 
        {
                if (Number(posibleMovement[0]) === yPosition && Number(posibleMovement[2]) === xPosition && this.getColor() === "black") 
                {
                    let pieceToDeletePosition = 0;
                        
                        pieces.forEach(function(pieceToTake){
                            
                        if(pieceToTake.getX() === xPosition && pieceToTake.getY() === yPosition)
                        {
                            
                            pieceToTake.getElement().removeChild(pieceToTake.getImage());
                            pieceToTake.getElement().remove();
                            
                            pieces.splice(pieceToDeletePosition, 1);
                            
                            
                        }
                        pieceToDeletePosition++;
                    }) 

                    
                    
                
                } 
                if (Number(posibleMovement[0]) === yPosition && Number(posibleMovement[2]) === xPosition && this.getColor() === "white") 
                {
                    let pieceToDeletePosition = 0;
                        
                        pieces.forEach(function(pieceToTake){
                            
                        if(pieceToTake.getX() === xPosition && pieceToTake.getY() === yPosition)
                        {
                            
                            pieceToTake.getElement().removeChild(pieceToTake.getImage());
                            pieceToTake.getElement().remove();
                            
                            pieces.splice(pieceToDeletePosition, 1);
                            
                            
                        }
                        pieceToDeletePosition++;
                    }) 

                    
                    
                
                } 
        
        }

      
    }
    
    move(yPosition, xPosition, posibleMovement, move) 
    {
        let id = yPosition.toString() + "-" + xPosition.toString();
        let targetElement = document.getElementById(id);
        
        
        if (targetElement) 
        {
            if (Number(posibleMovement[0]) === yPosition && Number(posibleMovement[2]) === xPosition && this.getColor() === "black") 
        {
            table[yPosition][xPosition] = 1;
            table[this.getY()][this.getX()] = 0;      
            if(yPosition < this.getY() && xPosition < this.getX())move.Direction = "left";
            if(yPosition < this.getY() && xPosition > this.getX())move.Direction = "right";
            this.setY(yPosition);
            this.setX(xPosition);
            this.getElement().removeChild(this.getImage());
            this.getElement().remove();
            this.getImage().id = yPosition.toString() + "-" + xPosition.toString(); 
            
            this.getElement().appendChild(this.getImage());
            this.getElement().id = id;
            document.getElementById(id).append(this.getElement());

            
            
        
        } 
        if (Number(posibleMovement[0]) === yPosition && Number(posibleMovement[2]) === xPosition && this.getColor() === "white") 
        {
            table[yPosition][xPosition] = -1;           
            table[this.getY()][this.getX()] = 0;
            if(yPosition > this.getY() && xPosition < this.getX())move.Direction = "left";
            if(yPosition > this.getY() && xPosition > this.getX())move.Direction = "right";
            this.setY(yPosition);
            this.setX(xPosition);
            this.getElement().removeChild(this.getImage());
            this.getElement().remove();
            this.getImage().id = yPosition.toString() + "-" + xPosition.toString(); 
            
            this.getElement().appendChild(this.getImage());
            this.getElement().id = id;
            document.getElementById(id).append(this.getElement());
            
        }
        
    }
    
}

}