// Gerar um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Pedir para o usuário chutar um número
let chute = Number(prompt("Adivinhe o número entre 1 e 100:"));

// Enquanto o chute for diferente do número secreto, continuar pedindo
while (chute !== numeroSecreto) {
if (chute > numeroSecreto) {
console.log("O número secreto é menor.");
} else {
console.log("O número secreto é maior.");
}
chute = Number(prompt("Tente novamente:"));
}

// Quando o usuário acertar
console.log("Parabéns! Você acertou!");