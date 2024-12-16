import {imaginary_number_parts} from "../types/imaginary-numbers";

export class ComplexNumber {

    imaginary:number;
    real:number;

    constructor(number:imaginary_number_parts) {
        this.imaginary = number.imaginary;
        this.real = number.real;
    }

    getAbsoluteValue(){
        return Math.sqrt(this.imaginary**2 + this.real**2);
    }

    getArgument(){
        var real_part_absolute = Math.abs(this.real)
        var imaginary_part_absolute = Math.abs(this.imaginary)
        if (this.imaginary >= 0  && this.real > 0) {
            return Math.atan(imaginary_part_absolute/real_part_absolute);
        }else if(this.imaginary > 0 && this.real <= 0){
            return Math.atan(real_part_absolute/imaginary_part_absolute) + Math.PI/2;
        }else if(this.imaginary <= 0  && this.real < 0){
            return Math.atan(imaginary_part_absolute/real_part_absolute) + Math.PI;
        }else if(this.imaginary < 0 && this.real >= 0){ 
            return Math.atan(real_part_absolute/imaginary_part_absolute) + (Math.PI/2)*3
        }
    }

    toString(format:'polar'|'cartesian'|'number'){
        switch (format){
            case 'number' : 
                return `${this.real} + ${this.imaginary}i`;
            case 'polar' : 
                
                return `(${this.getArgument()},${this.getAbsoluteValue()})`;
            case 'cartesian':
                return `(${this.real},${this.imaginary})` 
        }
    }

    getRealPower(power:number){
        var argument:number = <number>this.getArgument();
        var length = this.getAbsoluteValue();
        
        var new_argument = power * argument;
        var new_length = length ** power;

        var new_number_real_part = new_length * Math.cos(new_argument);
        var new_number_imaginary_part = new_length * Math.sin(new_argument);
    
        return new ComplexNumber({
            imaginary:new_number_imaginary_part,
            real:new_number_real_part
        });
        
    }

}