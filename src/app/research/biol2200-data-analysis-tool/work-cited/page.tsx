"use client";

import { motion } from "framer-motion";
import ResearchLayout from "@/components/research-layout";

export default function WorksCitedPage() {
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
            Work Cited
          </h1>
        </motion.div>

        {/* References */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose dark:prose-invert max-w-none"
        >
          <div className="max-w-prose mx-auto space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Auchincloss, L. C., Laursen, S. L., Branchaw, J. L., Eagan, K., Graham, M., Hanauer, D. I., Lawrie, G., McLinn, C. M., Pelaez, N., Rowland, S., Towns, M., Trautmann, N. M., Varma-Nelson, P., Weston, T. J., and Dolan, E. L. (2014). Assessment of Course-Based Undergraduate Research Experiences: A Meeting Report. <em>CBE—Life Sciences Education</em>, 13(1):29–40. Publisher: American Society for Cell Biology (lse).
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Bangera, G. and Brownell, S. E. (2014). Course-Based Undergraduate Research Experiences Can Make Scientific Research More Inclusive. <em>CBE—Life Sciences Education</em>, 13(4):602–606. Publisher: American Society for Cell Biology (lse).
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Brownell, S. E., Hekmat-Scafe, D. S., Singla, V., Chandler Seawell, P., Conklin Imam, J. F., Eddy, S. L., Stearns, T., and Cyert, M. S. (2015). A High-Enrollment Course-Based Undergraduate Research Experience Improves Student Conceptions of Scientific Thinking and Ability to Interpret Data. <em>CBE—Life Sciences Education</em>, 14(2):ar21. Publisher: American Society for Cell Biology (lse).
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Buchanan, A. J. and Fisher, G. R. (2022). Current Status and Implementation of Science Practices in Course-Based Undergraduate Research Experiences (CUREs): A Systematic Literature Review. <em>CBE—Life Sciences Education</em>, 21(4):ar83. Publisher: American Society for Cell Biology (lse).
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Chrome Developers (n.d.). Lighthouse overview. <a href="https://developer.chrome.com/docs/lighthouse/overview" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://developer.chrome.com/docs/lighthouse/overview</a>. Accessed: 2025-02-14.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              DeChenne-Peters, S. E. and Scheuermann, N. L. (2022). Faculty Experiences during the Implementation of an Introductory Biology Course-Based Undergraduate Research Experience (CURE). <em>CBE—Life Sciences Education</em>, 21(4):ar70. Publisher: American Society for Cell Biology (lse).
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Fey, S. B., Theus, M. E., and Ramirez, A. R. (2020). Course-based undergraduate research experiences in a remote setting: Two case studies documenting implementation and student perceptions. <em>Ecology and Evolution</em>, 10(22):12528–12541. <a href="https://onlinelibrary.wiley.com/doi/pdf/10.1002/ece3.6916" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://onlinelibrary.wiley.com/doi/pdf/10.1002/ece3.6916</a>.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Gentile, J., Brenner, K., Stephens, A., and Editors (2017). Read &ldquo;Undergraduate Research Experiences for STEM Students: Successes, Challenges, and Opportunities&rdquo; at NAP.edu. National Academies.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Leonetti, C. T., Lindberg, H., Schwake, D. O., and Cotter, R. L. (2021). A Call to Assess the Impacts of Course-Based Undergraduate Research Experiences for Career and Technical Education, Allied Health, and Underrepresented Students at Community Colleges | CBE—Life Sciences Education.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Mills, A., Jaganatha, V., Cortez, A., Guzman, M., Burnette, J. M., Collin, M., Lopez-Lopez, B., Wessler, S. R., Van Norman, J. M., Nelson, D. C., and Rasmussen, C. G. (2021). A Course-Based Undergraduate Research Experience in CRISPR-Cas9 Experimental Design to Support Reverse Genetic Studies in Arabidopsis thaliana. <em>Journal of Microbiology & Biology Education</em>, 22(2):10.1128/jmbe.00155–21. Publisher: American Society for Microbiology.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Sedlacek, Q., Gray, C., Vigil, V., Gonzales, B., and Slown, C. (2022). Professional Learning That Models Components of Course-Based Undergraduate Research Experiences (CUREs).
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Sweat, K. G., Hackney, J. F., and Marshall, P. A. (2025). A course-based undergraduate research experience (CURE) embedded within a summer undergraduate research experience demonstrates value-added benefits. <em>Journal of Microbiology & Biology Education</em>, 0(0):e00192–24. Publisher: American Society for Microbiology.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Vercel (n.d.). Speed insights metrics. <a href="https://vercel.com/docs/speed-insights/metrics" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://vercel.com/docs/speed-insights/metrics</a>. Accessed: 2025-02-14.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Yang, M. A. and Korsnack, K. (2024). Pairing a bioinformatics-focused course-based undergraduate research experience with specifications grading in an introductory biology classroom. <em>Biology Methods and Protocols</em>, 9(1):bpae013.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Zhu, Y., Wang, C., Hanauer, D. I., and Graham, M. J. (2024). Course-based undergraduate research experiences (CUREs) and student interest development: a longitudinal study investigating the roles of challenge, frustration, and meaning making. <em>Studies in Higher Education</em>, pages 1–16. Publisher: SRHE Website.
            </p>
          </div>
        </motion.div>
      </div>
    </ResearchLayout>
  );
} 