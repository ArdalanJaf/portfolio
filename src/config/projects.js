export const projects = [
  {
    name: "Carbon-Offset Simulator",
    links: {
      site: "https://carbon-offset-simulator.ardalanjaf.com/",
      git: "https://github.com/ArdalanJaf/Carbon-Offset-Calculator",
      gitBack: "https://github.com/ArdalanJaf/API-Carbon-Offset-Calculator",
    },
    notes:
      "This simulator allows users to calculate how long it will take and how much it will cost to achieve carbon-neutrality. Features include admin UI to change calculator configuration (top-left cog icon), full-responsivity and fully screen-reader friendly.",
    image: "carbonoffset.png",
    tech: "Node.js | React | Redux | react-hook-form | recharts | styled-components | Express | SQL",
  },
  {
    name: "Find Sparks",
    links: {
      git: "https://github.com/ArdalanJaf/find-sparks",
      site: "https://findsparks.ardalanjaf.com/",
      gitBack: "https://github.com/ArdalanJaf/find-sparks-back",
    },
    notes: (
      <p>
        A dating app created to showcase front and back-end abilities. Features
        include multi-user log-in middleware authentification and a unique
        points-based matching algorithm.
        <br /> Demo login: email='a@a.com', password='password'
      </p>
    ),
    image: "findsparks.png",
    tech: "React | Redux | Node.js | REST | SQL | Bootstrap",
  },
  {
    name: "ReadEasy",
    links: {
      git: "https://github.com/ArdalanJaf/ReadEasy",
      site: "https://ft1-hackathon.netlify.app/",
    },
    notes:
      "This app was made in a team of four as part of a hackathon challenge. The goal was to produce an app in 6 hours to help children learning to read. Through using a text-to-speech API, users are encouraged to practice pronunciation.",
    image: "readeasy.png",
    tech: "React | REST | JS | SASS | GSAP ",
  },
  {
    name: "Weather App",
    links: {
      git: "https://github.com/ArdalanJaf/weather-app",
      site: "https://ardalan-weather-app.netlify.app/",
    },
    notes:
      "Fully-responsive weather app that demonstrates my ability to utilise APIs using REST. It uses openMapGL and open-weather-map to provide an 8-day forecast for anywhere in the world.",
    image: "weather.png",
    tech: "JS | REST | HTML | SASS",
  },
  {
    name: "Nowness Homage",
    links: {
      git: "https://github.com/ArdalanJaf/homage-nowness",
      site: "https://homage-nowness.netlify.app/",
    },
    notes:
      "Fully-responsive homage-piece of nowness.com, made with pure HTML and CSS to showcase my ability to create any design required.",
    image: "nowness.png",
    tech: "HTML | SASS",
  },
];
