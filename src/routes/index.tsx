import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { n: "01", title: "Fisioterapia Respiratória", tag: "Atendimento CTI", desc: "Atuação especializada no cuidado de pacientes críticos, com foco na prevenção de complicações, recuperação funcional, reabilitação respiratória e motora." },
  { n: "02", title: "Ortopédica & Desportiva", tag: "Atletas & Ativos", desc: "Prevenção de lesões, recuperação funcional e aprimoramento do desempenho físico, auxiliando o retorno seguro às atividades." },
  { n: "03", title: "Fisioterapia Neurológica", tag: "AVC · Parkinson", desc: "Tratamento especializado para recuperar funcionalidade e independência de pacientes com sequelas neuromotoras." },
  { n: "04", title: "Saúde do Idoso", tag: "Envelhecer bem", desc: "Cuidado integral do idoso, promovendo movimento, segurança e qualidade de vida em todas as fases do envelhecimento." },
  { n: "05", title: "Acupuntura", tag: "Terapia integrativa", desc: "Técnicas tradicionais para modulação da dor, controle de processos inflamatórios, redução do estresse e equilíbrio sistêmico." },
  { n: "06", title: "Trabalho & Ergonomia", tag: "Saúde ocupacional", desc: "Avaliação e intervenção voltadas à saúde ocupacional, prevenção de lesões e adequação ergonômica em ambientes de trabalho." },
];

const testimonials = [
  { name: "Alexandre", role: "Fisioterapia Neurológica", text: "Me respeitou como pessoa e mesmo com dois meses de internamento, me ajudou muito a fazer com que a depressão ficasse longe. Obrigado pelo apoio, um cuidado efetivo. Que Deus te abençoe e te guarde, sempre." },
  { name: "Kauanny", role: "Atendimento CTI", text: "Eu lhe agradeço muito, dia 22/07 fez um ano da minha alta e do dia em que consegui caminhar com sua ajuda. Deus te abençoe grandiosamente — seu trabalho e sua humanidade fazem a diferença. Serei eternamente grata." },
  { name: "Carlos", role: "Paciente pós-COVID", text: "Só tenho a agradecer — se não fosse sua atenção, cuidado e dedicação talvez eu nem estaria aqui hoje. Que Deus te abençoe imensamente e que você continue prestando esse serviço maravilhoso." },
];

const stats = [
  { value: "5.700+", label: "Pacientes atendidos" },
  { value: "23", label: "Anos de trajetória" },
  { value: "100%", label: "Satisfação" },
  { value: "12", label: "Especialidades" },
];

