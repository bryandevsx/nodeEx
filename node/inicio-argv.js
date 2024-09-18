var array_argv = process.argv;
console.log("Inicio do processo");

array_argv.forEach(function (val, index) {
    console.log(index + ": " + val)
});

console.log("Fim do processo");