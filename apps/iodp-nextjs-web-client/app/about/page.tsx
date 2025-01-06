import { Tile, WebPage } from "@/components/base";
import styles from "./about.module.scss";

const AboutPage = () => {
  return (
    <WebPage className={styles["about-page"]} title="About Me">
      <Tile>
        {/* Software Philosophy Section */}
        <section className={styles.section}>
          <h2>My Software Philosophy</h2>
          <ol>
            <h3>
              1. <strong>Focus on User-Centered Design</strong>
            </h3>
            <p>
              Every project I work on starts with the end-user in mind. Whether
              it's crafting intuitive interfaces with ReactJS or ensuring
              workflows align with user needs, I believe software should empower
              people and simplify their tasks. My goal is always to deliver
              solutions that are not only functional but also a joy to use.
            </p>

            <h3>
              2. <strong>Embrace Modern Workflows</strong>
            </h3>
            <p>
              I thrive on modernizing development workflows to improve
              efficiency and reliability. From transitioning repositories to
              CircleCI for streamlined releases to advocating for scalable
              solutions, I prioritize practices that save time and reduce
              friction in the development lifecycle. This allows teams to focus
              on building great products.
            </p>

            <h3>
              3. <strong>Build for Scalability and Maintainability</strong>
            </h3>
            <p>
              Great software is not just about meeting immediate requirements;
              it's about laying a foundation that supports growth. I prioritize
              clean, modular code and robust architecture to ensure that the
              software I build can evolve with the needs of the business and its
              users.
            </p>

            <h3>
              4. <strong>Collaboration and Teamwork</strong>
            </h3>
            <p>
              Software development is a team effort. I value open communication
              and actively seek feedback to ensure that my solutions align with
              the goals of the team. Whether mentoring junior developers or
              contributing to cross-functional discussions, I believe
              collaboration drives innovation.
            </p>

            <h3>
              5. <strong>Continuous Learning and Improvement</strong>
            </h3>
            <p>
              Technology evolves quickly, and I believe in evolving with it.
              From exploring new libraries and frameworks to refining existing
              practices, I am committed to staying informed and applying the
              best tools for the job. This ensures I bring value not only to my
              current projects but also to the teams and organizations I work
              with.
            </p>

            <h3>
              6. <strong>Practical Problem-Solving</strong>
            </h3>
            <p>
              Every project comes with its challenges, and I take pride in
              finding practical, effective solutions. Whether it's resolving
              legacy system issues or integrating complex APIs, I approach
              problems with patience, analysis, and a focus on achieving
              tangible results.
            </p>
          </ol>
        </section>

        <hr />

        {/* What Drives Me Section */}
        <section className={styles.section}>
          <h2>What Drives Me</h2>
          <p>
            I am passionate about creating software that makes a difference.
            From enabling seamless workflows for teams to delivering exceptional
            user experiences, my work is driven by a desire to solve problems
            and create value. By blending technical expertise with a commitment
            to collaboration and quality, I strive to contribute to meaningful
            and impactful projects.
          </p>
        </section>

        <hr />

        {/* Outside of Work Section */}
        <section className={styles.section}>
          <h2>Outside of Work</h2>
          <p>
            When I’m not coding, I enjoy exploring hobbies that keep me balanced
            and energized. Whether it’s diving into a great wrestling match as a
            WWE fan, experimenting with new recipes in the kitchen, tackling DIY
            projects around the house, catching Philadelphia Eagles games on
            YouTubeTV, immersing myself in the world of Elden Ring, or blogging
            about what I’m learning in my career and as a new homeowner, I love
            activities that challenge and inspire me. These moments of
            creativity and focus outside of work help me bring fresh
            perspectives to the software I build.
          </p>
        </section>
      </Tile>
    </WebPage>
  );
};

export default AboutPage;
