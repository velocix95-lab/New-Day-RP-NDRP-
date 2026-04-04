import React from 'react';

export default function AyanPortfolio() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');

            :root {
              --font-display: 'Instrument Serif', serif;
              --font-body: 'Inter', sans-serif;
              --background: 201 100% 13%;
              --foreground: 0 0% 100%;
              --muted-foreground: 215 12% 76%;
              --panel: 210 22% 10%;
              --line: 0 0% 100%;
            }

            html {
              scroll-behavior: smooth;
            }

            body {
              margin: 0;
              min-height: 100vh;
              background:
                radial-gradient(circle at top, rgba(39, 131, 191, 0.28), transparent 35%),
                linear-gradient(180deg, #02131f 0%, #041e30 55%, #02131f 100%);
              color: hsl(var(--foreground));
              font-family: var(--font-body);
              -webkit-font-smoothing: antialiased;
              text-rendering: optimizeLegibility;
            }

            * {
              box-sizing: border-box;
            }

            a {
              color: inherit;
              text-decoration: none;
            }

            .font-display {
              font-family: var(--font-display);
            }

            .liquid-glass {
              background: rgba(255, 255, 255, 0.03);
              background-blend-mode: luminosity;
              backdrop-filter: blur(14px);
              -webkit-backdrop-filter: blur(14px);
              border: 1px solid rgba(255, 255, 255, 0.08);
              box-shadow:
                inset 0 1px 1px rgba(255, 255, 255, 0.12),
                0 24px 60px rgba(0, 0, 0, 0.18);
              position: relative;
              overflow: hidden;
              transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
            }

            .liquid-glass::before {
              content: '';
              position: absolute;
              inset: 0;
              border-radius: inherit;
              padding: 1.2px;
              background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.42) 0%,
                rgba(255, 255, 255, 0.14) 18%,
                rgba(255, 255, 255, 0) 40%,
                rgba(255, 255, 255, 0) 62%,
                rgba(255, 255, 255, 0.12) 82%,
                rgba(255, 255, 255, 0.32) 100%
              );
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              pointer-events: none;
            }

            .liquid-glass:hover {
              background: rgba(255, 255, 255, 0.05);
              border-color: rgba(255, 255, 255, 0.14);
            }

            @keyframes fade-rise {
              from {
                opacity: 0;
                transform: translateY(24px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-fade-rise {
              animation: fade-rise 0.8s ease-out both;
            }

            .animate-fade-rise-delay {
              animation: fade-rise 0.8s ease-out 0.2s both;
            }

            .animate-fade-rise-delay-2 {
              animation: fade-rise 0.8s ease-out 0.4s both;
            }

            @media (prefers-reduced-motion: reduce) {
              html {
                scroll-behavior: auto;
              }

              .animate-fade-rise,
              .animate-fade-rise-delay,
              .animate-fade-rise-delay-2 {
                animation: none;
              }

              .liquid-glass {
                transition: none;
              }
            }
          `,
        }}
      />

      <main className="relative min-h-screen w-full overflow-x-hidden selection:bg-white/20">
        <div className="fixed inset-0 z-0 h-full w-full pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 z-10 bg-black/45" />
          <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top,rgba(69,183,255,0.22),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.26))]" />
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 z-0 h-full w-full object-cover"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <nav className="relative z-20 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-8">
          <div className="text-3xl tracking-tight font-display text-white">
            Ayan<sup className="text-xs">®</sup>
          </div>

          <div className="hidden items-center gap-8 text-sm text-[hsl(var(--muted-foreground))] md:flex">
            <a href="#about" className="text-white transition-colors hover:text-white">
              About
            </a>
            <a href="#skills" className="transition-colors hover:text-white">
              Skills
            </a>
            <a href="#gaming" className="transition-colors hover:text-white">
              Gaming
            </a>
            <a
              href="https://discord.gg/toky0"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              Discord
            </a>
          </div>

          <a
            href="#about"
            className="liquid-glass hidden rounded-full px-6 py-2.5 text-sm text-white hover:scale-[1.03] sm:block"
          >
            Who am I
          </a>

          <div className="flex w-full gap-3 overflow-x-auto pb-1 text-sm text-white/85 md:hidden">
            <a href="#about" className="liquid-glass rounded-full px-4 py-2 whitespace-nowrap">
              About
            </a>
            <a href="#skills" className="liquid-glass rounded-full px-4 py-2 whitespace-nowrap">
              Skills
            </a>
            <a href="#gaming" className="liquid-glass rounded-full px-4 py-2 whitespace-nowrap">
              Gaming
            </a>
            <a
              href="https://discord.gg/toky0"
              target="_blank"
              rel="noreferrer"
              className="liquid-glass rounded-full px-4 py-2 whitespace-nowrap"
            >
              Discord
            </a>
          </div>
        </nav>

        <section className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 pb-40 pt-24 text-center sm:pt-32">
          <div className="liquid-glass mb-8 rounded-full px-5 py-2 text-xs uppercase tracking-[0.32em] text-white/75 animate-fade-rise">
            Design. Systems. Motion.
          </div>

          <h1 className="max-w-7xl font-display text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-white animate-fade-rise sm:text-7xl md:text-8xl">
            Where creativity rises
            <br />
            <em className="not-italic text-[hsl(var(--muted-foreground))]">through the logic.</em>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[hsl(var(--muted-foreground))] animate-fade-rise-delay sm:text-lg">
            I&apos;m an 18-year-old college student navigating life between two jobs, the soccer pitch, and the gym.
            Amid the chaos, I build digital spaces, shape brand aesthetics, and engineer automated workflows. Moderator
            at Tokyo.
          </p>

          <a
            href="#about"
            className="liquid-glass mt-12 inline-flex items-center gap-2 rounded-full px-12 py-4 text-base text-white animate-fade-rise-delay-2 hover:scale-[1.03]"
          >
            Explore My World
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </section>

        <section id="about" className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2">
          <div id="skills" className="liquid-glass rounded-3xl p-8 text-left md:p-12">
            <h2 className="mb-6 font-display text-4xl text-white">The Arsenal</h2>
            <div className="space-y-6 text-[hsl(var(--muted-foreground))]">
              <div>
                <strong className="mb-2 block text-white">Creative & Technical</strong>
                <p>
                  Advanced Photoshop, AI photo generation, brand advertisement design, web development and design,
                  and workflow automation.
                </p>
              </div>
              <div>
                <strong className="mb-2 block text-white">Life Outside the Screen</strong>
                <p>
                  Balancing college life and two jobs. Passionate about soccer, weightlifting, cars, traveling, gaming, and
                  music, even when time gets tight.
                </p>
              </div>
              <div>
                <strong className="mb-2 block text-white">Community</strong>
                <p>
                  Proud moderator of the{' '}
                  <a href="https://discord.gg/toky0" className="text-white underline underline-offset-4 hover:opacity-80">
                    Tokyo Discord Server
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div id="gaming" className="liquid-glass flex h-full flex-col rounded-3xl p-8 text-left md:p-12">
            <h2 className="mb-6 font-display text-4xl text-white">The Backlog</h2>

            <div className="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 border-b border-white/10 pb-2 text-sm uppercase tracking-widest text-white/80">
                  Multiplayer & Co-op
                </h3>
                <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
                  <li>Fortnite</li>
                  <li>CS2 / CS:GO</li>
                  <li>Rocket League</li>
                  <li>FiveM (GTA RP)</li>
                  <li>BeamMP</li>
                  <li>Among Us</li>
                  <li>Roblox</li>
                  <li>Ready or Not</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 border-b border-white/10 pb-2 text-sm uppercase tracking-widest text-white/80">
                  Story & Simulators
                </h3>
                <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
                  <li>Grand Theft Auto V & Vice City</li>
                  <li>Red Dead Redemption 2</li>
                  <li>God of War: Ragnarök</li>
                  <li>Hogwarts Legacy</li>
                  <li>WWE 2K25</li>
                  <li>BeamNG.drive</li>
                  <li>Havendock</li>
                  <li>Food Processing Simulator</li>
                  <li>Banker Simulator</li>
                  <li>SYMMETRY</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative z-10 mt-12 border-t border-white/5 py-8 text-center text-sm text-[hsl(var(--muted-foreground))]">
          <p>© {new Date().getFullYear()} Ayan. Designed for the quiet rebels.</p>
        </footer>
      </main>
    </>
  );
}
