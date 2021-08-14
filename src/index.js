exports.min = function min(array) {
    if (typeof array === 'object') {
        if (array.length == 0) {
            return 0;
        } else {
            return Math.min.apply(null, array);
        }
    } else {
        return 0;
    }
}

exports.max = function max(array) {
    if (typeof array === 'object') {
        if (array.length == 0) {
            return 0;
        } else {
            return Math.max.apply(null, array);
        }
    } else {
        return 0;
    }
}

exports.avg = function avg(array) {
    if (typeof array === 'object') {
        if (array.length == 0) {
            return 0;
        } else {
            return Object.values(array).reduce((a, b) => a + b, 0) / array.length;
        }
    } else {
        return 0;
    }
}
