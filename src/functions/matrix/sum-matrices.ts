import { Matrix } from "../../class/Matrix";

export function sum(matrices:Matrix[]) {

    return new Promise<Matrix>( async (resolve, reject) => {

        var first_matrix_column_count = matrices[0].column_count;
        var first_matrix_row_count = matrices[0].row_count;
    
        var zero_matrix:number[][] = [];
        
        for (let i = 0; i < first_matrix_row_count; i++) {
            zero_matrix.push([]);
            for (let j = 0; j < first_matrix_column_count; j++) {
                zero_matrix[i].push(0);
            }
        }
    
        var newMatrix = new Matrix(zero_matrix);
    
        await matrices.syncForEach(async function (matrix:Matrix,next,i) {
            
            if (first_matrix_column_count != matrix.column_count || first_matrix_row_count != matrix.row_count) {
                return console.log("This summation isn't calculatable")
            }
    
            for (let i = 1; i <= first_matrix_row_count; i++) {
                for (let j = 1; j <= first_matrix_column_count; j++) {
                    newMatrix.setMatrixValue(i,j,  newMatrix.getMatrixValue(i,j) + matrix.getMatrixValue(i,j) );
                }
            }
    
            next();
        })
        
        resolve(newMatrix)
        
    })

   
}