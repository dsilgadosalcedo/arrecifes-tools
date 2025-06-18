// gradient
export type FromColor = `from-${string}`
export type ToColor = `to-${string}`

export interface ProjectCard {
	description: string
	fromColor: FromColor
	icon: string
	image?: string
	tag?: string
	title: string
	toColor: ToColor
	url?: string
}

export const cards: ProjectCard[] = [
	{
		description: "Un editor de código para la web y para ti.",
		fromColor: "from-cold-100",
		icon: "/icons/codecraft.svg",
		title: "Codecraft",
		toColor: "to-cold-800",
		url: "https://mycodecraft.vercel.app/",
	},
	{
		description:
			"Encuentra cualquier especie, avistamientos, habitat y más info.",
		fromColor: "from-[#42cc80]",
		icon: "/icons/ecosystems-icon.svg",
		title: "BB2",
		toColor: "to-cold-400",
		url: "https://bb2-project.vercel.app/",
	},
	// {
	// 	title: "Tratamientos",
	// 	description: "Las Tools para el tratamiento de suelos y agua.",
	// 	image: "/icons/pollution-icon.svg",
	// 	fromColor: "from-white",
	// 	toColor: "to-gray-800",
	// },
	// {
	// 	title: "Residuos",
	// 	description: "Manejo integral de residuos aquí.",
	// 	image: "/icons/waste-icon.svg",
	// 	fromColor: "from-[#42cc80]",
	// 	toColor: "to-[#105136]",
	// },
	// {
	//   title: "La Mapzone",
	//   description: "Explora el planeta en mapas.",
	//   image: "/icons/resources-icon.svg",
	//   fromColor:"from-cold-400",
	//   toColor:"to-cold-600",
	// },
]
