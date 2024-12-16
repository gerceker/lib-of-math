import { ComplexNumber } from "../../class/ComplexNumber";
import 'syncforeachloop';

export function product(numbers:ComplexNumber[]) {
    return new Promise<ComplexNumber>(async (resolve, reject) => {
        
        var new_argument = 0;
        var new_length = 1;
    
        await numbers.syncForEach(function (number:ComplexNumber,next) {            
            var argument:number = <number>number.getArgument();
            var length:number = <number>number.getAbsoluteValue();
            
            new_argument = new_argument + argument;
            new_length = new_length * length;

            next();
        });

        console.log(new_argument);

        let real_part =  new_length * Math.cos(new_argument); 
        let imaginary_part =  new_length * Math.sin(new_argument); 

        resolve(new ComplexNumber({
            imaginary:imaginary_part,
            real:real_part
        }))


    })

}