Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'bid-es-es',
			lang: 'es',
			dir: 'compendium'
		}); 
	}
});
