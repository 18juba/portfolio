import { error } from '@sveltejs/kit';

import ptBR from '$lib/i18n/pt-br/pt-BR.json';
import en from '$lib/i18n/en/en.json';

const translations = {
	'pt-BR': ptBR,
	en
};


export const load = ({ params }) => {
	const locale =
		params.lang === undefined
			? 'pt-BR'
			: params.lang;

	if (!(locale in translations)) {
		error(404, 'Idioma não suportado');
	}

	return {
		locale,
		translations: translations[locale]
	};
};