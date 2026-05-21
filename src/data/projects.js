const obraImageModules = import.meta.glob("../assets/obras/mitsubishi/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const getImage = (path) => {
  const image = obraImageModules[`../assets/obras/mitsubishi/${path}`];

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

];

export const projectCategories = ["Todos", "Logístico", "Industrial", "Comercial"];

export const categoryColors = {
  Logístico: "bg-blue-100 text-blue-800",
  Industrial: "bg-slate-100 text-slate-700",
  Fotovoltaico: "bg-amber-100 text-amber-800",
  Comercial: "bg-emerald-100 text-emerald-800",
};
