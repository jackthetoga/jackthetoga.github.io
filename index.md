---
layout: default
title: Home
---

<section class="hero">
  <h1>Jack White</h1>
  <p>Computer Science & AI — systems, ML engineering, and quantitative tooling.</p>
  <div class="links" aria-label="Profiles">
    <a href="https://github.com/jackthetoga" rel="me">GitHub</a>
    <a href="https://www.linkedin.com/in/zizizink" rel="me">LinkedIn</a>
    <a href="mailto:white942@purdue.edu">Email</a>
  </div>
</section>

<section id="projects" aria-labelledby="projects-heading">
  <h2 id="projects-heading">Selected Projects</h2>
  <div class="grid">
    {% for p in site.data.projects %}
      <article class="card">
        <h3>{{ p.title }}</h3>
        {% if p.blurb %}<p>{{ p.blurb }}</p>{% endif %}
        {% if p.chips %}
          <div class="chips">
            {% for c in p.chips %}<span class="chip">{{ c }}</span>{% endfor %}
          </div>
        {% endif %}
        {% if p.links %}
          <div class="actions">
            {% for l in p.links %}
              <a class="btn" href="{{ l.href }}">{{ l.label }}</a>
            {% endfor %}
          </div>
        {% endif %}
      </article>
    {% endfor %}
  </div>
</section>

<section id="resume" class="resume" aria-labelledby="resume-heading" style="margin-top:28px;">
  <div>
    <h2 id="resume-heading" style="margin:0 0 6px;">Resume</h2>
    <p style="margin:0; color:var(--muted);">One-page PDF; includes selected work, research, coursework, and awards.</p>
  </div>
  <a class="btn" href="/resume.pdf">Download PDF</a>
</section>

<section id="contact" style="margin-top:28px;">
  <h2>Contact</h2>
  <p>Best way to reach me is <a href="mailto:white942@purdue.edu">email</a>. I’m open to roles in ML engineering, platform, and infra.</p>
</section>

