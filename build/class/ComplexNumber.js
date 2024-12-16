"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplexNumber = void 0;
var ComplexNumber = /** @class */ (function () {
    function ComplexNumber(number) {
        this.imaginary = number.imaginary;
        this.real = number.real;
    }
    ComplexNumber.prototype.getAbsoluteValue = function () {
        return Math.sqrt(Math.pow(this.imaginary, 2) + Math.pow(this.real, 2));
    };
    ComplexNumber.prototype.getArgument = function () {
        var real_part_absolute = Math.abs(this.real);
        var imaginary_part_absolute = Math.abs(this.imaginary);
        if (this.imaginary >= 0 && this.real > 0) {
            return Math.atan(imaginary_part_absolute / real_part_absolute);
        }
        else if (this.imaginary > 0 && this.real <= 0) {
            return Math.atan(real_part_absolute / imaginary_part_absolute) + Math.PI / 2;
        }
        else if (this.imaginary <= 0 && this.real < 0) {
            return Math.atan(imaginary_part_absolute / real_part_absolute) + Math.PI;
        }
        else if (this.imaginary < 0 && this.real >= 0) {
            return Math.atan(real_part_absolute / imaginary_part_absolute) + (Math.PI / 2) * 3;
        }
    };
    ComplexNumber.prototype.toString = function (format) {
        switch (format) {
            case 'number':
                return "".concat(this.real, " + ").concat(this.imaginary, "i");
            case 'polar':
                return "(".concat(this.getArgument(), ",").concat(this.getAbsoluteValue(), ")");
            case 'cartesian':
                return "(".concat(this.real, ",").concat(this.imaginary, ")");
        }
    };
    ComplexNumber.prototype.getRealPower = function (power) {
        var argument = this.getArgument();
        var length = this.getAbsoluteValue();
        var new_argument = power * argument;
        var new_length = Math.pow(length, power);
        var new_number_real_part = new_length * Math.cos(new_argument);
        var new_number_imaginary_part = new_length * Math.sin(new_argument);
        return new ComplexNumber({
            imaginary: new_number_imaginary_part,
            real: new_number_real_part
        });
    };
    return ComplexNumber;
}());
exports.ComplexNumber = ComplexNumber;
