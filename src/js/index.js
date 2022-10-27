const personagens = document.querySelectorAll('.personagem');

// personagens.forEach((personagem) => {
// 	personagem.addEventListener('mouseenter', () => {

// 		const idSelecionado = personagem.attributes.id.value;

// 		// if(idSelecionado === 'sasuke') return;

// 		const personagemSelecionado = document.querySelector('.selecionado');
// 		personagemSelecionado.classList.remove('selecionado');

// 		personagem.classList.add('selecionado');

// 		const imagemJogador1 = document.getElementById('personagem-jogador-1');imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

// 		const nomeJogador1 = document.getElementById('nome-jogador-1');
// 		const nomeSelecionado = personagem.getAttribute('data-name');
// 		nomeJogador1.innerHTML = nomeSelecionado
// 	});
// });

// const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem, index) => {

	personagem.addEventListener("mouseenter", () => {
	 
			const idSelecionado = personagem.attributes.id.value;

			const nomeSelecionado = personagem.getAttribute("data-name");

			const imagemJogador1 = document.getElementById("personagem-jogador-1");
	 
			imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

			const personagemJogador1 = document.querySelector(".personagem-grande.personagem-jogador-1");
		 
			personagemJogador1.getElementsByTagName("h2")[0].innerHTML = nomeSelecionado;

			const tagPersonagemSelecionada = document.getElementsByClassName('tag')[index]
			

			if (tagPersonagemSelecionada.innerHTML === '2P'){
					tagPersonagemSelecionada.innerHTML = '1P'
			}

			const personagemSelecionado = document.querySelector(".selecionado");
 
			personagemSelecionado.classList.remove("selecionado");

			personagem.classList.add("selecionado");
	});

	personagem.addEventListener("click", () => {
		 
			const idSelecionado = personagem.attributes.id.value;

			const nomeSelecionado = personagem.getAttribute("data-name");
			
			const imagemJogador2 = document.getElementById("personagem-jogador-2");
	
			imagemJogador2.src = `./src/imagens/${idSelecionado}.png`;

			const personagemJogador2 = document.querySelector(".personagem-grande.personagem-jogador-2");
			
			personagemJogador2.getElementsByTagName("h2")[0].innerHTML = nomeSelecionado;

			const tagPersonagemSelecionada = document.getElementsByClassName('tag')[index];

			tagPersonagemSelecionada.innerHTML = '2P';
			
			const personagemSelecionado = document.querySelector(".jogador-2-selecionado");
 
			personagemSelecionado.classList.remove("jogador-2-selecionado");

			personagem.classList.add("jogador-2-selecionado");

	});

	personagem.addEventListener('mouseout', ()=>{
			const personagensIguais = document.querySelector('.jogador-2-selecionado.selecionado')
			const tagPersonagemSelecionada = document.getElementsByClassName('tag')[index]
	
			if (personagensIguais){
					tagPersonagemSelecionada.innerHTML = '2P'
			}
	})
});