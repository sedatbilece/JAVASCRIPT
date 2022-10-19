function rotate(matrix, direction) {

    var newMatrix = [];

    if (direction === 'counter-clockwise') {
        for (var i = 0; i < matrix.length; i++) {
            newMatrix.push([]);
            for (var j = 0; j < matrix[i].length; j++) {
                newMatrix[i].push(matrix[j][i]);
            }
        }
    } else if (direction === 'clockwise') {
        for (var i = 0; i < matrix.length; i++) {
            newMatrix.push([]);
            for (var j = 0; j < matrix[i].length; j++) {
                newMatrix[i].push(matrix[matrix.length - 1 - j][i]);
            }
        }
    }

    return newMatrix;
    
}


console.log(rotate([ 
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
    ], 'counter-clockwise'));


    