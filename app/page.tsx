const services = [
  {
    title: "Business Hosting",
    description:
      "Fast, secure website hosting designed for growing businesses.",
  },
  {
    title: "Managed WordPress",
    description:
      "Optimised WordPress hosting with updates, security and backups managed.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Modern, scalable infrastructure engineered for reliability and growth.",
  },
  {
    title: "DevOps Services",
    description:
      "Automation, CI/CD and cloud engineering services for technical teams.",
  },
];

const principles = [
  "Security built in by default",
  "Modern, high-performance infrastructure",
  "Clear and transparent services",
  "Support from people who understand technology",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 font-bold text-white">
              H
            </div>

            <span className="text-xl font-semibold tracking-tight">
              HarpyHost
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-white/30 hover:bg-white/5"
          >
            Talk to us
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 text-center lg:px-8 lg:pb-32 lg:pt-32">
            <div className="mx-auto mb-7 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              UK cloud technology, built by engineers
            </div>

            <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Cloud infrastructure.
              <span className="block text-blue-400">
                Engineered properly.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Secure hosting, managed cloud services and modern infrastructure
              for businesses that value reliability, performance and expert
              support.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#services"
                className="rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-400"
              >
                Explore our services
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold transition hover:border-white/30 hover:bg-white/5"
              >
                Contact HarpyHost
              </a>
            </div>

            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:grid-cols-4">
              <div>Secure by default</div>
              <div>Modern infrastructure</div>
              <div>Transparent service</div>
              <div>Engineering-led support</div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="border-y border-white/10 bg-white/[0.025]"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Our services
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Technology your business can depend on.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                HarpyHost combines dependable hosting with modern cloud
                engineering to give businesses a platform they can trust.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-white/10 bg-slate-900/70 p-7 transition hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-300">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-semibold">{service.title}</h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400"
                  >
                    Learn more
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Why HarpyHost
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built differently from traditional hosting providers.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                We are building HarpyHost around engineering quality rather
                than confusing packages, hidden extras or short-term
                discounts.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-400">
                Our goal is simple: give customers technology they do not need
                to worry about.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8">
              <p className="text-sm font-medium text-slate-400">
                Our engineering principles
              </p>

              <div className="mt-6 space-y-5">
                {principles.map((principle) => (
                  <div key={principle} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-sm text-blue-300">
                      ✓
                    </div>
                    <p className="text-slate-200">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-400/20 bg-blue-500/10 px-6 py-16 text-center sm:px-12">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Building something that needs reliable technology?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              HarpyHost is currently preparing for launch. Get in touch to
              discuss hosting, cloud infrastructure or managed technology
              services.
            </p>

            <a
              href="mailto:hello@harpyhost.com"
              className="mt-8 inline-flex rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              hello@harpyhost.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 HarpyHost. All rights reserved.</p>
          <p>Cloud infrastructure. Engineered properly.</p>
        </div>
      </footer>
    </div>
  );
}