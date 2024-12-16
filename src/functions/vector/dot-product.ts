import { Vector } from "../../class/Vector";

export function dot_product(vector_1:Vector,vector_2:Vector) {

    if (vector_1.values.length != vector_2.values.length) {
        return console.log('These vectors are not same length');    
    }
    
    var summation = 0 ;

    return new Promise<Number>(async (resolve, reject) => {
        
        await vector_1.values.syncForEach(function (value,next,i) {
            summation = summation +  value * vector_2.values[i - 1]; 
            next();
        })

        console.log(summation);
    })


}