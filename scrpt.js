let lempiras = 480;
let dolares = 24;

var conversion = lempiras / dolares;

let resultadoElement = document.getElementById("resultado");
resultadoElement.innerHTML = `Su conversión es: $${conversion.toFixed(2)}`;