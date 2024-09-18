module.exports = {

    numeroBase: function () {
        return Math.random();
    },

    numeroDez: function () {
        return Math.floor(Math.random() * 10);
    },

    numeroFator: function (fator) {
        return Math.floor(Math.random() * fator);
    },

};