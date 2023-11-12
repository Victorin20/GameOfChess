function updatesquare(square, num, num2) {
    if (num %2 == num2%2) {
       square.classList.add("whiteSquare");               
    }
    else square.classList.add("blackSquare");
    
}
const drawTable = () =>{

    for(let r = 0; r < rows; r++)
    {
        for(let c = 0; c < columns; c++){
            let square = document.createElement("div");
            square.id = r.toString() + "-" + c.toString();
            updatesquare(square, c, r);
            document.getElementById("board").append(square);
        }
    } 
}