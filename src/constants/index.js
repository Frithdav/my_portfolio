import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  excel,
  powerbi,
  python,
  gbhl,
  gcb,
  html,
  css,
  database,
  system,
  bi,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  yii,
  threejs,
  jobit,
  carrent,
  tripguide,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Business & Data Analysis",
    icon: mobile,
  },
  {
    title: "System Development",
    icon: web,
  },
  {
    title: "Database Modelling",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Power Bi",
    icon: powerbi,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "PHP",
    icon: yii,
  },
];

const experiences = [
  {
    title: "Business Data Analysis",
    company_name: "Grain Bulk Handlers Ltd",
    icon: gbhl,
    iconBg: "#383E56",
    date: "Nov 2021 - Present",
    points: [
      "Data collection, data pre-processing and data quality assurance.",
      "Prepared dashboards and reports which effectively communicate insights on key business units.",
      "Data Visualization, Data Storytelling and Report Interpretation highlighting key business unit insights.",
      "Participated in development of shipping model which aided in forecasting the workforce needs of daily Terminal operations using python.",
      "Facilitated business, stakeholder and solutions requirements elicitation and prioritization.",
      "	Automated mobile weighers PLC and HMI data collection via API and deployed locally for analysis.",
      "Developed and implemented Workforce Management System which helped the company manage contracted labour and ensured seamless billing of the contractors.",
      "Developed Silo Process Flow System which automated manual Silo maintenance procedures.",
      "Performed UAT on Terminal Operation Systems to ensure business and solution requirements are met.",
    ],
  },

  {
    title: "Data Analyst",
    company_name: "Gold Crown Beverages",
    icon: gcb,
    iconBg: "#E6DEDD",
    date: "March 2021 - October 20212",
    points: [
      "Conducted market research to comprehend performance of products and determine products which needed promotion.",
      "	Performed churn analysis which helped tailor incentives to different customers group.",
      "Preformed data pre-processing and ETL, data manipulation, visualization and data interpretation.",
      "Preformed statistical analysis; regression analysis and forecasting to determine the trend and predict the likelihood of customers purchases.",
      "Prepared dashboards and reports which informed strategic decision making.",
      "Automated data ETL from MS Nav ERP, data analysis & storytelling using Power Query and Excel for storytelling.",
      "Devised data collection procedure which facilitated customers (start-ups) data capture and location mapping.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Frith proved me wrong.",
    name: "Mose Omiti",
    designation: "Business Process Analyst",
    company: "Grain Bulk handlers Ltd",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Frith does.",
    name: "Ali Abdulqadir",
    designation: "Database Engineer",
    company: "Grain Bulk handlers Ltd",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Frith optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Andrew Muleke",
    designation: "DevOPs & Cluod Engineer",
    company: "Grain Bulk handlers Ltd",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Labour App",
    description:
      "Web-based Workforce Management System which helped the company manage contracted labour and ensured seamless billing of the contractors.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Yii",
        color: "orange-text-gradient",
      },
      {
        name: "mariadb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap 4",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/grainbulk/Labor-App",
  },
  {
    name: "Silo Process flow",
    description:
      "Documented the Manual silo maintenance process flow. Then collaborated with ERP team in automating the process",
    tags: [
      {
        name: "Ifs ERP",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "IXON API ",
    description:
      "Extration of weighers data via API and storing in local database.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "cURL",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/grainbulk/ixon",
  },
  {
    name: "Last Mile",
    description:
      "Logistics tracking system which monitors the gross weight of grains from source and client destination.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Yii2",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/grainbulk/lastmile",
  },
];

export { services, technologies, experiences, testimonials, projects };
