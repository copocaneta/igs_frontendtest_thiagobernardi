import { sanitize } from 'dompurify'
import '../css/index.css';
import {textoParaHelp} from './dados';

import {
	botaoHelp,
	modal,
	botaoSaldo,
	spanSaldo,
	modalCabTitulo,
	modalConteudo,
} from './elementos';

// importando o SwiperJS (para o slider) bundle com todos os modulos:
// https://swiperjs.com/
import Swiper from 'swiper/swiper-bundle';
// importando o bundle com todos os estilos CSS do SwiperJS
import 'swiper/swiper-bundle.css';

// sanitizando a string de html do help a ser exibida no modal de ajuda:

const textoParaHelpLimpo = sanitize(textoParaHelp);

// inicializando o SwiperJS:
const swiper = new Swiper(".mySwiper", {
	slidesPerView: "auto",
	centeredSlides: true,
	spaceBetween: 250,
	initialSlide: 1,
	pagination: {
			// el: ".swiper-pagination",
			el: ".swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
					return '<div class="' + className + '"></div>'
				}
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// FUNÇÕES

const abrirModal = () => {
	modal.classList.add('modal-mostrar');
	modalCabTitulo.textContent = 'Help';
	modalConteudo.innerHTML = textoParaHelpLimpo;

}

// funcao para abrir o modal:

const fecharModal = () => {
		modal.classList.remove('modal-mostrar');
    modal.classList.add('modal-esconder');

		const aposAnimacao = () => {

			// alert('entrou');
			modal.classList.remove('modal-esconder');

			// modal.removeEventListener("webkitAnimationEnd", aposAnimacao, false);
			// modal.removeEventListener("oAnimationEnd", aposAnimacao, false);
			// modal.removeEventListener("msAnimationEnd", aposAnimacao, false);
			// modal.removeEventListener("animationend", aposAnimacao, false)

		}

		modal.addEventListener("webkitAnimationEnd", aposAnimacao, false);
    modal.addEventListener("oAnimationEnd", aposAnimacao, false);
    modal.addEventListener("msAnimationEnd", aposAnimacao, false);
    modal.addEventListener("animationend", aposAnimacao, false);
}

// Event Listeners:


// iniciando Event Listener para clique no botão help:

botaoHelp.addEventListener('click', (e) => {
	abrirModal();
});


// iniciando Event Listener para clique para fechar o Modal:

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('btfecharmodal') ||  e.target.classList.contains('modal_close')) {
		// alert('entrou');
		fecharModal();
	}
});

// fechar o modal se clicarem fora do mesmo

document.addEventListener('click', (e) => {
	if (e.target == modal) {
		fecharModal();
	}
});

// fechar o modal com esc

  // Use the escape key to close modal
  document.addEventListener('keyup', (e) => {
		e = e || window.event;
    if(modal.classList.contains('modal-mostrar')) {
      if(e.keyCode == 27) {
        fecharModal();
      }
    }
  });

// event listener para exibir e esconder saldo


botaoSaldo.addEventListener('click', (e) => {
	e.target.classList.toggle('btsaldooff');
	e.target.classList.toggle('btsaldoon');

	if (e.target.classList.contains('btsaldoon')){
		spanSaldo.textContent = '$6.000,00';
	} else {
		spanSaldo.textContent = '----------';
	}
})