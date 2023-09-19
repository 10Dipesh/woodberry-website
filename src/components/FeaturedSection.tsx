const FeaturedSection: React.FC = () => {
  return (
    <section className="mx-4 mt-6 flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold leading-8">
          Experience the Difference with Woodberry Interior and Decors
        </h1>
        <p className="text-base mt-2 pr-2">
          At Woodberry Interior and Decors, We offer personalized designs,
          high-quality materials, and an experienced team to bring your vision
          to life.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-bold">Personalized Design</h2>
          <p>
            Our team of experts will work closely with you to create a design
            that reflects your style and preference.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">High-Quality Materials</h2>
          <p>
            We use finest material to ensuredurability and long-lasting beauty.
          </p>
        </div>
      </div>
      <div className="h-60 w-full">
        <img src="/images/homepage2.jpg" alt="" className="h-full w-full"/>
      </div>
    </section>
  );
};
export default FeaturedSection;