const specializations = [
  "Acupuntura",
  "Fisioterapia em Terapia Intensiva",
  "Fisioterapia Desportiva",
  "Fisioterapia do Trabalho e Ergonomia",
  "Gestão Hospitalar e Serviços de Saúde",
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const nav = [
    { id: "manifesto", label: "Manifesto" },
    { id: "praticas", label: "Práticas" },
    { id: "sobre", label: "Sobre" },
    { id: "vozes", label: "Vozes" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between py-4">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-serif-display text-2xl md:text-3xl italic text-primary">Fisio</span>
            <span className="font-serif-display text-2xl md:text-3xl text-ink">Saúde</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm tracking-wide uppercase text-foreground/70 hover:text-primary transition-colors"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contato")}
              className="text-sm tracking-wide uppercase px-5 py-2.5 bg-foreground text-background hover:bg-primary transition-colors"
            >
              Agendar
            </button>
          </div>
          <button
            className="md:hidden text-2xl text-foreground"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="block w-full text-left px-6 py-4 border-b border-border text-foreground/80"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contato")}
              className="block w-full text-center px-6 py-4 bg-foreground text-background uppercase tracking-wide text-sm"
            >
              Agendar consulta
            </button>
          </div>
        )}
      </nav>

      {/* HERO — editorial split with asymmetric grid */}
      <header id="inicio" className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7 animate-fade-up">
            <div className="flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-10 bg-primary" />
              <span>Belo Horizonte · desde 2001</span>
            </div>
            <h1 className="font-serif-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-ink">
              O movimento
              <br />
              é o caminho de
              <br />
              <em className="text-primary font-normal">volta a si.</em>
            </h1>
            <p className="mt-10 max-w-lg text-lg md:text-xl text-foreground/70 leading-relaxed">
              Fisioterapia que vai até você — cuidado especializado para
              recuperar movimentos, autonomia e qualidade de vida, com um olhar
              humano em cada consulta.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("contato")}
                className="px-8 py-4 bg-foreground text-background text-sm uppercase tracking-widest hover:bg-primary transition-colors"
              >
                Agende sua avaliação
              </button>
              <button
                onClick={() => scrollTo("praticas")}
                className="px-8 py-4 border border-foreground text-foreground text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
              >
                Ver práticas
              </button>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-8">
            <div className="relative aspect-[3/4] bg-gradient-warm overflow-hidden shadow-editorial">
              <div className="absolute inset-0 flex items-center justify-center text-background/40 text-8xl">
                ✦
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-background/10 backdrop-blur border-t border-background/20">
                <div className="text-xs uppercase tracking-widest text-background/70">CREFITO</div>
                <div className="font-serif-display text-2xl text-background mt-1">Nº 54341-F</div>
              </div>
              <div className="absolute top-6 right-6 text-xs uppercase tracking-widest text-background/80 rotate-90 origin-top-right">
                Retrato · sua foto aqui
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="font-serif-display italic text-2xl text-primary">"</span>
              <span>Um cuidado que atravessa gerações e histórias.</span>
            </div>
          </div>
        </div>

        {/* stat strip */}
        <div className="max-w-7xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-border">
          {stats.map((s) => (
            <div key={s.label} className="py-8 px-2 md:px-6 border-r last:border-r-0 border-border">
              <div className="font-serif-display text-4xl md:text-5xl text-ink">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* MANIFESTO — big pull quote */}
      <section id="manifesto" className="py-24 md:py-36 px-6 md:px-10 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs uppercase tracking-[0.4em] text-background/50 mb-10">Manifesto ·  §01</div>
          <p className="font-serif-display text-3xl md:text-5xl leading-tight text-background">
            Cada corpo carrega uma história. A fisioterapia começa quando alguém
            se dispõe a ouvir essa história antes de tocar —{" "}
            <em className="text-primary">com paciência, técnica e presença</em>.
          </p>
          <div className="mt-16 flex items-center gap-4">
            <span className="h-px w-16 bg-primary" />
            <span className="text-sm uppercase tracking-widest text-background/70">
              Renato — 23 anos de prática clínica
            </span>
          </div>
        </div>
      </section>

      {/* PRÁTICAS — numbered editorial list */}
      <section id="praticas" className="py-24 md:py-32 px-6 md:px-10 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
            <div className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Práticas ·  §02</div>
              <h2 className="font-serif-display text-5xl md:text-6xl text-ink leading-none">
                Seis modos de<br />
                <em className="text-primary">cuidar</em>.
              </h2>
            </div>
            <p className="md:col-span-6 md:col-start-7 text-lg text-foreground/70 leading-relaxed">
              Tratamentos personalizados que combinam avaliação criteriosa,
              técnicas atualizadas e um planejamento terapêutico único para
              cada pessoa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-2">
            {services.map((s, i) => (
              <article
                key={s.n}
                className="group border-t border-border py-8 md:py-10 flex gap-6 hover:pl-4 transition-all duration-500"
                style={{ borderBottom: i === services.length - 1 || i === services.length - 2 ? "1px solid var(--color-border)" : undefined }}
              >
                <div className="font-serif-display text-3xl italic text-primary shrink-0 w-14">{s.n}</div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{s.tag}</div>
                  <h3 className="font-serif-display text-2xl md:text-3xl text-ink mb-3 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-6 border-y border-border bg-muted overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 pr-12">
              {["Movimento", "Autonomia", "Presença", "Cuidado", "Escuta", "Reabilitação", "Humanidade", "Técnica"].map((w) => (
                <span key={w} className="font-serif-display italic text-3xl text-ink/60 flex items-center gap-12">
                  {w}
                  <span className="text-primary text-xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SOBRE */}
      <section id="sobre" className="py-24 md:py-36 px-6 md:px-10 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] bg-secondary/40 relative overflow-hidden shadow-editorial">
              <div className="absolute inset-0 flex items-center justify-center text-foreground/20 text-8xl">
                ❦
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-xs uppercase tracking-widest text-foreground/60">
                Retrato do profissional
              </div>
            </div>
          </div>
          <div className="md:col-span-7 md:pl-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Sobre ·  §03</div>
            <h2 className="font-serif-display text-4xl md:text-6xl text-ink leading-tight mb-8">
              Um olhar <em className="text-primary">empático</em> a quem confia
              na sua recuperação.
            </h2>
            <div className="space-y-5 text-foreground/75 text-lg leading-relaxed">
              <p>
                Com <strong className="text-ink">23 anos de dedicação</strong>{" "}
                à Fisioterapia, desenvolvo um trabalho voltado à recuperação
                funcional, prevenção de limitações e promoção da qualidade de
                vida.
              </p>
              <p>
                Minha trajetória é marcada pela busca constante de conhecimento
                e pela integração de diferentes áreas da saúde, permitindo um
                olhar amplo e individualizado sobre cada paciente.
              </p>
              <p>
                Formado pela <em>Universidade Positivo</em> (Curitiba/PR), com
                pós-graduação em cinco especialidades:
              </p>
            </div>

            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8">
              {specializations.map((sp, i) => (
                <li
                  key={sp}
                  className="flex items-baseline gap-3 py-3 border-b border-border text-foreground/85"
                >
                  <span className="font-serif-display italic text-primary text-sm w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{sp}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => scrollTo("contato")}
              className="mt-10 px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-foreground transition-colors"
            >
              Agende uma avaliação
            </button>
          </div>
        </div>
      </section>

      {/* VOZES / TESTIMONIALS */}
      <section id="vozes" className="py-24 md:py-36 px-6 md:px-10 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Vozes ·  §04</div>
            <h2 className="font-serif-display text-5xl md:text-6xl text-ink leading-none">
              O que fica nas <em className="text-primary">memórias</em> de quem
              passou por aqui.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <blockquote
                key={t.name}
                className="bg-background p-8 md:p-10 border border-border relative"
              >
                <span className="font-serif-display text-8xl italic text-primary/30 leading-none absolute -top-2 left-6">
                  "
                </span>
                <p className="relative font-serif-display text-xl italic text-ink leading-relaxed mb-8 mt-6">
                  {t.text}
                </p>
                <footer className="border-t border-border pt-5 flex items-baseline justify-between">
                  <div>
                    <div className="font-serif-display text-xl text-ink">{t.name}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                      {t.role}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    №{String(i + 1).padStart(2, "0")}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 md:py-36 px-6 md:px-10 bg-foreground text-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Contato ·  §05
            </div>
            <h2 className="font-serif-display text-5xl md:text-6xl leading-none mb-8">
              Comece sua<br />
              <em className="text-primary">recuperação</em><br />
              hoje.
            </h2>
            <p className="text-background/70 text-lg leading-relaxed mb-10">
              Primeira avaliação sem compromisso. Atendimento domiciliar e
              consultório em Belo Horizonte.
            </p>
            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-background/50 mb-1">Endereço</div>
                <div className="font-serif-display text-2xl">Belo Horizonte — MG</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-background/50 mb-1">Horários</div>
                <div className="font-serif-display text-2xl">Seg – Sex · 7h às 18h</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-background/50 mb-1">WhatsApp</div>
                <a
                  href="https://wa.me/5531991337130"
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif-display text-2xl text-primary hover:underline"
                >
                  (31) 9 9133-7130
                </a>
              </div>
            </div>
          </div>

          <form
            className="md:col-span-7 md:pl-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Mensagem enviada! Entraremos em contato em breve.");
            }}
          >
            {[
              { label: "Nome completo", type: "text", ph: "Como podemos te chamar" },
              { label: "Telefone / WhatsApp", type: "tel", ph: "(31) 9 0000-0000" },
              { label: "E-mail", type: "email", ph: "seu@email.com" },
              { label: "Prática de interesse", type: "text", ph: "Ex: Fisioterapia Neurológica" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-xs uppercase tracking-widest text-background/60 mb-2">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.ph}
                  required
                  className="w-full bg-transparent border-b border-background/30 py-3 text-lg text-background placeholder:text-background/30 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs uppercase tracking-widest text-background/60 mb-2">
                Mensagem (opcional)
              </label>
              <textarea
                rows={3}
                placeholder="Descreva brevemente sua queixa ou dúvida..."
                className="w-full bg-transparent border-b border-background/30 py-3 text-lg text-background placeholder:text-background/30 focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full md:w-auto px-10 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors"
            >
              Enviar e agendar consulta →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 md:px-10 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-baseline gap-2">
            <span className="font-serif-display text-xl italic text-primary">Fisio</span>
            <span className="font-serif-display text-xl text-ink">Saúde</span>
          </div>
          <div className="flex gap-8 text-xs uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="https://wa.me/5531991337130" className="hover:text-primary transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-primary transition-colors">Google</a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2025 FisioSaúde · CREFITO 54341-F
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5531991337130"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl shadow-editorial hover:scale-110 transition-transform"
      >
        ✆
      </a>
    </div>
  );
}
