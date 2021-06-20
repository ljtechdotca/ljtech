import { Landing } from "@components/landing/Landing";
import { Meta } from "@components/meta/Meta";
import { Pricing } from "@components/pricing/Pricing";
import { Services } from "@components/services/Services";
import styles from "@styles/Home.module.scss";

const ljtechPlans = [
  {
    name: "Hobby",
    price: 899,
    services: ["Domain Name Services", "SSL/TLS Certificate", "Web Hosting"],
  },
  {
    name: "Business",
    price: 1699,
    services: [
      "Includes Hobby",
      "Blog Content",
      "Dark/Light Mode",
      "Monthly Analytic Report",
      "Search Engine Optimization",
    ],
  },
  {
    name: "Enterprise",
    price: "POA",
    services: [
      "Includes Business",
      "Content Management System",
      "Database Integration",
      "User Authentication",
    ],
  },
];

const ljtechGlossary = [
  {
    id: "dns",
    name: "Domain Name Services",
    description: "Managing domain name registration and DNS settings.",
  },
  {
    id: "tls",
    name: "SSL/TLS Certificate",
    description:
      "Securing website connections through cryptographic protocols.",
  },
  {
    id: "host",
    name: "Web Hosting",
    description: "Providing access and storage space for websites.",
  },
  {
    id: "blog",
    name: "Blog Platform",
    description:
      "Manage and publish new content for websites in the form of a blog.",
  },
  {
    id: "mode",
    name: "Dark/Light Mode",
    description: "Changes the color scheme of the user interface.",
  },
  {
    id: "report",
    name: "Monthly Analytic Report",
    description:
      "Evaluate website bounce rate, traffic and more through monthly reports.",
  },
  {
    id: "seo",
    name: "Search Engine Optimization",
    description:
      "Finely tuned meta data that helps increase ranking on search engines.",
  },
  {
    id: "cms",
    name: "Content Management System",
    description: "Manage creation and modification of digital content.",
  },
  {
    id: "data",
    name: "Database Integration",
    description:
      "Aggregating information from multiple sources into a single unified view.",
  },
  {
    id: "user",
    name: "User Authentication",
    description: "Authenticate and register users through sign-in providers.",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta />
      <Landing />
      <Pricing plans={ljtechPlans} />
      <Services glossary={ljtechGlossary} />
    </div>
  );
}
