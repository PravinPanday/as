// testing
// 3/6/24
import React from 'react';

function App() {
  return (
    <div className="text-center">
      <header className="bg-gray-800 p-5 text-white">
        <nav>
          <ul className="flex justify-center space-x-8">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#find-counselor" className="hover:text-gray-300">Find Counselor</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            <li><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button></li>
          </ul>
        </nav>
      </header>
      <main className="p-8">
        <section className="services">
          <h1 className="text-3xl font-bold mb-8">Our Services</h1>
          <div className="flex flex-wrap justify-center">
            <div className="bg-gray-100 m-4 p-6 rounded-lg shadow-md w-80">
              <h2 className="text-xl font-semibold mb-4">Career Counseling</h2>
              <p className="mb-4">Detailed guidance on career planning, resume building, and job searching.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn more</button>
            </div>
            <div className="bg-gray-100 m-4 p-6 rounded-lg shadow-md w-80">
              <h2 className="text-xl font-semibold mb-4">Resume Review</h2>
              <p className="mb-4">Get personalized feedback to improve your resume and increase your chances of landing a job.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn more</button>
            </div>
            <div className="bg-gray-100 m-4 p-6 rounded-lg shadow-md w-80">
              <h2 className="text-xl font-semibold mb-4">Interview Preparation</h2>
              <p className="mb-4">Practice and improve your interview skills with expert guidance and mock interviews.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn more</button>
            </div>
            <div className="bg-gray-100 m-4 p-6 rounded-lg shadow-md w-80">
              <h2 className="text-xl font-semibold mb-4">Soft Skills Development</h2>
              <p className="mb-4">Enhance your communication, leadership, and teamwork skills for career success.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn more</button>
            </div>
            <div className="bg-gray-100 m-4 p-6 rounded-lg shadow-md w-80">
              <h2 className="text-xl font-semibold mb-4">Personal Branding</h2>
              <p className="mb-4">Build a strong personal brand and stand out in your professional field.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn more</button>
            </div>
            <div className="bg-gray-100 m-4 p-6 rounded-lg shadow-md w-80">
              <h2 className="text-xl font-semibold mb-4">Workshops and Group Sessions</h2>
              <p className="mb-4">Join interactive sessions to gain valuable insights and practical skills.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn more</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
// 3/6/24