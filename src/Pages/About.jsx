import Banner from '../Component/Banner'
import { useBloggingContext } from '../Context/BloggingContext/BloggingContext'
import aboutBlogging from '../assets/aboutBlogging.jpg'
const About = () => {
  const {
    values: { isLoggedIn, userInfo },
  } = useBloggingContext()
  const author = isLoggedIn && userInfo.email.split('@')[0]
  return (
    <div>
      <h2 className="mb-3 text-2xl">About</h2>
      <pre className="text-slate-700 whitespace-pre-wrap font-sans">
        I’m {author}, About Us: Your Hub for Tech, Taste, Travel, Code & Trade
        Welcome to [Insert Blog Name], the ultimate digital destination curated
        for the modern, curious, and ambitious mind. In an age where information
        is abundant but quality is scarce, we created [Insert Blog Name] to be a
        curated space—a one-stop hub for everything that makes life efficient,
        delicious, adventurous, intelligent, and profitable. Whether you are
        debugging code at 2 AM, looking for a five-ingredient recipe, planning a
        backpacking trip, or monitoring the stock market, you have come to the
        right place. We believe that being multi-passionate is a strength, not a
        weakness. Our content is designed for the modern Renaissance individual
        who refuses to limit themselves to just one niche. Our Story: From
        Passion to Platform [Insert Blog Name] didn't start in a boardroom. It
        started in a small room, born from the frustration of finding reliable,
        in-depth information across too many fragmented sources. Our founder, a
        tech enthusiast with a passion for cooking, traveling, and a knack for
        trading, realized that they were spending hours researching in different
        places. Why not create a single, high-quality blog that brings all these
        passions together? What began as a personal hobby in [Insert Year] has
        now blossomed into a thriving community of thousands of readers. Our
        journey has been driven by a simple mission: To share actionable,
        honest, and high-quality insights that help you live your best, most
        productive life.
      </pre>
      <div className="my-6">
        <Banner bannerImage={aboutBlogging} />
      </div>
      <pre className="whitespace-pre-wrap font-sans">
        What We Cover: A Multi-Niche Approach We aren't just another generic
        blog. We are a collection of specialized niches, all held together by a
        commitment to excellence. 1. Technology (The Future) Technology is no
        longer just a sector; it’s the fabric of our lives. In our Technology
        category, we move past the hype to deliver, deep-dive reviews, and tech
        news that matters. What you’ll find: AI trends, gadget reviews,
        smartphone comparisons, software hacks, smart home automation, and
        cybersecurity tips to keep you safe in the digital age. 2. Cooking (The
        Art & Science) We believe cooking is both a science and a creative
        outlet. Our cooking section is for everyone from the burnt-toast
        beginner to the seasoned home chef. What you’ll find: Easy 30-minute
        recipes, budget-friendly meal prep, kitchen appliance reviews, tips for
        mastering classic techniques, and culinary travel tales. 3. Travelling
        (The Experience) Travelling is about broadening horizons and collecting
        moments. We provide detailed travel guides, itineraries, and tips to
        make your journey smoother, cheaper, and more memorable. What you’ll
        find: Solo travel guides, hidden gems, eco-friendly travel tips,
        photography spots, budget accommodation tips, and travel hacking (using
        miles and points). 4. Coding (The Logic) For the developers, creators,
        and builders, our Coding category is designed to help you write better
        code and build functional projects. What you’ll find: Python tutorials,
        JavaScript tutorials, UI/UX tips, web development best practices,
        open-source project walkthroughs, and career advice for developers. 5.
        Trading (The Growth) Wealth creation is crucial for freedom. Our Trading
        section breaks down the complex world of finance, stocks, and
        cryptocurrency into digestible, actionable strategies. What you’ll find:
        Technical analysis, fundamental analysis, crypto market updates,
        investing strategies for beginners, portfolio management, and trading
        psychology tips.
      </pre>
    </div>
  )
}
export default About
