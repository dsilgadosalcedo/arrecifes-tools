// gradient
type FromColor = `from-${string}`
type ToColor = `to-${string}`

interface Card {
  title: string
  description: string
  url?: string
  image: string
  fromColor: FromColor
  toColor: ToColor
}

export const cards: Card[] = [
  {
    title: "Space",
    description: "Nuestras herramientas celestiales.",
    image: "/icons/resources-icon.svg",
    fromColor:"from-cold-400",
    toColor:"to-gray-800",
  },
  {
    title: "Tratamientos",
    description: "Las Tools para el tratamiento de suelos y agua.",
    image: "/icons/pollution-icon.svg",
    fromColor:"from-white",
    toColor:"to-gray-800",
  },
  {
    title: "Ecosistemas",
    description: "Tejidos vivos interconectados en equilibrio.",
    url: "/ecosystems",
    image: "/icons/ecosystems-icon.svg",
    fromColor:"from-cold-400",
    toColor:"to-[#42cc80]",
  },
  {
    title: "Clima",
    description: "Entre el equilibrio y el caos.",
    image: "/icons/climate-icon.svg",
    fromColor:"from-white",
    toColor:"to-cold-400",
  },
  {
    title: "Residuos",
    description: "Manejo integral de residuos aquí.",
    image: "/icons/waste-icon.svg",
    fromColor:"from-[#42cc80]",
    toColor:"to-[#105136]",
  },
  {
    title: "La Mapzone",
    description: "Explora el planeta en mapas.",
    image: "/icons/resources-icon.svg",
    fromColor:"from-cold-400",
    toColor:"to-cold-600",
  },
]   
