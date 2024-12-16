"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function = void 0;
var operators = ['*', '/', '-', '+', '^'];
var Function = /** @class */ (function () {
    function Function(parameters, terms) {
        var terms_trimmed = terms.replaceAll(' ', '');
        var chararray = terms_trimmed.split('');
        chararray.syncForEach(function (char, next) {
            if (parameters.indexOf(char) != -1) {
                console.log(char);
            }
            next();
        });
    }
    return Function;
}());
exports.Function = Function;
