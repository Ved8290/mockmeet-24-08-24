import React from 'react';
import Header from '../dashboard/_components/Header';

function AboutUs() {
  return (
    <div>
      <Header />

      {/* About Us Section */}
      <div className="px-6 py-12 lg:px-24 lg:py-20 bg-gray-50">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-indigo-600 mb-4 tracking-tight">
            About Us
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 font-medium">
            MockMeet: Your Path to Career Success
          </p>
        </div>

        {/* About MockMeet Section */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 mb-16">
          <div className="w-full lg:w-1/2">
            <img
              src="https://i.pinimg.com/originals/db/5a/f0/db5af0e59e914c91f51f90fee302dc51.gif"
              alt="MockMeet Platform"
              className="w-full rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">
              What We Do
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              MockMeet was created with a single mission: to bridge the gap between candidates and career success. We believe practice is most effective when guided by a blend of industry insights and advanced AI. Our platform offers personalized mock interviews that simulate real-world scenarios and provide instant feedback to help you improve.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              We know interviews can be nerve-wracking (and let’s be honest—awkward!). That’s why we turn stress into success. MockMeet combines smart AI that challenges you with unexpected questions and expert insights from professionals who’ve been on both sides of the interview table. The result? Comprehensive preparation for everything from the straightforward to the tricky.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-indigo-600 text-white py-16 rounded-lg shadow-lg">
          <h2 className="text-center text-4xl font-extrabold mb-8">
            Our Mission
          </h2>
          <p className="text-center text-lg lg:text-xl mx-auto leading-relaxed max-w-3xl">
            With MockMeet, you get the perfect mix of cutting-edge AI and industry expertise, ensuring you walk into your interview confident and ready to impress.
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 mt-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We’re a crew of tech geeks, HR ninjas, and industry insiders who’ve been there, done that. Our secret sauce? We blend sharp AI algorithms with the wisdom of hiring managers who know exactly what they’re looking for—no fluff, no gimmicks, just solid prep.
            </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://i.pinimg.com/originals/e7/78/2b/e7782b954b20ab768c74fc1dfd6f9377.gif"
              alt="MockMeet Team"
              className="w-full rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="container mx-auto text-center px-4 py-16">
        <h2 className="text-4xl font-extrabold mb-10 text-indigo-600">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Smart AI</h3>
            <p className="text-gray-600">
              Get hit with unpredictable questions tailored to your job role—no two interviews are the same!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Expert Insights</h3>
            <p className="text-gray-600">
              Our industry professionals share the inside scoop on what’s trending in interviews.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Honest Feedback</h3>
            <p className="text-gray-600">
              Receive straightforward feedback on where you shine and where you can improve.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="flex justify-center py-10">
        <img
          src="https://t4.ftcdn.net/jpg/04/03/58/65/360_F_403586528_oyELlTJDLt6N1Gx9stbQCLUUXfeOvSrZ.jpg"
          alt="Mock Interview"
          className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 w-2/3 md:w-1/2"
        />
      </section>

      {/* Join Us Section */}
      <section className="bg-indigo-600 text-white text-center p-16">
        <h2 className="text-4xl font-extrabold mb-6">Join Us!</h2>
        <p className="text-lg lg:text-xl mb-8">
        Ready to take the guesswork out of interview prep? Join MockMeet and turn those awkward
stammers into slick answers. Whether you're aiming for your first job or a promotion, we’ll
make sure you walk in confident and prepared. Why settle for uncertainty when you can turn
practice into real results? Whether you’re just starting out or looking to advance, MockMeet
has got your back.
         </p>
        <a 
          href="/dashboard" 
          className="bg-white text-indigo-600 rounded-lg px-8 py-3 font-bold hover:bg-gray-100 transition duration-300"
        >
          Start Your Free Trial Today!
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2024 MockMeet. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
