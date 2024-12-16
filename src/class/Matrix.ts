export class Matrix {

    column_count:number;
    row_count:number;
    matrix_values:number[][];

    constructor (values:number[][]) {

        this.row_count = values.length;

        let first_colument_length:number = values[0].length;

        values.syncForEach(function (row:number[],next) {
            if (first_colument_length != row.length) {
                return console.error("Matrix rows' element counts must be same.");
            }
            next();
        }, () => {
            this.column_count = first_colument_length;
            this.matrix_values = values
        });

    }

    getMatrixValue(i:number,j:number){
        var row = this.matrix_values[i-1];
        return row[j-1]
    }

    setMatrixValue(i:number,j:number,new_value){
        var row = this.matrix_values[i-1];
        row[j-1] = new_value;
    }

    async multiplyConstant(constant:number){
        var new_matrix_arr:number[][] = [];

        return new Promise<Matrix>(async (resolve, reject) => {
            await this.matrix_values.syncForEach(async function (row:number[],next,i) {
                new_matrix_arr.push([]);
                
                await row.syncForEach(function (number,next_number) {
                    new_matrix_arr[i-1].push(constant*number);
                    next_number();
                })
    
                next();
            });
            resolve(new Matrix(new_matrix_arr));
        })

    }

    async getRow(index:number){
        return new Promise<number[]>((resolve, reject) => {
            resolve(this.matrix_values[index - 1]);  
        })
    }

    async getColumn(index:number){
        var column:number[] = [];
        return new Promise<number[]>(async (resolve, reject) => {
            await this.matrix_values.syncForEach(function (row:number[],next) {
                column.push(row[index - 1]);
                next();
            })
            resolve(column);
        })
    }

}