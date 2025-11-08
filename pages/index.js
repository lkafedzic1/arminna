import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Systemic Constellations | Transform Your Life</title>
        <meta
          name="description"
          content="Transform your life through systemic constellation work. Discover clarity, healing, and meaningful change."
        />
        <meta name="author" content="Systemic Constellations" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles/main.css" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' font-weight='bold' fill='%23C9A0A0'>S</text></svg>"
        />
        <script defer src="/_vercel/insights/script.js"></script>
      </Head>

      {/* Header */}
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <a href="#home" className="logo-link">
              <span className="logo-text">Systemic Constellations</span>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="nav-list">
              <li>
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="nav-link">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="nav-link">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link nav-link--cta">
                  Book a Session
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero__content">
            <h1 className="hero__title">
              Transform Your Life Through Systemic Constellation Work
            </h1>
            <p className="hero__subtitle">
              Unlock hidden patterns, heal relationships, and discover your path
              forward with compassionate, evidence-based guidance.
            </p>
            <div className="hero__consultant">
              <h3 className="consultant__name">Armina Kafedzic-Briga</h3>
              <p className="consultant__credentials">
                <strong>Systemic Constellation Master, WSCO</strong>
                <br />
                NLP-Practitioner with high ethics and quality standards of the
                World Systematic Constellation Organisation (WSCO)
              </p>
              <p className="consultant__description">
                An <em>experienced</em>, <em>compassionate</em>, and{" "}
                <em>intuitive</em> business consultant who brings{" "}
                <em>wisdom</em>, <em>clarity</em>, and{" "}
                <em>transformative insight</em> to every session. Known for her{" "}
                <em>professional excellence</em>, <em>empathetic approach</em>,
                and <em>results-driven methodology</em>.
              </p>
              <div className="consultant__languages">
                <p>
                  <strong>Languages:</strong> Bosnian • English • German
                </p>
              </div>
            </div>
            <a href="#contact" className="button button--primary">
              Start Your Journey
            </a>
          </div>
          <div className="hero__image">
            <img
              src="/images/Armina_portrait.jpg"
              alt="Armina Kafedzic-Briga - Systemic Constellation Master"
              className="hero__img"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="about__container">
            <div className="about__content">
              <h2 className="section-title">
                What is Systemic Constellation Work?
              </h2>
              <p className="about__text">
                Systemic Constellations is a powerful, evidence-based
                therapeutic approach that reveals and resolves hidden patterns
                within families, organizations, and relationships. By creating a
                visual representation of your system, we uncover limiting
                beliefs and unconscious dynamics that may be holding you back.
              </p>
              <p className="about__text">
                This transformative work brings awareness, healing, and
                resolution—often creating profound shifts in perspective and
                life direction.
              </p>
              <h3 className="about__subheading">
                Why Choose Systemic Constellations?
              </h3>
              <ul className="about__benefits">
                <li className="benefit-item">
                  Rapid insight into root causes of recurring challenges
                </li>
                <li className="benefit-item">
                  Heal family and relational patterns
                </li>
                <li className="benefit-item">
                  Gain clarity on career and life direction
                </li>
                <li className="benefit-item">
                  Experience lasting transformation
                </li>
              </ul>
            </div>
            <div className="about__credentials">
              <h3 className="about__subheading">About Your Guide</h3>
              <p className="about__credential-text">
                Certified Systemic Constellation Master with
                <strong> 15+ years of experience</strong> working with
                individuals and organizations across diverse backgrounds.
              </p>
              <p className="about__credential-text">
                Dedicated to creating a safe, compassionate space where deep
                healing and transformation can occur.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="services__container">
            <h2 className="section-title">Our Services</h2>
            <p className="services__intro">
              Tailored constellation work designed to meet your unique needs and
              goals.
            </p>
            <div className="services__grid">
              <article className="service-card">
                <h3 className="service-card__title">Individual Sessions</h3>
                <p className="service-card__description">
                  One-on-one constellation work focused on your personal
                  challenges, relationships, and life direction. Perfect for
                  those seeking deep, personalized guidance.
                </p>
                <a href="#contact" className="service-card__link">
                  Learn More →
                </a>
              </article>
              <article className="service-card">
                <h3 className="service-card__title">Group Constellations</h3>
                <p className="service-card__description">
                  Experience the power of witnessing others' work while gaining
                  insights for your own journey. A supportive community setting
                  for exploration and healing.
                </p>
                <a href="#contact" className="service-card__link">
                  Learn More →
                </a>
              </article>
              <article className="service-card">
                <h3 className="service-card__title">Workshops & Training</h3>
                <p className="service-card__description">
                  Immersive experiences to deepen your understanding of systemic
                  work. Ideal for personal development and professional
                  practitioners.
                </p>
                <a href="#contact" className="service-card__link">
                  Learn More →
                </a>
              </article>
              <article className="service-card">
                <h3 className="service-card__title">
                  Corporate & Team Constellations
                </h3>
                <p className="service-card__description">
                  Resolve team dynamics, improve communication, and align
                  organizational systems for greater effectiveness and harmony.
                </p>
                <a href="#contact" className="service-card__link">
                  Learn More →
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="process">
          <div className="process__container">
            <h2 className="section-title">How It Works</h2>
            <p className="process__intro">
              A clear, supportive journey from your first inquiry to lasting
              transformation.
            </p>
            <div className="process__steps">
              <div className="process-step">
                <div className="process-step__number">01</div>
                <h3 className="process-step__title">Initial Consultation</h3>
                <p className="process-step__description">
                  We discuss your situation, challenges, and goals. This
                  confidential conversation helps us understand what you're
                  seeking and determine the best approach.
                </p>
              </div>
              <div className="process-step">
                <div className="process-step__number">02</div>
                <h3 className="process-step__title">Set Your Intention</h3>
                <p className="process-step__description">
                  Together, we clarify the specific issue or pattern you want to
                  explore. A clear intention opens the door to powerful
                  insights.
                </p>
              </div>
              <div className="process-step">
                <div className="process-step__number">03</div>
                <h3 className="process-step__title">The Constellation</h3>
                <p className="process-step__description">
                  Using representatives or imagery, we map your system and
                  explore the hidden dynamics. The experience often brings
                  immediate clarity and perspective shifts.
                </p>
              </div>
              <div className="process-step">
                <div className="process-step__number">04</div>
                <h3 className="process-step__title">
                  Integration & Reflection
                </h3>
                <p className="process-step__description">
                  You integrate the insights and shifts into your daily life. We
                  discuss practical steps and next actions to support your
                  transformation.
                </p>
              </div>
              <div className="process-step">
                <div className="process-step__number">05</div>
                <h3 className="process-step__title">Follow-Up & Support</h3>
                <p className="process-step__description">
                  Ongoing support ensures sustainable change. Many clients
                  schedule follow-up sessions to deepen their work or explore
                  new challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials">
          <div className="testimonials__container">
            <h2 className="section-title">Transformations That Matter</h2>
            <p className="testimonials__intro">
              Hear from clients who've experienced profound shifts through
              systemic constellation work.
            </p>
            <div className="testimonials__grid">
              <blockquote className="testimonial">
                <p className="testimonial__quote">
                  "After years of therapy, the constellation work gave me in one
                  session what I couldn't access before. I finally understand my
                  relationship patterns and feel equipped to move forward."
                </p>
                <footer className="testimonial__footer">
                  <strong className="testimonial__name">Sarah M.</strong>
                  <span className="testimonial__context">
                    Relationship & Personal Growth
                  </span>
                </footer>
              </blockquote>
              <blockquote className="testimonial">
                <p className="testimonial__quote">
                  "Our team brought our organizational challenges to
                  constellation work. The shift in communication and
                  collaboration has been remarkable. I'd recommend this for any
                  leadership team."
                </p>
                <footer className="testimonial__footer">
                  <strong className="testimonial__name">James K.</strong>
                  <span className="testimonial__context">
                    Corporate Team Lead
                  </span>
                </footer>
              </blockquote>
              <blockquote className="testimonial">
                <p className="testimonial__quote">
                  "I came uncertain and skeptical. What I experienced was
                  undeniable. My perspective on my family situation completely
                  shifted, and I left with clarity and peace."
                </p>
                <footer className="testimonial__footer">
                  <strong className="testimonial__name">Emma L.</strong>
                  <span className="testimonial__context">
                    Family Systems Work
                  </span>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="cta">
          <div className="cta__container">
            <div className="cta__content">
              <h2 className="cta__title">Ready to Transform Your Life?</h2>
              <p className="cta__text">
                Take the first step toward clarity, healing, and meaningful
                change. Book your initial consultation today.
              </p>
              <div className="cta__buttons">
                <a
                  href="mailto:hello@example.com"
                  className="button button--primary"
                >
                  Schedule Your Session
                </a>
                <a href="tel:+1234567890" className="button button--secondary">
                  Call Us
                </a>
              </div>
              <p className="cta__note">
                First consultation: <strong>30 minutes, complimentary</strong>{" "}
                to discuss your goals and how we can help.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__content">
            <div className="footer__section">
              <h4 className="footer__heading">Systemic Constellations</h4>
              <p className="footer__text">
                Transforming lives through compassionate, evidence-based
                systemic work.
              </p>
            </div>
            <div className="footer__section">
              <h4 className="footer__heading">Quick Links</h4>
              <ul className="footer__links">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#process">Process</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer__section">
              <h4 className="footer__heading">Contact</h4>
              <p className="footer__text">
                <a href="mailto:hello@example.com">hello@example.com</a>
                <br />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
            </div>
            <div className="footer__section">
              <h4 className="footer__heading">Follow</h4>
              <ul className="footer__social">
                <li>
                  <a href="#" aria-label="LinkedIn">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Instagram">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Facebook">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__copyright">
              &copy; 2025 Systemic Constellations. All rights reserved.
            </p>
            <ul className="footer__legal">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
