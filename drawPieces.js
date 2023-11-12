let rows = 8;
let columns = 8;

function setGame() 
{

    drawTable();

   
let blackRookImg1 = document.createElement("img");
let blackRookImg2 = document.createElement("img");


let blackKnightImg1 = document.createElement("img");
let blackKnightImg2 = document.createElement("img");

let blackKingImg = document.createElement("img");
let blackCrownImg = document.createElement("img");
let blackChessPawnImg = document.createElement("img");
let blackBishopImg = document.createElement("img");
let whiteRookImg = document.createElement("img");
let whiteBishopImg = document.createElement("img");
let whiteKingImg = document.createElement("img");
let whiteCrownImg = document.createElement("img");
let whiteChessPawnImg = document.createElement("img");
let whiteKnightImg = document.createElement("img");

blackRookImg1.src = "./images/BlackRook.png";
blackRookImg2.src = "./images/BlackRook.png";
blackKnightImg1.src="./images/blackKnight.png";
blackKnightImg2.src="./images/blackKnight.png";

blackKingImg.src="./images/blackKing.png";
blackCrownImg.src="./images/blackCrown.png";
blackChessPawnImg.src="./images/blackChessPawn.png";
blackBishopImg.src="./images/blackBishop.png";
whiteRookImg.src="./images/whiteRook.png";
whiteBishopImg.src="./images/whiteBishop.png";
whiteKingImg.src="./images/whiteKing.png";
whiteCrownImg.src="./images/whiteCrown.png";
whiteChessPawnImg.src="./images/whiteChessPawn.png";
whiteKnightImg.src="./images/whiteKnight.png";

LeftBlackRook = new Rook(4,3, 'black', 'rook');
pieces.push(LeftBlackRook );

LeftBlackRook .getElement().appendChild(LeftBlackRook.getImage());
//LeftBlackRook .getElement().removeChild(blackRookImg1)
let id = LeftBlackRook.getY().toString() + "-" + LeftBlackRook.getX().toString();
LeftBlackRook .getElement().id = id;              
document.getElementById(id).append(LeftBlackRook.getElement());

RightBlackRook = new Rook(7, 0, 'black', 'rook');
pieces.push(RightBlackRook);
RightBlackRook .getElement().appendChild(RightBlackRook.getImage());
id = RightBlackRook.getY().toString() + "-" + RightBlackRook.getX().toString();
RightBlackRook .getElement().id = id;              
document.getElementById(id).append(RightBlackRook.getElement());

RightBlackKnight = new Knight(6, 0, 'black', 'knight');
pieces.push(RightBlackKnight );
RightBlackKnight .getElement().appendChild(RightBlackKnight.getImage());
id = RightBlackKnight.getY().toString() + "-" + RightBlackKnight.getX().toString();
RightBlackKnight .getElement().id = id;              
document.getElementById(id).append(RightBlackKnight.getElement());

LeftBlackKnight = new Knight(1, 0, 'black', 'knight');
pieces.push(LeftBlackKnight );
LeftBlackKnight .getElement().appendChild(LeftBlackKnight.getImage());
id = LeftBlackKnight.getY().toString() + "-" + LeftBlackKnight.getX().toString();
LeftBlackKnight .getElement().id = id;              
document.getElementById(id).append(LeftBlackKnight.getElement());
 
LeftBlackBishop = new Bishop(2, 0, 'black', 'bishop');
pieces.push(LeftBlackBishop);
LeftBlackBishop .getElement().appendChild(LeftBlackBishop.getImage());
id = LeftBlackBishop.getY().toString() + "-" + LeftBlackBishop.getX().toString();
LeftBlackBishop .getElement().id = id;              
document.getElementById(id).append(LeftBlackBishop.getElement());

LeftBlackBishop = new Bishop(5, 0, 'black', 'bishop');
pieces.push(LeftBlackBishop);
LeftBlackBishop .getElement().appendChild(LeftBlackBishop.getImage());
id = LeftBlackBishop.getY().toString() + "-" + LeftBlackBishop.getX().toString();
LeftBlackBishop .getElement().id = id;              
document.getElementById(id).append(LeftBlackBishop.getElement());

BlackKing = new King(4, 0, 'black', 'king');
pieces.push(BlackKing);
BlackKing .getElement().appendChild(BlackKing.getImage());
id = BlackKing.getY().toString() + "-" + BlackKing.getX().toString();
BlackKing .getElement().id = id;              
document.getElementById(id).append(BlackKing.getElement());

BlackCrown = new Crown(3, 0, 'black', 'crown');
pieces.push(BlackCrown);
BlackCrown .getElement().appendChild(BlackCrown.getImage());
id = BlackCrown.getY().toString() + "-" + BlackCrown.getX().toString();
BlackCrown .getElement().id = id;              
document.getElementById(id).append(BlackCrown.getElement());

for(let x = 0; x < 8; x++)
{
BlackChessPawn = new ChessPawn(x, 1, 'black', 'chessPawn');
pieces.push(BlackChessPawn);
BlackChessPawn .getElement().appendChild(BlackChessPawn.getImage());
id = BlackChessPawn.getY().toString() + "-" + BlackChessPawn.getX().toString();
BlackChessPawn .getElement().id = id;              
document.getElementById(id).append(BlackChessPawn.getElement());
}




LeftWhiteRook = new Rook(0, 7, 'white', 'rook');
pieces.push(LeftWhiteRook );
LeftWhiteRook .getElement().appendChild(LeftWhiteRook.getImage());
//LeftWhiteRook .getElement().removeChild(blackRookImg1)
id = LeftWhiteRook.getY().toString() + "-" + LeftWhiteRook.getX().toString();
LeftWhiteRook .getElement().id = id;              
document.getElementById(id).append(LeftWhiteRook.getElement());

LeftWhiteRook = new Rook(7,7, 'white', 'rook');
pieces.push(LeftWhiteRook );
LeftWhiteRook .getElement().appendChild(LeftWhiteRook.getImage());
id = LeftWhiteRook.getY().toString() + "-" + LeftWhiteRook.getX().toString();
LeftWhiteRook .getElement().id = id;              
document.getElementById(id).append(LeftWhiteRook.getElement());

RightWhiteKnight = new Knight(6, 7, 'white', 'knight');
pieces.push(RightWhiteKnight );
RightWhiteKnight .getElement().appendChild(RightWhiteKnight.getImage());
id = RightWhiteKnight.getY().toString() + "-" + RightWhiteKnight.getX().toString();
RightWhiteKnight .getElement().id = id;              
document.getElementById(id).append(RightWhiteKnight.getElement());

LeftWhiteKnight = new Knight(1, 7, 'white', 'knight');
pieces.push(LeftWhiteKnight );
LeftWhiteKnight .getElement().appendChild(LeftWhiteKnight.getImage());
id = LeftWhiteKnight.getY().toString() + "-" + LeftWhiteKnight.getX().toString();
LeftWhiteKnight .getElement().id = id;              
document.getElementById(id).append(LeftWhiteKnight.getElement());
 
LeftWhiteBishop = new Bishop(2, 7, 'white', 'bishop');
pieces.push(LeftWhiteBishop);
LeftWhiteBishop .getElement().appendChild(LeftWhiteBishop.getImage());
id = LeftWhiteBishop.getY().toString() + "-" + LeftWhiteBishop.getX().toString();
LeftWhiteBishop .getElement().id = id;              
document.getElementById(id).append(LeftWhiteBishop.getElement());

RightWhiteBishop = new Bishop(5, 7, 'white', 'bishop');
pieces.push(RightWhiteBishop);
RightWhiteBishop .getElement().appendChild(RightWhiteBishop.getImage());
id = RightWhiteBishop.getY().toString() + "-" + RightWhiteBishop.getX().toString();
RightWhiteBishop .getElement().id = id;              
document.getElementById(id).append(RightWhiteBishop.getElement());

WhiteKing = new King(4, 7, 'white', 'king');
pieces.push(WhiteKing);
WhiteKing .getElement().appendChild(WhiteKing.getImage());
id = WhiteKing.getY().toString() + "-" + WhiteKing.getX().toString();
WhiteKing .getElement().id = id;              
document.getElementById(id).append(WhiteKing.getElement());

WhiteCrown = new Crown(3, 7, 'white', 'crown');
pieces.push(WhiteCrown);
WhiteCrown .getElement().appendChild(WhiteCrown.getImage());
id = WhiteCrown.getY().toString() + "-" + WhiteCrown.getX().toString();
WhiteCrown .getElement().id = id;              
document.getElementById(id).append(WhiteCrown.getElement());

for(let x = 0; x < 8; x++)
{
WhiteChessPawn = new ChessPawn(x, 6, 'white', 'chessPawn');
pieces.push(WhiteChessPawn);
WhiteChessPawn .getElement().appendChild(WhiteChessPawn.getImage());
id = WhiteChessPawn.getY().toString() + "-" + WhiteChessPawn.getX().toString();
WhiteChessPawn .getElement().id = id;              
document.getElementById(id).append(WhiteChessPawn.getElement());
}

}