/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/biografiaCitas/img/imgCuriosidades/tresGatos.png',
		title: 'Tengo 3 gatos',
		skills: ['React', 'StyledComponents'],
		descripcion:
			'Desde siempre me han encantado los animales y he trabajado en labores de acogida de animales abandonados con la esperanza de darles'
			+' una segunda oportunidad. Una experiencia que te cambia la vida',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: '/biografiaCitas/img/imgCuriosidades/postre.png',
		title: 'Postres caseros',
		skills: ['JavaScript', 'Bootstrap'],
		descripcion:
			'Me gusta comerlos, pero tambien cocinarlos a mi manera y de forma saludable. Le aporta un lado irresistiblemente dulce a la vida '
			+'que todos necesitamos de vez en cuando',
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/biografiaCitas/img/imgCuriosidades/deporteRiesgo.png',
		title: 'Riesgo asegurado',
		skills: ['React', 'CSS'],
		descripcion:
			'Realmente no me gusta estar siempre en una ambiente cómodo y trato de ponerme retos desafiantes y a veces arriesgados.'
			+'¿Qué puedo decir? No me gusta la rutina. Encuentro especialmente emocionante la escalada libre, las acrobacias y coger el metro de Madrid en hora punta, eso sí que es '
			+'para... ¡tener un cinturón de seguridad y un buen seguro de vida!',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '/biografiaCitas/img/imgCuriosidades/manga.png',
		title: 'Mangaca declarado',
		skills: ['React', 'CSS'],
		descripcion:
			'Me gusta leer y reconozco que me he leido auténticos ladrillos de mil páginas, sin embargo, los dibujos ayudan bastante a seguir el hilo. El manga muestra un gran transfondo '
			+'y un mundo diferente del occidental que merece la pena ver. Debo reconocer que me encanta oriente en muchos sentidos.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '/biografiaCitas/img/imgCuriosidades/estoicismo.png',
		title: 'Orgulloso de ser raro',
		skills: ['React', 'CSS'],
		descripcion:
			'El termino estoicismo se ha vuelto populor recientemente como sinónimo de insensible y marginado de la sociedad. Soy consciente que esta sociedad no es perfecta, sin embargo, no pienso desesperarme y '
			+'dejar de avanzar hacia un futuro prospero. Esta forma de ver el mundo ciertamente es contraproducente para hacer nuevos amigos, aunque quién quiere amigos que realmente no lo son.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '/biografiaCitas/img/imgCuriosidades/dibujar2.png',
		title: 'Amor por el dibujo',
		skills: ['React', 'StyledComponents'],
		descripcion:
			'Aprendí a expresarme atraves del papel desde pequeño, aunque no fue hasta hace poco que comence a dibujar en serio. Me encanta dibujar escenas introspectivas como medio para conocerme y expresarme. '
			+'En mi opición, todos tenemos la capacidad de dibujar, sin embargo, no todos la explotamos.Si no me crees, demuestrame que me equivoco.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
