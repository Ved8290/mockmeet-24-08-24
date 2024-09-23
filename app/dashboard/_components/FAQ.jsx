"use client"
import React, { useState } from 'react';

function FAQ() {
  // State to track which questions are open
  const [openQuestion, setOpenQuestion] = useState(null);

  // Toggle function to open/close questions
  const toggleQuestion = (questionIndex) => {
    setOpenQuestion(openQuestion === questionIndex ? null : questionIndex);
  };

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-24">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">Frequently Asked Questions (FAQ)</h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {/* Question 1 */}
        <div>
          <h3
            className="text-2xl font-semibold text-indigo-600 cursor-pointer"
            onClick={() => toggleQuestion(1)}
          >
            1. What is MockMeet?
          </h3>
          {openQuestion === 1 && (
            <p className="text-gray-700 text-lg leading-relaxed mt-2">
              MockMeet is your personalized AI-powered interview coach designed to help you master interviews. Whether you’re a student entering the job market or a professional looking for career growth, our platform offers realistic mock interviews tailored to your specific job title and responsibilities.
            </p>
          )}
        </div>

        {/* Question 2 */}
        <div>
          <h3
            className="text-2xl font-semibold text-indigo-600 cursor-pointer"
            onClick={() => toggleQuestion(2)}
          >
            2. How does MockMeet work?
          </h3>
          {openQuestion === 2 && (
            <div className="text-gray-700 text-lg leading-relaxed mt-2">
              <p>It’s simple:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Enter Your Role:</strong> Input your job title and key responsibilities.</li>
                <li><strong>Simulate Real Interviews:</strong> Experience one-on-one interviews with our AI that mimics real-world scenarios.</li>
                <li><strong>Get Your Report:</strong> Receive detailed feedback on your performance, including your strengths, areas for improvement, and personalized tips for success.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Question 3 */}
        <div>
          <h3
            className="text-2xl font-semibold text-indigo-600 cursor-pointer"
            onClick={() => toggleQuestion(3)}
          >
            3. What types of questions can I expect?
          </h3>
          {openQuestion === 3 && (
            <p className="text-gray-700 text-lg leading-relaxed mt-2">
              Our AI covers both technical and behavioral questions tailored to your job role. The questions are designed to give you a realistic interview experience that prepares you for real-world challenges.
            </p>
          )}
        </div>

        {/* Question 4 */}
        <div>
          <h3
            className="text-2xl font-semibold text-indigo-600 cursor-pointer"
            onClick={() => toggleQuestion(4)}
          >
            4. What packages does MockMeet offer?
          </h3>
          {openQuestion === 4 && (
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg mt-2">
              <li><strong>Basic Package:</strong> Includes 10 essential questions for a quick interview boost.</li>
              <li><strong>Advanced Package:</strong> Offers 20-23 in-depth questions covering both technical and behavioral aspects.</li>
              <li><strong>Premium Package:</strong> Provides unlimited interview sessions with comprehensive questions—ideal for intensive preparation.</li>
            </ul>
          )}
        </div>

        {/* Question 5 */}
        <div>
          <h3
            className="text-2xl font-semibold text-indigo-600 cursor-pointer"
            onClick={() => toggleQuestion(5)}
          >
            5. Why should I choose MockMeet?
          </h3>
          {openQuestion === 5 && (
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg mt-2">
              <li><strong>Tailored for You:</strong> Our AI adapts questions based on your career goals and job role.</li>
              <li><strong>Instant Feedback:</strong> Receive actionable insights with a detailed performance report immediately after your session.</li>
              <li><strong>Real-World Practice:</strong> Build confidence by practicing with questions that mirror real interview scenarios.</li>
              <li><strong>Flexible & Affordable:</strong> With different packages to suit every need, MockMeet is accessible for everyone—from beginners to experienced professionals.</li>
            </ul>
          )}
        </div>

        {/* Question 6 */}
        <div>
          <h3
            className="text-2xl font-semibold text-indigo-600 cursor-pointer"
            onClick={() => toggleQuestion(6)}
          >
            6. How do I get started with MockMeet?
          </h3>
          {openQuestion === 6 && (
            <p className="text-gray-700 text-lg leading-relaxed mt-2">
              Simply sign up on our platform, choose a package that suits your needs, and start practicing for your interviews!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
