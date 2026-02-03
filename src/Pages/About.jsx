import Banner from "../Component/Banner";
import aboutBlogging from "../assets/aboutBlogging.jpg";
const About = () => {
  return (
    <div>
      <h2 className="mb-3">About</h2>
      <p>
        "I’m John, an apartment dweller, plant enthusiast, and occasional
        plant-killer (we’ve all been there!). I have been experimenting with
        urban farming for 5 years, turning my 4x4 balcony into a full-scale
        garden. I’m sharing what works, what doesn't, and the lessons learned
        along the way."
      </p>
      <div className="mt-6">
        <Banner bannerImage={aboutBlogging} />
      </div>
    </div>
  );
};
export default About;
