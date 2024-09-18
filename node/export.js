var nome = 'bryan';
var idade = 30;

exports.nome = nome;
exports.idade = idade;
exports.getDados1 = () => {
    return nome + idade;
};

exports.getDados2 = function () {
    return 'Nome é: ' + nome + ' e tem ' + idade + ' anos.';
};