import { error } from '@sveltejs/kit';

import ptBR from '$lib/i18n/pt-br/pt-BR.json';
import ptBRTechnologies from '$lib/i18n/pt-br/technology.json';
import ptBRExperiences from '$lib/i18n/pt-br/experience.json';
import ptBREducation from '$lib/i18n/pt-br/education.json';
import ptBRProjects from '$lib/i18n/pt-br/project.json';
import en from '$lib/i18n/en/en.json';
import enTechnologies from '$lib/i18n/en/technology.json';
import enExperiences from '$lib/i18n/en/experience.json';
import enEducation from '$lib/i18n/en/education.json';
import enProjects from '$lib/i18n/en/project.json';

const translations = {
	'pt-BR': {
		...ptBR,
		technologies: ptBRTechnologies,
		experiences: ptBRExperiences,
		educationItems: ptBREducation,
		projects: ptBRProjects
	},
	en: {
		...en,
		technologies: enTechnologies,
		experiences: enExperiences,
		educationItems: enEducation,
		projects: enProjects
	}
};


export const load = ({ params }) => {
	const locale =
		params.lang === undefined
			? 'pt-BR'
			: params.lang;

	if (!(locale in translations)) {
		throw error(404, 'Idioma não suportado');
	}

	return {
		locale,
		translations: translations[locale]
	};
};