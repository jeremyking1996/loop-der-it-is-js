class LoopDeLoop {
    oneToTen(){
        let response ="";
        for (let i=1; i <= 10; i++){
            response += i+"\n";
        }
        return response;
    }
    loopsSquared(){
        let answer ="";
        for (let i =1; i <= 10; i++){
        answer += (i * i) + "\n";
        }
        return answer;
    }
    evenUnder(n){
        let output = "";
        for (let i = 2; i < n; i+=2){
        output += i+ "\n";
        }
        return output;
    }
    starLoop(){
        let line, triangle;
        line = triangle = "";
        for (let row = 1; row <= 5; row++) {
        line = "";
        for (let x = 0; x < row; x++) {
            line += "*";
        }
        triangle += line + "\n";
        }
        return triangle;
    }

    squareLoop(){
       // print columns and row numbers
       const maxTotalRows = 4;
       const maxTotalColumns = 4;
   let completedTable = "";
   for (let row = 1; row <= maxTotalRows; row++) {
       //OUTER LOOP
       for (let column = 1; column <= maxTotalColumns; column++) {
       //INNER LOOP
       completedTable = completedTable + `|${row * column}`;
       }
       completedTable += "|\n";
   }
   return completedTable;
   }
   
   bigSquareLoop(){
    // print columns and row numbers
    const maxTotalRows = 6;
    const maxTotalColumns = 6;
    let completedTable = "";
    for (let row = 1; row <= maxTotalRows; row++) {
    //OUTER LOOP
    for (let column = 1; column <= maxTotalColumns; column++) {
    //INNER LOOP
    completedTable = completedTable + `|${row * column}`;
    }
    completedTable += "|\n";
}
return completedTable;
}
}


module.exports = LoopDeLoop;