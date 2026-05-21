import footerLogo from "../assets/brand/logo/logo.jpg";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/construtoraestilos",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://x.com/ConstrutoraEst2?lang=pt-br",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/construtoraestilos",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@jh1construtora",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/valdeneis-jesus-de-lima-08a4b9103/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const contactInfo = [
  {
    label: "Endereço",
    value: "Av. Tenente Marques, 1250\nCajamar — SP",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 shrink-0 mt-0.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    href: "https://www.google.com/maps/search/?api=1&query=Avenida+Tenente+Marques+1250+Cajamar+SP",
  },
  {
    label: "Telefone",
    value: "(11) 2777-7240",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 shrink-0 mt-0.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    href: "tel:+551127777240",
  },
  {
    label: "E-mail",
    value: "contato@construtoraestilos.com.br",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 shrink-0 mt-0.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    href: "mailto:contato@construtoraestilos.com.br",
  },
];

// Free embed — no API key needed
const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Avenida+Tenente+Marques+1250+Cajamar+SP+Brasil&t=&z=16&ie=UTF8&iwloc=&output=embed";

const MAPS_OPEN_URL =
  "https://www.google.com/maps/search/?api=1&query=Avenida+Tenente+Marques+1250+Cajamar+SP";

export default function Footer() {
  return (
    <footer className="bg-[#002150] px-5 pt-14 pb-0 lg:px-10 overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* ── Top bar: Logo + Nav ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/10">
          <img
            src={footerLogo}
            alt="Construtora Estilos"
            className="h-14 w-auto max-w-[150px] rounded-md object-contain sm:h-16 sm:max-w-[165px]"
          />
          <nav className="flex flex-wrap justify-center gap-6">
            {["Sobre", "Serviços", "Obras", "Clientes", "Contato"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white/45 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* ── Main grid: Info (left) + Map (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">

          {/* Left: Contact + Social */}
          <div className="flex flex-col justify-between gap-10 lg:pr-12 lg:border-r border-white/10">

            {/* Contact info */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5b9bd5] mb-6">
                Fale Conosco
              </p>
              <ul className="flex flex-col gap-5">
                {contactInfo.map(({ label, value, icon, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-3.5"
                    >
                      <span className="text-[#5b9bd5] group-hover:text-white transition-colors duration-200">
                        {icon}
                      </span>
                      <span className="text-sm text-white/55 group-hover:text-white/90 transition-colors duration-200 whitespace-pre-line leading-relaxed">
                        {value}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social media */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5b9bd5] mb-5">
                Redes Sociais
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map(({ name, href, icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="
                      flex items-center gap-2 px-3.5 py-2 rounded
                      border border-white/10
                      text-white/40 hover:text-white
                      hover:border-[#5b9bd5]/50 hover:bg-[#5b9bd5]/10
                      transition-all duration-200 text-xs font-medium
                    "
                  >
                    {icon}
                    <span>{name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="flex flex-col">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5b9bd5] mb-5">
              Nossa Localização
            </p>

            {/* Map card */}
            <div className="relative flex-1 rounded-xl overflow-hidden border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">

              {/* Top fade overlay for brand blending */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-[#002150]/50 to-transparent z-10" />

              <iframe
                title="Localização Construtora Estilos"
                src={MAPS_EMBED_URL}
                width="100%"
                height="280"
                style={{
                  border: 0,
                  display: "block",
                  filter: "saturate(0.65) contrast(1.08) brightness(0.8)",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Footer bar inside the map card */}
              <div className="flex items-center justify-between gap-4 px-4 py-3 bg-[#001838]/95 backdrop-blur-sm border-t border-white/10">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="relative flex shrink-0 h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5b9bd5] opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5b9bd5]" />
                  </span>
                  <p className="text-xs text-white/50 truncate">
                    Av. Tenente Marques, 1250 — Cajamar, SP
                  </p>
                </div>
                <a
                  href={MAPS_OPEN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    shrink-0 flex items-center gap-1.5
                    text-xs font-medium text-[#5b9bd5] hover:text-white
                    border border-[#5b9bd5]/30 hover:border-white/25
                    px-3 py-1.5 rounded
                    transition-all duration-200
                  "
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Abrir no Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-6 border-t border-white/10 text-xs text-white/25">
          <p>© 2026 Construtora Estilos. Todos os direitos reservados.</p>
          <p>Engenharia, construção e confiança.</p>
        </div>

      </div>
    </footer>
  );
}
