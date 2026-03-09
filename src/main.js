import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="site-frame">
    <div class="desktop-layout">
      <header class="desktop-header">
        <a class="brand-chip" href="#" data-scroll="hero">Yang Fei</a>
        <nav class="desktop-nav">
          <button type="button" data-scroll="hero">Hero</button>
          <button type="button" data-scroll="missions">Project History</button>
          <button type="button" data-scroll="contact">Contact</button>
        </nav>
        <button class="hire-button" type="button" data-scroll="contact">Hire Me</button>
      </header>

      <main class="desktop-main">
        <section class="hero-panel" data-section="hero">
          <div class="hero-copy">
            <div class="eyebrow-chip">Class 5 Developer</div>
            <h1>
              <span>The Dev Hero:</span>
              <strong>Yang Fei!</strong>
            </h1>
            <p>
              Unleashing high-performance code and impactful digital experiences across
              the digital universe!
            </p>
            <div class="hero-actions">
              <button class="primary-action" type="button" data-scroll="missions">View Projects</button>
              <button class="secondary-action" type="button" data-scroll="contact">Contact Me</button>
            </div>
          </div>

          <div class="hero-visual">
            <div class="hero-poster-shadow"></div>
            <div class="hero-poster">
              <div class="portrait-stage">
                <img class="hero-photo" src="/yang-fei-photo.png" alt="Portrait of Yang Fei" />
              </div>
              <div class="poster-caption">
                <h2>Yang Fei</h2>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </section>

        <section class="desktop-missions" data-section="missions">
          <div class="mission-title">Project History</div>
          <div class="project-feature-wrap">
            <article class="project-feature-card">
              <a class="project-preview" href="https://yangfei077-cyber-bad-news.vercel.app/" target="_blank" rel="noreferrer">
                <img src="/bad-news-screenshot.png" alt="Biuble Bad News website screenshot" />
                <span class="project-preview-tag">Live Preview</span>
              </a>

              <div class="project-feature-copy">
                <div class="mission-card-top project-feature-top">
                  <h3>Biuble Bad News</h3>
                  <span>Project 01</span>
                </div>
                <p class="mission-role">Gender Violence News Analysis Site</p>
                <p class="project-feature-description">
                  Gender Violence News Analysis Site that ran through fine tuned AI model that
                  based on the essay I wrote myself.
                </p>
                <div class="project-stack-list">
                  <span>Next.js 16</span>
                  <span>Tailwind CSS</span>
                  <span>Prisma</span>
                  <span>SQLite</span>
                  <span>Python</span>
                  <span>httpx</span>
                  <span>feedparser</span>
                  <span>newspaper3k</span>
                  <span>Fine-tuned GPT-4o-mini</span>
                </div>
                <div class="project-link-row">
                  <a href="https://yangfei077-cyber-bad-news.vercel.app/" target="_blank" rel="noreferrer">Visit Site</a>
                  <a href="https://github.com/yangfei077-cyber/bad-news" target="_blank" rel="noreferrer">View GitHub</a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section class="contact-terminal" data-section="contact">
          <div class="terminal-topbar">
            <span></span>
            <p>Secret Hero Comms Terminal</p>
          </div>
          <div class="terminal-grid">
            <div class="terminal-copy">
              <h2>Get in <span>Touch!</span></h2>
              <p>
                If you want to talk about a role, project, or collaboration, reach me
                directly through the channels below.
              </p>
              <div class="terminal-contact-list">
                <div><span>@</span><p>yangfei077@gmail.com</p></div>
                <div><span>G</span><p>github.com/yangfei077-cyber</p></div>
                <div><span>in</span><p>linkedin.com/in/yangfei123</p></div>
              </div>
            </div>

            <div class="contact-actions-panel">
              <p class="contact-panel-label">Direct Channels</p>
              <a href="mailto:yangfei077@gmail.com" class="contact-action-card">
                <strong>Email</strong>
                <span>yangfei077@gmail.com</span>
              </a>
              <a href="https://github.com/yangfei077-cyber" target="_blank" rel="noreferrer" class="contact-action-card">
                <strong>GitHub</strong>
                <span>Open profile</span>
              </a>
              <a href="https://www.linkedin.com/in/yangfei123/" target="_blank" rel="noreferrer" class="contact-action-card">
                <strong>LinkedIn</strong>
                <span>View profile</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer class="desktop-footer">
        <div class="footer-brand">
          <span></span>
          <p>Yang Fei <strong>2026</strong></p>
        </div>
        <p class="footer-note">To be continued...</p>
      </footer>
    </div>

    <div class="mobile-layout">
      <header class="mobile-header">
        <a class="mobile-brand" href="#" data-scroll="mobile-hero">Yang Fei</a>
        <button class="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div class="mobile-menu" hidden>
        <button type="button" data-scroll="mobile-hero">Hero</button>
        <button type="button" data-scroll="mobile-projects">Project History</button>
        <button type="button" data-scroll="mobile-contact">Contact</button>
      </div>

      <main class="mobile-main">
        <section class="mobile-hero" data-section="mobile-hero">
          <div class="mobile-portrait-card">
            <div class="avatar-sheet">
              <img class="mobile-profile-photo" src="/yang-fei-photo.png" alt="Portrait of Yang Fei" />
              <p>Dev. Hero Vibes</p>
            </div>
          </div>

          <div class="mobile-copy">
            <h1>Yang Fei</h1>
            <p>
              Full-stack AI engineer and digital craftsman, building bold interfaces and
              fast products.
            </p>
            <div class="mobile-actions">
              <button type="button" class="primary-action" data-scroll="mobile-projects">View Portfolio</button>
              <button type="button" class="secondary-action" data-scroll="mobile-contact">Contact</button>
            </div>
          </div>
        </section>

        <section class="mobile-projects" data-section="mobile-projects">
          <div class="mobile-section-title red-accent">
            <h2>Project History</h2>
            <span></span>
          </div>
          <div class="mobile-project-list">
            <article class="project-card featured-mobile-project">
              <img class="mobile-project-thumb" src="/bad-news-screenshot.png" alt="Biuble Bad News website screenshot" />
              <span class="project-badge">Project 01</span>
              <h3>Biuble Bad News</h3>
              <p>
                Gender Violence News Analysis Site that ran through fine tuned AI model that
                based on the essay I wrote myself.
              </p>
              <div class="project-stack-list mobile-project-stack">
                <span>Next.js</span>
                <span>Tailwind</span>
                <span>Prisma</span>
                <span>SQLite</span>
                <span>Python</span>
                <span>GPT-4o-mini</span>
              </div>
              <div class="project-console">
                <span>status: deployed</span>
                <span>analysis: fine-tuned ai</span>
                <span>lang: en / zh</span>
              </div>
              <div class="project-link-row mobile-project-links">
                <a href="https://yangfei077-cyber-bad-news.vercel.app/" target="_blank" rel="noreferrer">Visit</a>
                <a href="https://github.com/yangfei077-cyber/bad-news" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </article>
          </div>
        </section>

        <section class="mobile-terminal" data-section="mobile-contact">
          <div class="terminal-topbar">
            <span></span>
            <p>contact@yangfei</p>
          </div>
          <div class="mobile-terminal-body">
            <p class="terminal-prompt">/contact</p>
            <p class="terminal-lines">Reach me directly through email, GitHub, or LinkedIn.</p>
            <a href="mailto:yangfei077@gmail.com" class="mobile-contact-card">
              <strong>Email</strong>
              <span>yangfei077@gmail.com</span>
            </a>
            <a href="https://github.com/yangfei077-cyber" target="_blank" rel="noreferrer" class="mobile-contact-card">
              <strong>GitHub</strong>
              <span>github.com/yangfei077-cyber</span>
            </a>
            <a href="https://www.linkedin.com/in/yangfei123/" target="_blank" rel="noreferrer" class="mobile-contact-card">
              <strong>LinkedIn</strong>
              <span>linkedin.com/in/yangfei123</span>
            </a>
          </div>
        </section>
      </main>

      <footer class="mobile-footer">
        <div class="mobile-footer-line">
          <span class="mobile-footer-note">Yang Fei 2026</span>
          <span class="mobile-footer-note">To Be Continued...</span>
        </div>
      </footer>
    </div>
  </div>
`

const scrollButtons = document.querySelectorAll('[data-scroll]')
const menuToggle = document.querySelector('.menu-toggle')
const mobileMenu = document.querySelector('.mobile-menu')

scrollButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    const target = button.getAttribute('data-scroll')
    const section = document.querySelector(`[data-section="${target}"]`)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    if (mobileMenu && menuToggle) {
      mobileMenu.hidden = true
      menuToggle.setAttribute('aria-expanded', 'false')
    }
  })
})

menuToggle?.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isExpanded))
  if (mobileMenu) {
    mobileMenu.hidden = isExpanded
  }
})
