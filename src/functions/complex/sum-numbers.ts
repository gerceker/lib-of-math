import { ComplexNumber } from "../../class/ComplexNumber";
import 'syncforeachloop';

export function sum(numbers:ComplexNumber[]) {
    return new Promise<ComplexNumber>(async (resolve, reject) => {
        var new_number_imaginary_part = 0;
        var new_number_real_part = 0;
    
        await numbers.syncForEach(function (number:ComplexNumber,next) {
            new_number_imaginary_part =  new_number_imaginary_part + number.imaginary;
            new_number_real_part = new_number_real_part + number.real;
            next();
        });
    
        resolve(new ComplexNumber({
            imaginary:new_number_imaginary_part,
            real:new_number_real_part
        }));

    })

}