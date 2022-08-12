function isSolved(board) {
    winner = -2;

    board.map(x =>{//check contain 0 
        x.map(y=>{
            y==0?winner=-1:-2;
        })
    })

    for(var i=0;i<3;i++){//check rows
        if(board[i][0] == board[i][1] && board[i][1] == board[i][2]){
            board[i][0]!=0?winner=board[i][0]:-2; }}

    for(var i=0;i<3;i++){//check columns
        if(board[0][i] == board[1][i] && board[1][i] == board[2][i]){
            board[0][i]!=0?winner=board[0][i]:-2; } }

    if(board[0][0] == board[1][1] && board[1][1] == board[2][2]){//check diagonal
        board[0][0]!=0?winner=board[0][0]:-2;  }

    if(board[0][2] == board[1][1] && board[1][1] == board[2][0]){//check diagonal
        board[0][2]!=0?winner=board[0][2]:-2; }
    
    

    if(winner ==-2){//check cat game
        winner=0;
    }
    return winner;
    
  }

console.log(  isSolved([ [2,1,2],
                         [2,1,1],
                         [1,2,1] ] )           )



                         /*
 If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

            */