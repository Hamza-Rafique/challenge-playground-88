const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-lg border border-accent/20 hover:border-primary/50 transition-colors">
              <h2 className="text-xl font-semibold text-primary mb-3">Our Experience</h2>
              <p className="text-gray-200">
                We are a team of developers, each with over 10 years of experience working at some of Canada's biggest financial institutes, 
                telecommunications companies, retail businesses, insurance companies, and startups.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg border border-accent/20 hover:border-primary/50 transition-colors">
              <h2 className="text-xl font-semibold text-primary mb-3">Our Vision</h2>
              <p className="text-gray-200">
                Over the years, we have realized that although Udemy courses, YouTube videos, blog posts, and other resources are crucial, 
                there's no substitute for learning by doing.
              </p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-lg border border-accent/20 hover:border-primary/50 transition-colors">
            <h2 className="text-xl font-semibold text-primary mb-3">Our Mission</h2>
            <p className="text-gray-200 mb-6">
              Our goal is to give young, intermediate, and even senior engineers a flavor of what the industry offers and build a 
              community where people share their challenges and help others learn from their experiences by solving real-world problems.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;