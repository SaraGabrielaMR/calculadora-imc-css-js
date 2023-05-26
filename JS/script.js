function calcular () {
	var peso = document.getElementById('pesoUser').value;
	var altura = document.getElementById('alturaUser').value;
	
	var imc = peso / (altura * altura);
	
	document.getElementById('resultado').textContent = imc.toFixed(2);
	
	document.getElementById('result').classList.remove('hidden');
	
	if (imc < 18.5){
		document.getElementById('descricao').textContent = 'Você está abaixo do peso ideal';
        resultado.classList.remove('vermelho');
        resultado.classList.remove('verde');
        resultado.classList.add('azul');
		
		descricao.classList.remove('vermelho');
        descricao.classList.remove('verde');
        descricao.classList.add('azul');
		
		document.getElementById('carinha').src='imagens/triste.png';

    } else if (imc >= 18.5 && imc <= 25) {
        document.getElementById('descricao').textContent = 'Você está no peso ideal';
        resultado.classList.remove('vermelho');
        resultado.classList.remove('azul');
        resultado.classList.add('verde');
		
		descricao.classList.remove('vermelho');
        descricao.classList.remove('azul');
        descricao.classList.add('verde');
		
		document.getElementById('carinha').src='imagens/feliz.png';

    } else if (imc > 25){
        document.getElementById('descricao').textContent = 'Você está acima peso ideal';
        resultado.classList.remove('azul');
        resultado.classList.remove('verde');
        resultado.classList.add('vermelho');
		
		descricao.classList.remove('azul');
        descricao.classList.remove('verde');
        descricao.classList.add('vermelho');
		
		document.getElementById('carinha').src='imagens/bravo.png';
    }
	document.getElementById('resultado').textContent = imc.toFixed(2);
}

function resetar () {
	document.getElementById('pesoUser').value = ' ';
	document.getElementById('alturaUser').value = ' ';
	
	document.getElementById('result').classList.add('hidden');
}