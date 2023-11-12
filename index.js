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
    [-1, -1, -1, -1, -1, -1, -1, -1 ],
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

    
    pieces.forEach(function(piece)
    {      
        
        posibleMovements = piece.getPossibleMovements(table);
        
        if(piece.IsSelected()){
            
            posibleMovements.forEach(function(posibleMovement)
            {
                piece.takePiece(yPosition,xPosition, posibleMovement, pieces); 
                
                piece.move(yPosition, xPosition,posibleMovement);
               
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
        //console.log(pieces);
    }

});