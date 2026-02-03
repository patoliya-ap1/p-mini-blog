const Banner = ({ bannerImage }) => {
  return (
    <div className="h-80">
      <img
        src={bannerImage}
        className="h-full w-full object-cover rounded-md shadow-xl"
        alt="banner image"
      />
    </div>
  );
};
export default Banner;
