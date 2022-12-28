export const projects = [
  {
    name: "Klover Healthcare",
    links: {
      site: "https://klover-demo.ardalanjaf.com/",
      git: "https://github.com/ArdalanJaf/klover-health",
      gitBack: "https://github.com/ArdalanJaf/klover-health-api",
    },
    notes: (
      <p className="projectNotes">
        Commissioned site for mental-health assessment service. Features include
        dynamic appointment time generation, integrated Stripe online payments,
        contact form, fully-responsive and{" "}
        <a href="https://klover-demo.ardalanjaf.com/admin">admin interface</a>{" "}
        for client to control time slots, pricing, contact details and create
        payment links.
      </p>
    ),
    image: "klover.png",
    tech: (
      <p className="tech">
        React/Redux | Bootstrap | Stripe API | NodeJS | SQL
      </p>
    ),
  },
  {
    name: "Carbon-Offset Simulator",
    links: {
      site: "https://carbon-offset-simulator.ardalanjaf.com/",
      git: "https://github.com/ArdalanJaf/Carbon-Offset-Calculator",
      gitBack: "https://github.com/ArdalanJaf/API-Carbon-Offset-Calculator",
    },
    notes: (
      <p className="projectNotes">
        This simulator allows users to calculate how long it will take and how
        much it will cost to achieve carbon-neutrality using a scratch-built
        calculator API. Features include admin UI (top-left cog icon),
        full-responsivity and fully screen-reader friendly.
      </p>
    ),
    image: "carbonoffset.png",
    tech: (
      <p className="tech">
        React/Redux | React-hook-form | Recharts |{" "}
        <span style={{ display: "inline-block" }}>Styled-components</span> |
        NodeJS | SQL
      </p>
    ),
  },
  {
    name: "Find Sparks",
    links: {
      git: "https://github.com/ArdalanJaf/find-sparks",
      site: "https://findsparks.ardalanjaf.com/",
      gitBack: "https://github.com/ArdalanJaf/find-sparks-back",
    },
    notes: (
      <p className="projectNotes">
        A mobile dating web-app created in team of four. Features include full
        onboarding, messaging, multi-user log-in middleware authentification and
        a unique points-based matching algorithm.
        <br /> Demo login: 'a@a.com' / 'password'
      </p>
    ),
    image: "findsparks.png",
    tech: <p className="tech">React/Redux | NodeJS | SQL | Bootstrap</p>,
  },
  {
    name: "Portfolio",
    links: {
      git: "https://github.com/ArdalanJaf/portfolio",
      site: "https://ardalanjaf.com/",
      gitBack: "https://github.com/ArdalanJaf/portfolio-back",
    },
    notes: (
      <p className="projectNotes">
        <u>This</u> fully-adaptive website is designed to feel clean and smooth
        but with (my) personality. Includes a JS-based text-animator, theme
        toggler and server-side mailer.
      </p>
    ),
    image: "portfolio.png",
    tech: <p className="tech">React/Redux | NodeJS | SQL | SASS</p>,
  },
  {
    name: "Read Easy",
    links: {
      git: "https://github.com/ArdalanJaf/ReadEasy",
      site: "https://ft1-hackathon.netlify.app/",
    },
    notes: (
      <p className="projectNotes">
        This app was made in a team of four as part of a hackathon challenge.
        The goal was to produce an app in 6 hours to help children learning to
        read. Through using a text-to-speech API, users are encouraged to
        practice pronunciation.
      </p>
    ),
    image: "readeasy.png",
    tech: <p className="tech">React | JS | SASS | GSAP</p>,
  },
  {
    name: "Weather App",
    links: {
      git: "https://github.com/ArdalanJaf/weather-app",
      site: "https://ardalan-weather-app.netlify.app/",
    },
    notes: (
      <p className="projectNotes">
        Fully-responsive weather app that demonstrates my ability to utilise
        APIs using REST. It uses openMapGL and open-weather-map to provide an
        8-day forecast for anywhere in the world.
      </p>
    ),
    image: "weather.png",
    tech: <p className="tech">JS | REST | HTML | SASS</p>,
  },
  {
    name: "Nowness Homage",
    links: {
      git: "https://github.com/ArdalanJaf/homage-nowness",
      site: "https://homage-nowness.netlify.app/",
    },
    notes: (
      <p className="projectNotes">
        Fully-responsive homage-piece of nowness.com, made with pure HTML and
        CSS to showcase my ability to create any design required.
      </p>
    ),
    image: "nowness.png",
    tech: <p className="tech">HTML | SASS</p>,
  },
];
