export const projects = [
  {
    name: "Klover Healthcare",
    links: {
      site: "https://kloverhealthcare.com/",
      git: "https://github.com/ArdalanJaf/klover-health",
      gitBack: "https://github.com/ArdalanJaf/klover-health-api",
    },
    notes: (
      <p className="projectNotes">
        Commissioned site for mental-health assessment service, design brief:
        clear & clean. Features include dynamic appointment time generation,
        integrated Stripe online payments, contact form and admin dashboard for
        client to control mutable properties (appointment availibility, prices,
        contact details and generating payment links).
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
    name: "Tree Planting Simulator API",
    links: {
      // site: "https://carbon-offset-simulator.ardalanjaf.com/",
      git: "https://github.com/ArdalanJaf/trees-to-offset-simulator",
      gitBack: "https://github.com/ArdalanJaf/trees-to-offset-simulator.api",
    },
    notes: (
      <p className="projectNotes">
        Built for a two-day challenge, this simulator allows users to calculate
        how long it will take and how much it will cost to achieve
        carbon-neutrality through planting trees using a scratch-built
        calculator API. Features include admin UI to change calculator settings,
        admin login with middleware security, ability to save and load user
        input, option to add interest rates and testing.
      </p>
    ),
    image: "carbonoffset.png",
    tech: (
      <p className="tech">
        React/Redux | REST | React-hook-form | Recharts |{" "}
        <span style={{ display: "inline-block" }}>Styled-components</span> |
        NodeJS | Jest | SQL
      </p>
    ),
  },
  {
    name: "Dating App",
    links: {
      git: "https://github.com/ArdalanJaf/find-sparks",
      // site: "https://findsparks.ardalanjaf.com/",
      gitBack: "https://github.com/ArdalanJaf/find-sparks-back",
    },
    notes: (
      <p className="projectNotes">
        A mobile dating web-app. Features include full onboarding, messaging,
        multi-user log-in middleware authentification and a unique points-based
        matching algorithm.
      </p>
    ),
    image: "findsparks.png",
    tech: <p className="tech">React/Redux | NodeJS | SQL | Bootstrap</p>,
  },
  // {
  //   name: "Portfolio",
  //   links: {
  //     git: "https://github.com/ArdalanJaf/portfolio",
  //     site: "https://ardalanjaf.com/",
  //     gitBack: "https://github.com/ArdalanJaf/portfolio-back",
  //   },
  //   notes: (
  //     <p className="projectNotes">
  //       <u>This</u> fully-responsive website is designed to feel clean and
  //       smooth but with (my) personality. Includes a JS-based text-animator,
  //       theme toggler and server-side mailer.
  //     </p>
  //   ),
  //   image: "portfolio.png",
  //   tech: <p className="tech">React/Redux | NodeJS | SQL | SASS</p>,
  // },
  // {
  //   name: "Read Easy",
  //   links: {
  //     git: "https://github.com/ArdalanJaf/ReadEasy",
  //     site: "https://ft1-hackathon.netlify.app/",
  //   },
  //   notes: (
  //     <p className="projectNotes">
  //       This app was made in a team of four as part of a hackathon challenge.
  //       The goal was to produce an app in 6 hours to help children learning to
  //       read. Through using a text-to-speech API, users are encouraged to
  //       practice pronunciation.
  //     </p>
  //   ),
  //   image: "readeasy.png",
  //   tech: <p className="tech">React | SASS | GSAP</p>,
  // },
  // {
  //   name: "Weather App",
  //   links: {
  //     git: "https://github.com/ArdalanJaf/weather-app",
  //     site: "https://ardalan-weather-app.netlify.app/",
  //   },
  //   notes: (
  //     <p className="projectNotes">
  //       Fully-responsive weather app that demonstrates my ability to utilise
  //       APIs using REST. It uses openMapGL and open-weather-map to provide an
  //       8-day forecast for anywhere in the world.
  //     </p>
  //   ),
  //   image: "weather.png",
  //   tech: <p className="tech">JS | REST | HTML | SASS</p>,
  // },
  {
    name: "Pixel-Perfect Homage",
    links: {
      git: "https://github.com/ArdalanJaf/homage-nowness",
      site: "https://homage-nowness.netlify.app/",
    },
    notes: (
      <p className="projectNotes">Homage-piece to nowness.com homepage.</p>
    ),
    image: "nowness.png",
    tech: <p className="tech">HTML | SASS</p>,
  },
];
