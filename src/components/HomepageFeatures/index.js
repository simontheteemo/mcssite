import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "💡 IT Solutions & Consulting",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        <h4>Cloud Infrastructure</h4>
        <small>
          Migrate to the cloud with confidence. We design and implement cloud
          solutions using AWS, Azure, or Google Cloud, ensuring optimal
          performance, security, and cost-effectiveness.{" "}
        </small>
        <br />
        <h4>System Architecture & Design</h4>
        <small>
          Strategic technology planning that aligns with your business goals. We
          analyze your current systems and design scalable architectures that
          support future growth.{" "}
        </small>
        <br />
        <h4>Digital Transformation</h4>
        <small>
          Transform your business processes with modern technology solutions.
          From legacy system modernization to workflow automation, we help you
          stay competitive in the digital age.{" "}
        </small>
        <br />
      </>
    ),
  },
  {
    title: "🚀 Software Development",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        <h4>Custom Software Solutions</h4>
        <small>
          We build tailored software applications that solve your unique
          business challenges. From web applications to desktop software, our
          team delivers scalable, maintainable solutions using modern
          technologies like .NET 8, React, and TypeScript.{" "}
        </small>
        <br />
        <h4>Web & Mobile Applications</h4>
        <small>
          Creating responsive, user-friendly applications that work seamlessly
          across all devices. We specialize in full-stack development, ensuring
          your digital presence is both powerful and intuitive.{" "}
        </small>
        <br />
        <h4>API Development & Integration</h4>
        <small>
          Design and develop robust APIs that connect your systems and enable
          seamless data flow. We ensure secure, scalable integrations that grow
          with your business needs.{" "}
        </small>
        <br />
      </>
    ),
  },
  {
    title: "🎯 Industry Expertise",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        <h4>Enterprise Solutions</h4>
        <small>
          Large-scale applications designed for enterprise environments with
          focus on scalability, security, and integration capabilities.{" "}
        </small>
        <br />
        <h4>Startup Solutions</h4>
        <small>
          Agile, cost-effective solutions perfect for startups and growing
          businesses. MVP development and rapid prototyping to get your ideas to
          market quickly.{" "}
        </small>
        <br />
        <h4>Legacy System Modernization</h4>
        <small>
          Breathe new life into your existing systems. We modernize legacy
          applications while preserving critical business logic and data
          integrity.{" "}
        </small>
        <br />
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
