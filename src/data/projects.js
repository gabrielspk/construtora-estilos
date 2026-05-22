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

const obraImages = (folder, images) =>
  images.map((image) => getImage(`${folder}/${image}`)).filter(Boolean);

export const projects = [
  {
    id: 1,
    name: "Galpão logístico cliente Vasco",
    location: "Bom Jesus dos Perdões, SP",
    category: "Logístico",
    area: "3.525,85 m²",
    year: "2026",
    description: "Galpão logístico pré-moldado desenvolvido com estrutura de alto desempenho, executado desde a fundação até a montagem completa da estrutura, cobertura e acabamentos. Projeto concebido para máxima eficiência operacional, armazenagem estratégica e agilidade logística, garantindo resistência estrutural, otimização de espaço e alto padrão construtivo.",
    cover: getImage("vasco/foto1_exterior_pronto.jpg"),
    images: obraImages("vasco", [
      "foto1_exterior_pronto.jpg",
      "foto1_terraplanagem.jpg",
      "foto1_estrutura.jpg",
      "foto2_montagem.jpg",
      "foto3_montagem.jpg",
      "foto4_montagem.jpg",
      "foto5_montagem.jpg",
      "foto6_montagem.jpg",
      "foto1_interno_pronto.jpg",
      "foto2_interno_pronto.jpg",
      "foto3_interno_pronto.jpg",
    ]),
  },
  {
    id: 2,
    name: "Galpão comercial cliente Iveparts",
    location: "São Paulo, SP",
    category: "Comercial",
    area: "2.591,15	m²",
    year: "2021",
    description: "Galpão comercial executado para o cliente Iveparts, contemplando montagem estrutural, acabamentos e entrega completa das áreas internas e externas. O projeto possui Subsolo 1, Subsolo 2 e cobertura técnica, evidenciando a complexidade e robustez da obra executada.",
    cover: getImage("iveparts/iveparts_total.jpg"),
    presentation: {
      imageMode: "panoramic",
    },
    images: obraImages("iveparts", [
      "iveparts_foto5_montagem.jpg",
      "iveparts_foto7_montagem.jpg",
      "iveparts_foto1_interno_completo.jpg",
      "iveparts_foto2_interno_completo.jpg",
      "iveparts_foto3_interno_completo.jpg",
      "iveparts_foto4_interno_completo.jpg",
      "iveparts_foto5_interno_completo.jpg",
      "iveparts_foto6_interno_completo.jpg",
      "iveparts_foto1_externo_completo.jpg",
      "iveparts_foto2_externo_completo.jpg",
      "iveparts_foto3_externo_completo.jpg",
      "iveparts_total.jpg"
    ]),
  },
  {
    id: 3,
    name: "Obra cliente Mitsubishi",
    location: "Atibaia, SP",
    category: "Industrial",
    area: "12.160,00 m²",
    year: "2024",
    description: "Galpão logístico-industrial desenvolvido para a Mitsubishi Chemical em Atibaia, com foco em sustentabilidade, eficiência operacional e conforto térmico. O projeto conquistou a certificação internacional LEED Gold (USGBC), utilizando soluções inteligentes de iluminação e ventilação natural com telhas translúcidas e venezianas em policarbonato. Com pé-direito de 12 metros, a obra foi destaque nacional em 2024, conquistando o 2º lugar entre os melhores galpões logísticos industriais do Brasil.",
    cover: getImage("mitsubishi/mistubishi_pronto.jpg"),
    images: obraImages("mitsubishi", [
      "mitsubishi_planta_foto1.jpg",
      "mitsubishi_montagem_foto1.jpg",
      "mitsubishi_montagem_foto2.jpg",
      "mitsubishi_montagem_foto3.jpg",
      "mistubishi_montagem_foto4.jpg",
      "mitsubishi_montagem_foto5.jpg",
      "mitsubishi_montagem_foto6.jpg",
      "mitsubishi_montagem_foto7.jpg",
      "mitsubishi_montagem_foto8.jpg",
      "mitsubishi_montagem_foto9.jpg",
      "mitsubishi_montagem_foto10.jpg",
      "mitsubishi_interno_foto1.jpg",
      "mistubishi_pronto.jpg",
    ]),
  },

];

export const projectCategories = ["Todos", "Logístico", "Industrial", "Comercial"];

export const categoryColors = {
  Logístico: "bg-blue-100 text-blue-800",
  Industrial: "bg-slate-100 text-slate-700",
  Fotovoltaico: "bg-amber-100 text-amber-800",
  Comercial: "bg-emerald-100 text-emerald-800",
};
