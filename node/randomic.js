exports.numeroBase = function () {
    return Math.random();
};

exports.numeroDez = function () {
    return Math.floor(Math.random() * 10);
};

exports.numeroFator = function (fator) {
    return Math.floor(Math.random() * fator);
};