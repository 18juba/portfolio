const technologyLabels = {
	svelte: 'Svelte',
	sveltekit: 'SvelteKit',
	golang: 'Go',
	go: 'Go',
	postgresql: 'PostgreSQL',
	docker: 'Docker',
	mqtt: 'MQTT',
	gorm: 'GORM',
	python: 'Python',
	laravel: 'Laravel',
	typescript: 'TypeScript',
	javascript: 'JavaScript',
	tailwind: 'Tailwind CSS',
	nextjs: 'Next.js',
	php: 'PHP',
	chartjs: 'Chart.js',
	figma: 'Figma',
	mysql: 'MySQL',
	react: 'React',
	redis: 'Redis'
};

export function getTechnologyLabel(technology) {
	return technologyLabels[technology.toLowerCase()] ?? technology;
}