import Container from "./ui/container";
const FeaturedListSection = () => {
  return (
    <div className="md:h-full w-full px-24">
      <Container>
        <div className="mt-4 mx-4">
          <div>
            <h2>Transform</h2>
            <h2>Creating Beautiful Spaces</h2>
            <p>We specialize in residental and commercial interior design.</p>
          </div>
          <div className="w-full h-auto">
            <img
              src="/images/serviceImg.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default FeaturedListSection;
