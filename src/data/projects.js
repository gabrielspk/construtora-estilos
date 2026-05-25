const obraImageModules = import.meta.glob("../assets/obras/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const getImage = (path) => {
  const image = obraImageModules[`../assets/obras/${path}`];

  if (!image) {
    console.warn(`Imagem de obra não encontrada: ${path}`);
  }

  return image;
};

const imageMedia = (folder, file) => ({
  type: "image",
  src: getImage(`${folder}/fotos/${file}`),
});

const obraImageMedia = (folder, file) => ({
  type: "image",
  src: getImage(`${folder}/${file}`),
});

const videoMedia = (videoFolder, file, posterFolder, poster) => ({
  type: "video",
  src: `/videos/${videoFolder}/${file}`,
  poster: getImage(`${posterFolder}/fotos/${poster}`),
});

const obraVideoMedia = (videoFolder, file, posterPath) => ({
  type: "video",
  src: `/videos/${videoFolder}/${file}`,
  poster: getImage(posterPath),
});

export const projects = [
  {
    id: 1,
    name: "Galpão logístico cliente Vasco",
    location: "Bom Jesus dos Perdões, SP",
    category: "Logístico",
    area: "3.525,85 m²",
    year: "2026",
    description: "Galpão logístico pré-moldado desenvolvido com estrutura de alto desempenho, executado desde a fundação até a montagem completa da estrutura, cobertura e acabamentos. Projeto concebido para máxima eficiência operacional, armazenagem estratégica e agilidade logística, garantindo resistência estrutural, otimização de espaço e alto padrão construtivo.",
    cover: getImage("vasco/foto26.jpg"),
    media: [
      obraImageMedia("vasco", "foto1.jpg"),
      obraVideoMedia("vasco/videos", "video1.mp4", "vasco/foto5.jpg"),
      obraImageMedia("vasco", "foto2.jpg"),
      obraImageMedia("vasco", "foto3.jpg"),
      obraImageMedia("vasco", "foto4.jpg"),
      obraImageMedia("vasco", "foto5.jpg"),
      obraVideoMedia("vasco/videos", "video4.mp4", "vasco/foto5.jpg"),
      obraImageMedia("vasco", "foto6.jpg"),
      obraImageMedia("vasco", "foto10.jpg"),
      obraImageMedia("vasco", "foto7.jpg"),
      obraVideoMedia("vasco/videos", "video2.mp4", "vasco/foto10.jpg"),
      obraVideoMedia("vasco/videos", "video3.mp4", "vasco/foto15.jpg"),
      obraImageMedia("vasco", "foto8.jpg"),
      obraImageMedia("vasco", "foto9.jpg"),
      obraImageMedia("vasco", "foto11.jpg"),
      obraImageMedia("vasco", "foto12.jpg"),
      obraImageMedia("vasco", "foto13.jpg"),
      obraImageMedia("vasco", "foto14.jpg"),
      obraImageMedia("vasco", "foto15.jpg"),
      obraImageMedia("vasco", "foto16.jpg"),
      obraImageMedia("vasco", "foto17.jpg"),
      obraImageMedia("vasco", "foto18.jpg"),
      obraImageMedia("vasco", "foto19.jpg"),
      obraVideoMedia("vasco/videos", "video5.mp4", "vasco/foto25.jpg"),
      obraImageMedia("vasco", "foto22.jpg"),
      obraImageMedia("vasco", "foto20.jpg"),
      obraImageMedia("vasco", "foto21.jpg"),
      obraImageMedia("vasco", "foto23.jpg"),
      obraImageMedia("vasco", "foto24.jpg"),
      obraImageMedia("vasco", "foto25.jpg"),
      obraImageMedia("vasco", "foto26.jpg"),
    ],
  },
  {
    id: 2,
    name: "Galpão comercial cliente Iveparts",
    location: "São Paulo, SP",
    category: "Comercial",
    area: "2.596,95	m²",
    year: "2021",
    description: "Galpão comercial executado para o cliente Iveparts, contemplando montagem estrutural, acabamentos e entrega completa das áreas internas e externas. O projeto possui Subsolo 1, Subsolo 2 e cobertura técnica, evidenciando a complexidade e robustez da obra executada.",
    cover: getImage("iveparts/foto18.jpg"),
    media: [
      obraVideoMedia("iveparts", "video1.mp4", "iveparts/foto2.jpg"),
      obraVideoMedia("iveparts", "video2.mp4", "iveparts/foto4.jpg"),
      obraImageMedia("iveparts", "foto1.jpg"),
      obraImageMedia("iveparts", "foto4.jpg"),
      obraVideoMedia("iveparts", "video3.mp4", "iveparts/foto6.jpg"),
      obraVideoMedia("iveparts", "video4.mp4", "iveparts/foto4.jpg"),
      obraImageMedia("iveparts", "foto5.jpg"),
      obraImageMedia("iveparts", "foto7.jpg"),
      obraImageMedia("iveparts", "foto8.jpg"),
      obraImageMedia("iveparts", "foto10.jpg"),
      obraVideoMedia("iveparts", "video5.mp4", "iveparts/foto10.jpg"),
      obraImageMedia("iveparts", "foto11.jpg"),
      obraImageMedia("iveparts", "foto12.jpg"),
      obraVideoMedia("iveparts", "video6.mp4", "iveparts/foto12.jpg"),
      obraImageMedia("iveparts", "foto13.jpg"),
      obraImageMedia("iveparts", "foto14.jpg"),
      obraVideoMedia("iveparts", "video7.mp4", "iveparts/foto14.jpg"),
      obraImageMedia("iveparts", "foto16.jpg"),
      obraVideoMedia("iveparts", "video8.mp4", "iveparts/foto25.jpg"),
      obraImageMedia("iveparts", "foto17.jpg"),
      obraImageMedia("iveparts", "foto18.jpg"),
    ],
  },
  {
    id: 3,
    name: "Galpão industrial/logístico cliente Mitsubishi",
    location: "Atibaia, SP",
    category: "Industrial",
    area: "4.520,99 m²",
    year: "2024",
    description: "Galpão logístico-industrial desenvolvido para a Mitsubishi Chemical em Atibaia, com foco em sustentabilidade, eficiência operacional e conforto térmico. O projeto conquistou a certificação internacional LEED Gold (USGBC), utilizando soluções inteligentes de iluminação e ventilação natural com telhas translúcidas e venezianas em policarbonato. Com pé-direito de 12 metros, a obra foi destaque nacional em 2024, conquistando o 2º lugar entre os melhores galpões logísticos industriais do Brasil.",
    cover: getImage("mitsubishi/mistubishi_pronto.jpg"),
    media: [
      obraImageMedia("mitsubishi", "mitsubishi_planta_foto1.jpg"),
      obraVideoMedia("mitsubishi", "video1.mp4", "mitsubishi/mistubishi_pronto.jpg"),
      obraImageMedia("mitsubishi", "foto1.jpg"),
      obraImageMedia("mitsubishi", "mitsubishi_montagem_foto1.jpg"),
      obraImageMedia("mitsubishi", "mitsubishi_montagem_foto2.jpg"),
      obraVideoMedia("mitsubishi", "video2.mp4", "mitsubishi/mistubishi_pronto.jpg"),
      obraImageMedia("mitsubishi", "mitsubishi_montagem_foto6.jpg"),
      obraImageMedia("mitsubishi", "mitsubishi_montagem_foto7.jpg"),
      obraImageMedia("mitsubishi", "mitsubishi_montagem_foto3.jpg"),
      obraImageMedia("mitsubishi", "mitsubishi_montagem_foto5.jpg"),
      obraImageMedia("mitsubishi", "foto5.jpg"),
      obraImageMedia("mitsubishi", "foto4.jpg"),
      obraImageMedia("mitsubishi", "mitsubishi_montagem_foto8.jpg"),
      obraImageMedia("mitsubishi", "mitsubishi_montagem_foto9.jpg"),
      obraImageMedia("mitsubishi", "mitsubishi_montagem_foto10.jpg"),
      obraImageMedia("mitsubishi", "mitsubishi_interno_foto1.jpg"),
      obraVideoMedia("mitsubishi", "video3.mp4", "mitsubishi/mistubishi_pronto.jpg"),
      obraImageMedia("mitsubishi", "mistubishi_pronto.jpg"),

    ],
  },
  {
    id: 4,
    name: "Galpão para locação em Santana de Paranaíba",
    location: "Santana de Parnaíba, SP",
    category: "Industrial",
    area: "3.859,85 m²",
    year: "2023",
    description: "Galpão desenvolvido para locação em Santana de Parnaíba, executado desde a fundação até os acabamentos finais, com estrutura completa incluindo mezanino e subsolo. O projeto foi concebido para atender às necessidades de empresas que buscam um espaço versátil e funcional para suas operações, oferecendo uma solução eficiente e de alta qualidade para locação industrial.",
    cover: getImage("galpao_santana/fotos/foto1.jpeg"),
    media: [
      videoMedia("locacao_santana", "video8.mp4", "galpao_santana", "foto19.jpeg"),
      imageMedia("galpao_santana", "foto18.jpeg"),
      imageMedia("galpao_santana", "foto17.jpeg"),
      imageMedia("galpao_santana", "foto16.jpeg"),
      videoMedia("locacao_santana", "video7.mp4", "galpao_santana", "foto15.jpeg"),
      imageMedia("galpao_santana", "foto15.jpeg"),
      imageMedia("galpao_santana", "foto14.jpeg"),
      imageMedia("galpao_santana", "foto13.jpeg"),
      videoMedia("locacao_santana", "video6.mp4", "galpao_santana", "foto12.jpeg"),
      videoMedia("locacao_santana", "video5.mp4", "galpao_santana", "foto12.jpeg"),
      videoMedia("locacao_santana", "video4.mp4", "galpao_santana", "foto12.jpeg"),
      imageMedia("galpao_santana", "foto12.jpeg"),
      imageMedia("galpao_santana", "foto11.jpeg"),
      imageMedia("galpao_santana", "foto10.jpeg"),
      imageMedia("galpao_santana", "foto9.jpeg"),
      imageMedia("galpao_santana", "foto8.jpeg"),
      videoMedia("locacao_santana", "video3.mp4", "galpao_santana", "foto7.jpeg"),
      imageMedia("galpao_santana", "foto7.jpeg"),
      imageMedia("galpao_santana", "foto6.jpeg"),
      imageMedia("galpao_santana", "foto5.jpeg"),
      imageMedia("galpao_santana", "foto4.jpeg"),
      videoMedia("locacao_santana", "video2.mp4", "galpao_santana", "foto3.jpeg"),
      imageMedia("galpao_santana", "foto3.jpeg"),
      imageMedia("galpao_santana", "foto2.jpeg"),
      imageMedia("galpao_santana", "foto1.jpeg"),
      videoMedia("locacao_santana", "video1.mp4", "galpao_santana", "foto1.jpeg"),
    ],
  },
];

export const projectCategories = ["Todos", "Logístico", "Industrial", "Comercial"];

export const categoryColors = {
  Logístico: "bg-blue-100 text-blue-800",
  Industrial: "bg-slate-100 text-slate-700",
  Fotovoltaico: "bg-amber-100 text-amber-800",
  Comercial: "bg-emerald-100 text-emerald-800",
};
