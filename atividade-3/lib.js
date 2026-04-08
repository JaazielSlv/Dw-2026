export function check(a, b, c) {
    
    if (a <= 0 || b <= 0 || c <= 0) {
        return 'none';
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        return 'none';
    }

    if (a === b && a === c) {
        return 'equilatero';
    }

    if (a === b || a === c || b === c) {
        return 'isosceles';
    }

    return 'escaleno';
}