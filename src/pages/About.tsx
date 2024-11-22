const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">About Us</h1>
      <div className="prose prose-lg">
        <p className="mb-6 text-gray-200">
          We are a team of developers, each with over 10 years of experience working at some of Canada's biggest financial institutes, 
          telecommunications companies, retail businesses, insurance companies, and startups.
        </p>
        <p className="mb-6 text-gray-200">
          Over the years, we have realized that although Udemy courses, YouTube videos, blog posts, and other resources are crucial, 
          there's no substitute for learning by doing.
        </p>
        <p className="mb-6 text-gray-200">
          Our goal is to give young, intermediate, and even senior engineers a flavor of what the industry offers and build a 
          community where people share their challenges and help others learn from their experiences by solving real-world problems.
        </p>
      </div>
    </div>
  );
};

export default About;