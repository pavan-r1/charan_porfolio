import { useEffect, useMemo, useState } from 'react';

const films = [
  {
    title: 'Dinanka 1 (Kannada)',
    poster: '/assets/posters/dinanka-1.jpeg',
    posterAlt: 'Dinanka 1 movie poster',
    desc: 'A boy moves from his hometown to the city to work and support his parents. A journey of responsibility, sacrifice, and purpose.',
    link: 'https://youtu.be/_RtcLJyyU9w?si=5GF5U8xBlXcCYTP8',
  },
  {
    title: 'Ninagagi (Kannada)',
    poster: '/assets/posters/ninagagi.jpeg',
    posterAlt: 'Ninagagi movie poster',
    desc: 'A boy, not serious about studies or career, falls in love and wants to marry. When her parents question his identity, he must prove himself and win their trust.',
    link: 'https://youtu.be/4V3DzrpUOkc?si=QJbn7tzAUw7cxZyu',
  },
  {
    title: 'Raja Rani (Kannada)',
    poster: '/assets/posters/Raja Rani.jpeg',
    posterAlt: 'Raja Rani movie poster',
    desc: 'A young couple marries without informing their parents. Just as they begin a new life, an unexpected situation changes everything.',
    link: 'https://youtu.be/lmL28zEXjQI?si=JZd7JB7EFUEy886L',
  },
  {
    title: 'Kanuvu (Tamil)',
    poster: '/assets/posters/kanavu.jpeg',
    posterAlt: 'Kanuvu movie poster',
    desc: 'A disciplined teacher wants her daughter to earn a degree, but the daughter is passionate about guitar. A story of dreams, conflict, and self-belief.',
    link: 'https://youtu.be/NFY1s5Pu5nw?si=oAUk4OD5TARbu0Nn',
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />

      <header className="site-header">
        <nav className="container nav">
          <a href="#home" className="brand">CHARAN SAI A</a>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
            <li><a href="#films" onClick={closeMobileMenu}>Films</a></li>
            <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
            <li><a href="#education" onClick={closeMobileMenu}>Education</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container reveal">
          <div className="hero-content">
            <p className="eyebrow">✨ Aspiring Director</p>
            <h1 className="hero-title">
              <span className="word-glow">Creating</span> Emotional
              <br />
              <span className="word-accent">Stories</span> Through <span className="word-glow">Cinema</span>
            </h1>
            <p className="hero-text">
              I'm <strong>Charan Sai A</strong>, a passionate storyteller focused on drama and romance. I direct short films under
              <strong> ELP Production</strong> and continuously grow in scriptwriting, visual storytelling, and filmmaking craft.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#films">
                <span>🎬</span> View My Work
              </a>
              <a className="btn btn-download" href="/resume/charan_resume.pdf" download>
                <span>📄</span> Download Resume
              </a>
              <a className="btn btn-secondary" href="#contact">
                <span>💬</span> Contact Me
              </a>
            </div>
          </div>
          <div className="hero-decoration">
            <div className="floating-card card-1">Director</div>
            <div className="floating-card card-2">Storyteller</div>
            <div className="floating-card card-3">Creator</div>
          </div>
        </section>

        <section id="about" className="container section reveal">
          <h2>Profile</h2>
          <p>
            Passionate aspiring film director and storyteller with a strong interest in drama and romance genres.
            Experienced in creating short films through my YouTube channel <strong>ELP Production</strong>, with skills in
            direction, scriptwriting, and visual storytelling. Dedicated to crafting emotionally engaging narratives
            and continuously learning filmmaking techniques. Seeking opportunities to grow as a director and contribute
            creatively to impactful cinematic projects.
          </p>
        </section>

        <section id="films" className="container section reveal">
          <h2>Work Experience & Film Projects</h2>
          <p className="subhead">ELP Production YouTube Channel (2023 – 2026)</p>
          <div className="card-grid">
            {films.map((film) => (
              <article className="card film-card" key={film.title}>
                <img className="film-poster" src={film.poster} alt={film.posterAlt} loading="lazy" />
                <h3>{film.title}</h3>
                <p>{film.desc}</p>
                <a href={film.link} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="container section reveal">
          <h2>Skills</h2>
          <div className="two-col">
            <div className="card">
              <h3>Core Skills</h3>
              <ul className="chip-list">
                <li>Script Writing</li>
                <li>Film Direction (Short Films)</li>
                <li>Visual Storytelling</li>
                <li>Scene Understanding</li>
                <li>Creative Thinking</li>
                <li>Basic Editing (Adobe)</li>
                <li>Basic AI Prompting</li>
                <li>Social Media</li>
              </ul>
            </div>

            <div className="card">
              <h3>Languages</h3>
              <ul className="language-list">
                <li><span>English</span><strong>Fluent</strong></li>
                <li><span>Telugu</span><strong>Fluent</strong></li>
                <li><span>Kannada</span><strong>Fluent</strong></li>
                <li><span>Hindi</span><strong>Intermediate</strong></li>
                <li><span>Tamil</span><strong>Basic</strong></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="container section reveal">
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item card">
              <p className="year">2023 – 2027</p>
              <h3>Bachelor of Engineering (Data Science)</h3>
              <p>T John Institute of Technology</p>
            </div>
            <div className="timeline-item card">
              <p className="year">2021 – 2023</p>
              <h3>Pre-University (PCMB)</h3>
              <p>Akshara PU College</p>
            </div>
          </div>
        </section>

        <section id="contact" className="container section reveal">
          <h2>Contact</h2>
          <div className="contact-grid">
            <a className="card contact-card" href="tel:+918317465714">📞 +91 83174 65714</a>
            <a className="card contact-card" href="mailto:charancherry1702@gmail.com">✉️ charancherry1702@gmail.com</a>
            <div className="card contact-card">📍 Jigani, Bengaluru, Karnataka</div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>© {currentYear} Charan Sai A • Aspiring Director</p>
      </footer>
    </>
  );
}

export default App;
