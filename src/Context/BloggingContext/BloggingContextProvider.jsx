import { useState } from 'react'
import { BloggingContext } from './BloggingContext'

const BloggingContextProvider = ({ children }) => {
  // global state

  const loginState = JSON.parse(localStorage.getItem('loginState'))

  const user = JSON.parse(localStorage.getItem('user'))

  const [isLoggedIn, setIsLoggedIn] = useState(loginState ?? false)

  const [userInfo, setUserInfo] = useState(user)

  const [blogs, setBlogs] = useState([
    {
      id: 1770120409410,
      user: 'john@gmail.com',
      title: 'Repo Wiki: Surfacing Implicit Knowledge',
      category: 'Coding',
      content:
        "Wiki sharing\nWiki sharing is offered to share project knowledge within the team. When you generate a Wiki locally, the directory (.qoder/repowiki) is automatically created in your code repository. Simply pushing this directory to the remote repository allows you to easily share the generated Wiki with team members.\n\nContent maintenance and export\nTo ensure the Wiki remains consistent with the code, the system automatically detects code changes and prompts you to update the related Wiki.\n\nAlso, self-maintenance is supported. You can modify files in the Wiki directory (.qoder/repowiki) and synchronize changes back to the Wiki by yourself.\n\nBest practices\nGet better AI chat responses\nWhen querying about code repositories, the Agent will quickly respond. It automatically consults the relevant Wiki, combining contextual information to provide accurate code explanations, relevant technical documentation, and implementation details.\n\nWhen adding features or fixing bugs, the Agent automatically consults Repo Wiki, combining real-time project learning to provide solutions that align with the project architecture. This ensures new code maintains consistency with the existing system while improving development efficiency.\n\nLearn about code faster\nThrough Repo Wiki, you can quickly learn about the project's overall architecture, module dependencies, and technical implementation details, as Repo Wiki provides a structured knowledge base, including project architecture descriptions, dependency diagrams, and detailed technical documentation.",
      created_at: 1770120409410,
    },
    {
      id: 1770120362593,
      user: 'john@gmail.com',
      title:
        'The Next Evolution Toward Intelligent Editing: Qoder NEXT Model and ActionRL Preference Alignment in Practice',
      category: 'Coding',
      content:
        'Over the past two years, Large Language Models (LLMs) have fundamentally reshaped software development workflows. Paradigms like Agentic Coding now allow developers to rapidly generate repo-level code from high-level directives, significantly accelerating development velocity. However, a growing sentiment in the developer community characterizes this shift as the rise of the "AI Cleanup Engineer": while Agentic Coding can swiftly automate the initial 80% of a task, the remaining 20%—involving logical calibration, boundary handling, cross-module coordination, and engineering refinement—often requires manual human intervention.\n\nDespite this evolution, traditional code completion tools remain confined to the Fill-In-the-Middle (FIM) paradigm. These models typically operate by predicting a contiguous code span at the cursor position based solely on local context, lacking a holistic understanding of editing intent. This single-step, static approach falls short in real-world scenarios—such as multi-line modifications, function refactoring, or cross-file dependency adjustments—and fails to support coherent, structured sequences of development actions.\n\nTo address this limitation, we introduce an end-to-end framework built on three pillars:\n\nCold-start training via precise simulation of real-world edit trajectories using Abstract Syntax Trees (ASTs);\n\nA data flywheel that captures editing behavior from high-exploration deployments of prototype models; and\n\nActionRL, a novel preference alignment algorithm that ensures deep alignment with developer intent at the level of sequential decision-making.\n\nBreaking Free from FIM: Edit Trajectory Simulation via AST Parsing\nTraditional FIM training typically involves randomly masking spans of code and prompting the model to reconstruct them. While effective for simple completion, this method captures only the static probability distribution of code, not the dynamic logic of software modification.\n\nQoder NEXT moves beyond random masking. Instead, we leverage Abstract Syntax Trees (ASTs) to reverse-engineer realistic edit trajectories, enabling the model to learn how edits unfold—not just what the final code looks like..',
      created_at: 1770120362593,
    },
    {
      id: 1770120272814,
      user: 'john@gmail.com',
      title: 'Build Responsive Admin Dashboard in HTML CSS & JavaScript',
      category: 'Coding',
      content:
        'In today’s digital landscape, admin dashboards are essential tools for managing websites, apps, and business operations. Whether you’re tracking user activity, monitoring sales, or visualizing data, a well-designed dashboard makes everything easier. If you’ve ever wanted to create your own professional-looking admin dashboard, you’re in the right place!\n\nIn this blog post, I’ll guide you through building a fully responsive and interactive admin dashboard using HTML, CSS, and JavaScript. This dashboard features a collapsible sidebar, smooth navigation, theme switching (dark/light mode), interactive charts, and a clean, modern design that works seamlessly on desktop, tablet, and mobile devices.\n\nWhy Should You Build an Admin Dashboard?\nCreating an admin dashboard with HTML, CSS, and JavaScript is more than just a visually appealing project. It’s a fantastic way to develop valuable skills, and here’s what you’ll learn:\n\nPractice Core Skills: Master HTML structure, CSS styling with CSS variables, and JavaScript DOM manipulation.\nLearn Modern Design: Implement contemporary UI patterns like collapsible sidebars, theme toggles, and responsive layouts.\nWork with Charts: Integrate Chart.js library to create beautiful data visualizations like line and doughnut charts.\nEnhance User Experience: Build interactive features like search functionality, dropdown menus, and smooth transitions.\nCreate a Portfolio Piece: Build an impressive, professional project to showcase your web development skills.',
      created_at: 1770120272814,
    },
    {
      id: 1770120161389,
      user: 'john@gmail.com',
      title:
        'How to Build a Gemini AI Chatbot in React.js and CSS | Step-By-Step Guide',
      category: 'Coding',
      content:
        'n today’s tech-driven world, AI chatbots are everywhere, helping with tasks like shopping and customer support. Have you thought about creating your own chatbot? Imagine designing a smart Gemini chatbot, similar to ChatGPT, where users can chat with AI, access chat history, and switch between dark and light themes, all using the free Google Gemini API. Sounds exciting, right?\n\nAt first glance, building a chatbot might seem overwhelming. However, with frameworks like React.js and CSS, it’s more attainable than you think. By following a few simple steps, you can create a sleek and responsive chatbot that conveys professionalism. This project will help you strengthen your React skills, including components, state management, API handling, and utilizing local storage for saving data.\n\nIn this tutorial, I’ll guide you through the process of developing a Google Gemini AI chatbot from scratch using React.js and CSS. We’ll focus on user experience by incorporating features such as a collapsible sidebar for chat history, smooth transitions between dark and light modes, and automatic conversation saving.\n\nWhy Build a Gemini AI Chatbot with React.js?\nBuilding this AI chatbot teaches you way more than just chatbot development. Here’s what you’ll learn along the way:\n\nReact Components: Work with functional components, JSX, and manage state using hooks. The building blocks of React.\nAPI Integration: Connect to the Gemini API and handle asynchronous requests and responses easily.\nTheme Switching: Let users toggle between dark and light modes using simple state management and clean CSS.\nLocal Storage: Save chat histories in the browser so conversations stick around even after a page refresh.\nPortfolio Project: Add a polished project to your portfolio that shows off your React and API skills.\nIf you’d rather build the same Gemini AI chatbot in vanilla JavaScript, feel free to check out my previous blog post on how to create a Gemini AI chatbot in HTML, CSS, and JavaScript. It’s a great option if you want to start with the basics and don’t want to dive into React just yet.',
      created_at: 1770120161389,
    },
    {
      created_at: 1770119402328,
      id: 1770117730347,
      user: 'john@gmail.com',
      title: 'AI isn’t coming for your job, it’s coming for your justification',
      category: 'Technology',
      content:
        'From this perspective, it becomes evident: AI isn’t coming for roles, it’s here to remove low-leverage work. Roles that exist mainly to handle volume or work around broken systems no longer make sense once those problems disappear.\n\nThis is already playing out across teams. For example:\n\nIn operations, AI-powered tools (Celonis, UiPath Process Mining, ServiceNow AI Ops, Signavio, etc.) tackle which work reduces cycle time and cost.\nIn marketing, AI-driven attribution tools (HubSpot, Adobe Sensei, Marketo, etc.) show which campaigns truly drive revenue.\nIn finance, AI-enabled platforms (Anaplan, Workday Adaptive Planning, BlackLine, Planful) automate reporting and forecasting.\nIn customer support, AI-powered tools (Zendesk, Intercom Fin, Gong, Ada) handle repetitive tickets and streamline customer communication workflows.\nAs AI reduces friction and automates workflows, organizations and employees are increasingly forced to ask these two questions: 1) where real value is created, 2) where human input is essential in areas AI cannot handle. Teams that explore and embrace this shift early will be better positioned to adapt as AI continues to compress the cost and effort of execution.\n\nAI adoption beyond automation: the transparency tool reshaping roles and processes\nAn overlooked but highly efficient aspect many businesses miss: AI introduces a level of transparency most organizations have never had before. This visibility changes how organizations make decisions and how they manage business resources.\nIn particular, AI-powered spend analysis is set to become one of the most transformative forces inside companies.\n\nHere’s why:\n\nIt makes spending explainable. Since AI connects costs to actual usage and outcomes, spending can be traced to specific tools, teams, or processes. This means spending decisions no longer have to be based on assumptions.\nInefficiencies become hard to hide. Duplicate tools or bloated, effort-heavy processes surface quickly when cost and outcomes are analyzed together. As a result, businesses can efficiently eliminate redundant tools or processes and reallocate resources accordingly.\nIt makes runway a competitive advantage. Clear spend visibility and AI-powered insights help companies move faster with less burn.\nUltimately, the level of business success is largely determined by the ability to turn spend data into an operational signal. When, instead of tracking costs in isolation, organizations clearly see how spend translates into productivity and revenue, that’s where real differentiation begins.\n\nSmart spend management platforms like this already exist, take Spendbase, for example. In this case, AI can be the next layer that unlocks even deeper insights.',
    },
    {
      created_at: 1770119402328,
      id: 1770117621553,
      user: 'john@gmail.com',
      title:
        'Apple buys “Silent Speech” AI startup for $2B, because talking is so 2025',
      category: 'Technology',
      content:
        'Apple confirmed this week that it has acquired Israeli AI startup Q.ai in a deal valued at close to $2 billion, making it one of the company’s largest acquisitions ever, second only to the $3 billion purchase of Beats in 2014. \n\nBut check your assumptions: this isn’t Beats 2.0. There’s no new headphone brand to flex. Instead, Apple is paying top dollar for tech that might let your devices understand you without you ever saying a word.\n\n​​These days we put our phones on silent so they won’t disturb us; soon the phone will put us on silent so it can understand us.\n\nQ.ai has been operating in secrecy since its founding in 2022. Its machine-learning research focuses on interpreting “silent speech”, detecting imperceptible facial micro-movements, and subtle audio cues to infer what someone means to say.\n\nPatents suggest this tech could work in headphones, smart glasses, or other wearables so users can issue commands privately, even in a quiet library. \n\nThat future has a decidedly dramatic edge: imagine telling Siri to skip a track or read your messages without ever parting your lips. Apple executives call the acquisition a way to fuse machine learning with next-generation hardware.\n\nLongtime Apple watcher Johny Srouji praised Q.ai as “a remarkable company that is pioneering new and creative ways to use imaging and machine learning.” \n\nAt first blush, spending almost $2 billion on not speaking might sound like corporate futurism taken to a comic extreme. We already have voice assistants that sometimes struggle to understand us when we do speak.\n\nYet here’s Apple’s bet: once devices can interpret faint facial cues, the entire paradigm of human-computer interaction shifts, from keyboards and taps to gestures and barely-audible intentions.\n\nThis move also signals how Apple’s AI strategy is evolving. Some critical voices have noted that the company has lagged behind competitors in generative AI and conversational assistants, even partnering with Google to bring Gemini-powered features into its ecosystem. Acquiring Q.ai suggests Cupertino isn’t just chasing language models; it wants to redefine the interface itself. \n\nThere’s a strange poetry to this. In an era when every tech giant is clamouring to make their AI chatty, Apple is buying a company that may prime its devices to be less vocal, more intuitive, and perhaps eerily discreet.\n\nIt’s the sort of paradox that defines modern tech: a quieter future might demand the loudest investment.\n\nIf this sounds like science fiction, well, it does. But Q.ai’s technology, as described in recent reports, could translate into features in AirPods, Vision Pro headsets, or future wearables as soon as 2027. Could it help Siri finally feel less like a confused concierge and more like an unseen assistant tuned to your intent? That remains to be seen. \n\nEither way, Apple’s big wager on silent speech reminds us that innovation doesn’t always roar. Sometimes, it listens for the quietest signals and pays dearly for them.',
    },
    {
      created_at: 1770119402328,
      id: 1770117535929,
      user: 'john@gmail.com',
      title:
        'The rise of the always-on economy: subscriptions beyond streaming',
      category: 'Technology',
      content:
        'The subscription economy is a recurring-revenue model in which products or services are delivered daily under a temporary or perpetual subscription in exchange for a fixed price, growing considerably in the last 20 years.\n\nAccording to the last report in the Subscription Economy Market 2025 by Juniper, the global market had a total revenue of $722B in 2025, with a forecasted total revenue of $1.2T by 2030, with an average annual growth rate of more than 15%. Software as a service (SaaS) remains the biggest part of the subscription market with a revenue of more than $250B by 2022. The car rethinking industry, e-mobility application area, and the digitization of the health sector are expected to be enormously scaled by 2030.\n\nThe European market is expected to grow at a CAGR of 17.50% in the forecast period of 2026-2035. The main industry leaders within the region are beauty, food, and digital subscriptions. Whereas the countries where the subscription market stands out are the UK (beauty and personal care), Germany (software and consumer goods), France (food and beverage), and Italy and Spain (digital subscription and other categories).\n\nA study made by Advances in Consumer Research (ACR) journal highlights how this model is great for businesses because it provides steady income, low upfront costs, and consistent lifetime value (the total value a customer provides to a company over their relationship), while promoting brand loyalty. It also offers unique advantages for consumers, such as a customer-centric approach focused on personalizing services, products and experiences, and experiences; convenient, time-saving solutions; cost-effectiveness; access to a diverse range of products rather than ownership of a few; and even social recognition and identity.',
    },
    {
      created_at: 1770119402328,
      id: 1770117460834,
      user: 'john@gmail.com',
      title: 'Europe’s not-so-dry January: Unicorns and a new tech identity',
      category: 'Technology',
      content:
        'What’s notable isn’t simply the number of new billion-dollar companies, but their variety. Gone are the days when a single sector, often generative AI, defined European unicorn trajectories. Here we see cybersecurity, cloud optimisation, defence-oriented software, sustainability data, and education marketplaces all earning top valuations and investor backing. \n\nThe broader context matters. In 2025, deep-tech and university spinouts, including companies in aerospace, robotics, materials, sensors, and health sciences, saw near record levels of funding, and many achieved significant valuation or revenue milestones. \n\nThis goes hand in hand with a narrative that’s become increasingly clear: European capital is being more deliberate than exuberant. Rather than inflate every trend label, investors are writing checks where traction, revenue models, and regulatory demand converge. That’s why platforms helping companies with compliance and ESG reporting, or infrastructure for cloud efficiency, are winning attention alongside defence-tech innovators.\n\nEurope’s tech ecosystem has matured, even if it still faces hurdles. Venture funding peaked in recent years and then dipped; for example, total European VC investment in 2024 was reported to be around $45 billion, down from earlier highs. Yet the valuation achievements and funding depth remain meaningful. \n\nThis apparent paradox highlights a structural shift: rather than broad flows of unfettered capital, funding is now more selective and outcome-oriented. Investors, LPs, and strategic partners are looking for proof of product-market fit, regulatory differentiation, and defensible business models.\n\nFragmentation across markets and languages, long considered a European challenge, can also be a strength when paired with clusters of domain expertise, cybersecurity hubs in Belgium, deep tech in the Nordics, cloud infrastructure in the Baltics, and education technology with strong ties to diverse EU labour markets. Observers have noted that these clusters are attracting venture dollars, even if not every founder heads straight for the Bay Area. \n\nPolicy tools and institutional support are increasingly part of the backdrop for European innovation. The European Union’s research and innovation framework programmes, most notably Horizon Europe, are directing substantial resources toward areas such as digital transformation, strategic autonomy, and industrial competitiveness. \n\nFor 2021–2027, Horizon Europe is the EU’s flagship funding programme for research and innovation, with an overall budget of around €93.5 billion allocated to boost competitiveness, address climate and social challenges, and support key technologies from AI to advanced manufacturing. \n\nThis support matters because initiatives that might once have felt niche, advanced sensors, ESG compliance tools, or technologies with both civil and defence applications, now align clearly with broader strategic goals set out in the EU’s innovation plans. \n\nCalls under Horizon Europe Cluster 4 – Digital, Industry and Space, and related programmes bring together public and private partners to tackle digital and green transitions, pooling resources and creating coherent pathways from research to commercial deployment.\n\nThat’s why this month’s unicorn news feels less like a fluke and more like a phase transition.\n\nSo what does it all mean? Are these five new unicorns signs of a sustainable upswing or just a temporary blip in enterprise valuations?\n\nThey’re arguably both: an indicator that Europe’s startup engine still runs on thoughtful investment, real use cases, and foundational problems, and a challenge to continue scaling that momentum into later-stage growth and exits.\n\nEurope doesn’t need to be Silicon Valley. It never really did. What it needs is confidence in its own values, disciplined capital, diverse innovation, and regulation as an enabler, not a constraint.\n\nIf this is Europe’s tech moment, it’s not marked by headline-grabbing valuations alone. It’s defined by the breadth of problems being solved and the depth of conviction behind those solutions.',
    },
    {
      created_at: 1770119402328,
      id: 1770117385873,
      user: 'john@gmail.com',
      title: 'OpenAI’s Codex app: When your IDE gets a brain',
      category: 'Technology',
      content:
        'There’s even support for what OpenAI calls “skills” and “automations”: reusable workflows that let Codex go beyond raw code generation into things like gathering information, problem solving, carrying out scheduled tasks, or managing routine reviews. \n\nIn early internal use cases, Codex has built complete applications, playing the roles of designer, developer, and QA tester in a single string of prompts, an example that hints at what happens when AI stops being an assistant and starts feeling a bit like a team member with infinite coffee. \n\nIt’s worth noting that the current release is macOS only, which prompted the usual chorus of developer grumbling about Windows and Linux support. Early adopters on Reddit (and elsewhere) joked that the lack of cross-platform availability feels oddly quaint for an AI tool, even as they praised how much the Codex app can do compared to traditional CLI workflows. \n\nOpenAI is also sweetening the deal: for a limited time, Codex will be accessible to free and Go users, and rate limits for paid Plus, Pro, Business, Enterprise, and Edu plans have been doubled across all surfaces where Codex runs, whether that’s the app, the CLI, IDE extensions, or cloud threads. \n\nThe company’s broader strategy here is unmistakable. AI coding assistants are one of the most competitive battlegrounds in generative AI right now, and rivals like Anthropic’s Claude Code have already reported strong revenue metrics in this space. \n\nThe launch of a desktop command center for Codex feels like OpenAI saying, “We’re in this to win,” not just to ship features. \n\nSo what does this actually mean for developers? It doesn’t mean humans are about to be replaced overnight. Codex is powerful, but like all AI tools, it still makes mistakes and needs human oversight, especially when the stakes are high and production quality matters. \n\nSeen through that lens, the Codex app is less a magic wand and more a powerful collaboration layer, one that could reshape how engineering teams operate without pretending to fully automate the craft of building software. ',
    },
  ])

  const removeBlog = (blogId) => {
    setBlogs((prev) => prev.filter(({ id }) => id != blogId))
    setBlogs((prev) => {
      localStorage.setItem('blogs', JSON.stringify(prev))
      return prev
    })
  }

  const addBlog = (newBlog) => {
    setBlogs((prev) => [newBlog, ...prev])
    setBlogs((prev) => {
      localStorage.setItem('blogs', JSON.stringify(prev))
      return prev
    })
  }

  const updateBlog = (updateID, dataToUpdate) => {
    setBlogs((prev) =>
      prev.map((blog) => {
        if (blog.id == updateID) {
          return { ...blog, ...dataToUpdate }
        } else {
          return blog
        }
      })
    )
    setBlogs((prev) => {
      localStorage.setItem('blogs', JSON.stringify(prev))
      return prev
    })
  }

  const updateBlogFromStorage = (storageBlog) => {
    setBlogs([...storageBlog])
  }

  const handleLogin = (status, user) => {
    if (status === 'login') {
      setIsLoggedIn(true)
      setUserInfo(user)
      localStorage.setItem('loginState', JSON.stringify(true))
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      setIsLoggedIn(false)
      localStorage.clear()
    }
  }

  const bloggingValues = {
    values: { blogs, isLoggedIn, userInfo },
    removeBlog,
    addBlog,
    updateBlog,
    handleLogin,
    updateBlogFromStorage,
  }

  return (
    <BloggingContext.Provider value={bloggingValues}>
      {children}
    </BloggingContext.Provider>
  )
}
export default BloggingContextProvider
