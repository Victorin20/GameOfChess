let lastSelection;
let pieces = [];


let onceMove = false;

let table = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0 ],
    [-1, -1, -1, -1, -1, -1, -1,-1 ],
    [-1, -1, -1, -1, -1, -1, -1, -1 ],

];

window.onload = function(){
    setGame();
}

document.addEventListener("click", (event) => {
    var selectedElement = event.target; // Get the clicked element
    
    let posibleMovements = [];
    let yPosition = selectedElement.id[0];
    let xPosition = selectedElement.id[2];
    yPosition = parseInt(yPosition);
    xPosition = parseInt(xPosition);
    let once = false;

    
    pieces.forEach(function(piece)
    {      
        
        posibleMovements = piece.getPossibleMovements(table);
        
        if(piece.IsSelected()){
            
            posibleMovements.forEach(function(posibleMovement)
            {
                piece.takePiece(yPosition,xPosition, posibleMovement, pieces); 
                
                piece.move(yPosition, xPosition,posibleMovement);
                
                if(piece.getType() === 'chessPawn' && piece.getColor() === "black" && piece.getY() === 7 && !once)
                {
                    
                    piece.delete(piece.getY(), piece.getX(),pieces);
                    BlackCrown = new Crown(piece.getX(), piece.getY(),"black", "crown");
                    BlackCrown.getElement().appendChild(BlackCrown.getImage());
                    let id = BlackCrown.getY().toString()+"-"+BlackCrown.getX().toString();
                    BlackCrown.getElement().id = id;
                    document.getElementById(id).append(BlackCrown.getElement());
                    pieces.push(BlackCrown);
                    console.log(pieces);
                    once = true;
                }

                if(piece.getType() === 'chessPawn' && piece.getColor() === "white" && piece.getY() === 0 && !once)
                {
                    
                    piece.delete(piece.getY(), piece.getX(),pieces);
                    BlackCrown = new Crown(piece.getX(), piece.getY(),"white", "crown");
                    BlackCrown.getElement().appendChild(BlackCrown.getImage());
                    let id = BlackCrown.getY().toString()+"-"+BlackCrown.getX().toString();
                    BlackCrown.getElement().id = id;
                    document.getElementById(id).append(BlackCrown.getElement());
                    pieces.push(BlackCrown);
                    console.log(pieces);
                    once = true;
                }
                
                pieces.forEach(function(piece)
                {
                piece.clearAllLastMoves();
                
                });
            });
        }
        
        if(piece.IsSelected() && piece.getX() !== xPosition || piece.IsSelected() && piece.getY !== piece.getY())
    {
        piece.setIsNotSelected();    
    }
    
   
    if(piece.getX() == xPosition && piece.getY() == yPosition)
    {
           
        piece.setIsSelected();
        
       }
             
    });
    
    pieces.forEach(function(piece)
    {
       piece.clearAllLastMoves();
      
    });
    
    pieces.forEach(function(piece)
    {
        if(piece.IsSelected())
        {
            
            piece.markSelectedPiece(piece.getPiecePosition());
            piece.displayPossibleMovements(table);
            
        } 
        
        
    });

    for(let x = 0; x < 8; x++)
    {
        //console.log(table[x]);
    }

});