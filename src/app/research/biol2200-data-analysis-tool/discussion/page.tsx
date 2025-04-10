"use client";

import { motion } from "framer-motion";
import ResearchLayout from "@/components/research-layout";

export default function DiscussionPage() {
  return (
    <ResearchLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Discussion: eDNA Web Tool Development and CURE Integration
          </h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-prose mx-auto">
            Analysis of tool development outcomes and implications for CURE-based education
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose dark:prose-invert max-w-none"
        >
          {/* Performance and Usability Section */}
          <section className="mb-12">
            <div className="max-w-prose mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Performance and Usability
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The development of an interactive, eDNA web-app analysis tool shows that it is feasible and effective to develop a tool adapted to Course-based Undergraduate Research Experiences (CUREs) students and initiatives. Through the integration of modern frameworks, services and libraries, the website performs well across a wide range of devices, with the tool scoring 0.49s to First Contentful Paint (&quot;When the browser renders the first bit of content from the DOM, providing the first feedback to the user that the page is actually loading&quot; (Vercel, nd)), 136ms for Interaction to Next Paint (&quot;a metric that measures the time from when a user interacts with your site to the time the browser renders the next frame in response to that interaction.&quot; (Vercel, nd)) and 2ms for First Input Delay (&quot;measures the time from when a user first interacts with your site (by selecting a link for example) to the time when the browser is able to respond to that interaction&quot; (Vercel, nd)).
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The tool scored 100% on Vercel&apos;s Speed Insight (&quot;@vercel/speed-insights automatically tracks web vitals and other performance metrics for your website&quot;, (Vercel, nd)) and 100% on Lighthouse (&quot;Lighthouse is an open-source, automated tool to help you improve the quality of web pages. It has audits for performance, accessibility, progressive web apps, SEO, and more.&quot; (Chrome Developers, nd)). While the tool provides with strong performance, it also emphasizes usability and accessibility to support a wide range of student users.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Beetlejuice eDNA&apos;s interface was designed to be intuitive, minimizing sensory overload and navigation issues through clear navigation, minimalistic layout, and guided interaction flows. The tool follows responsive design principles, which ensures functionality across different devices and screen sizes, including tablets and smartphones frequently used by students. Furthermore, accessibility considerations were integrated into the development process, such as implementing keyboard navigation, and semantic HTML structure.
              </p>
            </div>
          </section>

          {/* Educational Impact Section */}
          <section className="mb-12">
            <div className="max-w-prose mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Educational Impact and Literature Alignment
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                These performance results align with and support the literature, which has been emphasizing the need for accessible, intuitive tools in Course-based Undergraduate Research Experiences (CUREs), especially in fields such as bioinformatics and data-driven environmental science. Many CURE implementations lack complete engagement with the full scientific research process, especially independent data analysis (Buchanan and Fisher, 2022). Students often struggle with &quot;messy&quot; real-world datasets and require structured, interactive tools to develop scientific reasoning (Zhu et al., 2024).
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Beetlejuice eDNA delivers in fulfilling those gaps with a responsive, user-friendly experience, demonstrating that web-based tools and apps can lower barriers to scientific literacy while supporting students&apos; engagement with authentic scientific research. These findings aligns with the need for inclusive, scalable educational resources that serve student populations in underrepresented settings (Bangera and Brownell, 2014; Leonetti et al., 2021).
              </p>
            </div>
          </section>

          {/* Limitations Section */}
          <section className="mb-12">
            <div className="max-w-prose mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Limitations and Future Directions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                While the preliminary testing of the tool shows that Beetlejuice eDNA has strengths in performance and usability, several limitations must be acknowledged. First, the application was developed and tested in a single institution, primarily among students in that institution, which restricts generalization. This severely limits analyzing how diverse learners interact with the tool, and limits true user experience from the lack formal usability testing or large-scale student feedback.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Secondly, Beetlejuice eDNA&apos;s tool-set is limited to exploratory data analysis, and it does not yet support advanced statistical modeling, hypothesis testing workflows, or automated formative feedback, all of which can be limiting factors in accessibility of full-scale scientific inquiry. Finally, the tool lacks full support of accessibility guidelines of web-development, which remains a future priority for inclusive design.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Future research should focus on evaluating the tool&apos;s impact on student learning outcomes, especially in data literacy, scientific reasoning, and confidence in working with authentic datasets. Further research should also look into exploring the development of similar tools for other scientific disciplines, such as microbiology or genomics, which benefit new types of CURE initiatives.
              </p>
            </div>
          </section>

          {/* Conclusion Section */}
          <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="max-w-prose mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Conclusion
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                In conclusion, the development of a high-performing, accessible eDNA analysis tool demonstrates the viability of implementing interactive, data-driven platforms for CUREs initiatives to enhance student engagement and scientific research experiences. The tool&apos;s successful development addresses key issues shared in the literature, including the need for authentic research experiences, ease of navigating through complex data, and inclusive educational practices. By bridging those gaps, this study contributes to the bigger picture and advocates for the need of a broader integration of bioinformatics and environmental data analysis in CURE initiatives. It opens a new, promising path in creating tools for those experiences.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </ResearchLayout>
  );
} 