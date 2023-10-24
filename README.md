# [HackHavard Project]
## Inspiration

In the exciting world of hackathons, where innovation meets determination, **participants like ourselves often ask "Has my idea been done before?"** While originality is the cornerstone of innovation, there's a broader horizon to explore - the evolution of an existing concept. Through our AI-driven platform, hackers can gain insights into the uniqueness of their ideas. By identifying gaps or exploring similar projects' functionalities, participants can aim to refine, iterate, or even revolutionize existing concepts, ensuring that their projects truly stand out.

For **judges, the evaluation process is daunting.** With a multitude of projects to review in a short time frame, ensuring an impartial and comprehensive assessment can become extremely challenging. The introduction of an AI tool doesn't aim to replace the human element but rather to enhance it. By swiftly and objectively analyzing projects based on certain quantifiable metrics, judges can allocate more time to delve into the intricacies, stories, and the passion driving each team

## What it does

This project is a smart tool designed for hackathons. The tool measures the similarity and originality of new ideas against similar projects if any exist, we use web scraping and OpenAI to gather data and draw conclusions.

**For hackers:**
- **Idea Validation:** Before diving deep into development, participants can ascertain the uniqueness of their concept, ensuring they're genuinely breaking new ground.
- **Inspiration:** By observing similar projects, hackers can draw inspiration, identifying ways to enhance or diversify their own innovations.

**For judges:**
- **Objective Assessment:** By inputting a project's Devpost URL, judges can swiftly gauge its novelty, benefiting from AI-generated metrics that benchmark it against historical data.
- **Informed Decisions:** With insights on a project's originality at their fingertips, judges can make more balanced and data-backed evaluations, appreciating true innovation.

## How we built it

**Frontend:** Developed using React JS, our interface is user-friendly, allowing for easy input of ideas or Devpost URLs.

**Web Scraper:** Upon input, our web scraper dives into the content, extracting essential information that aids in generating objective metrics.

**Keyword Extraction with ChatGPT:** OpenAI's ChatGPT is used to detect keywords from the Devpost project descriptions, which are used to capture project's essence.

**Project Similarity Search:** Using the extracted keywords, we query Devpost for similar projects. It provides us with a curated list based on project relevance.

**Comparison & Analysis:** Each incoming project is meticulously compared with the list of similar ones. This analysis is multi-faceted, examining the number of similar projects and the depth of their similarities.

**Result Compilation:** Post-analysis, we present users with an 'originality score' alongside explanations for the determined metrics, keeping transparency.

**Output Display:** All insights and metrics are neatly organized and presented on our frontend website for easy consumption.

## Challenges we ran into

**Metric Prioritization:** Given the timeline restricted nature of a hackathon, one of the first challenges was deciding which metrics to prioritize. Striking the balance between finding meaningful data points that were both thorough and feasible to attain were crucial.

**Algorithmic Efficiency:** We struggled with concerns over time complexity, especially with potential recursive scenarios. Optimizing our algorithms, prompt engineering, and simplifying architecture was the solution.

_Finding a good spot to sleep._

## Accomplishments that we're proud of

We took immense pride in developing a solution directly tailored for an environment we're deeply immersed in. By crafting a tool for hackathons, while participating in one, we felt showcases our commitment to enhancing such events. Furthermore, not only did we conceptualize and execute the project, but we also established a robust framework and thoughtfully designed architecture from scratch. 

Another general Accomplishment was our team's synergy. We made efforts to ensure alignment, and dedicated time to collectively invest in and champion the idea, ensuring everyone was on the same page and were equally excited and comfortable with the idea. This unified vision and collaboration were instrumental in bringing HackAnalyzer to life.

## What we learned

We delved into the intricacies of full-stack development, gathering hands-on experience with databases, backend and frontend development, as well as the integration of AI. Navigating through API calls and using web scraping were also some key takeaways. Prompt Engineering taught us to meticulously balance the trade-offs when leveraging AI, especially when juggling cost, time, and efficiency considerations.

## What's next for HackAnalyzer

We aim to amplify the metrics derived from the Devpost data while enhancing the search function's efficiency. Our secondary and long-term objective is to transition the application to a mobile platform. By enabling students to generate a QR code, judges can swiftly access HackAnalyzer data, ensuring a more streamlined and effective evaluation process.
