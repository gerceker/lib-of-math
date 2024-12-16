//class
import {ComplexNumber} from './class/ComplexNumber';
import {Matrix} from './class/Matrix';
import {Vector} from './class/Vector';
//class

import {complex} from './functions/complex';
import {matrix} from './functions/matrix';
import {vector} from './functions/vector';

export {
    ComplexNumber,
    Matrix,
    Vector,
    complex,
    matrix,
    vector
};

async function main() {
    var vector_1 = new Vector([2,9,2,5]);
    var vector_2 = new Vector([-1,-1,-1,-2]);

    vector.dot_product(vector_1,vector_2);
}

main()