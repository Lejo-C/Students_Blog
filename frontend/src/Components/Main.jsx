import React from 'react';
import student from '../assets/Gemini_Generated_Image_akxsyzakxsyzakxs.png';
import discuss from '../assets/Gemini_Generated_Image_fhul7zfhul7zfhul.png';
import startup from '../assets/Gemini_Generated_Image_b91vmyb91vmyb91v.png';
import question from '../assets/Gemini_Generated_Image_sr51x0sr51x0sr51.png';
const Main = () => {
  return (
    <div>
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container mx-auto py-3 px-4 text-sm">
          <div className="flex justify-between items-center font-semibold">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="tracking-tight text-lg">Student Blog</span>
            </div>

            {/* Nav Links */}
            <nav className="flex gap-5">
              <a href="/" className="hover:text-blue-400">Home</a>
              <a href="/about" className="hover:text-blue-400">About</a>
              <a href="/contact" className="hover:text-blue-400">Contact</a>
            </nav>

            {/* Auth Links */}
            <div className="flex gap-5">
              <a href="/login" className="hover:text-blue-400">Login</a>
              <a href="/signup" className="hover:text-blue-400">Sign Up</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mt-24 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Share Your Student Experience <br/> as a Blog
        </h1>
        <p className="mt-4 text-gray-600">
          A platform to connect, inspire, and learn from fellow students.
        </p>
      </section>
      <div className='mt-15 ml-36 mr-36'>
      <div className='flex justify-between mt-20'>
        <img src={student} alt="student" className='h-80 w-80 rounded-lg'/>
        <img src={discuss} alt="student" className='h-80 w-80 rounded-lg'/>
        <img src={startup} alt="student" className='h-80 w-80 rounded-lg'/>
      </div>
      <div className='flex justify-center items-center mt-10'>
      <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
  Explore Blogs
</button>
</div>

      <div className='mt-30'>
        <h2 className='font-bold text-3xl md:text-4xl text-center'>Why student's need a blog site</h2>
       <div className="flex mt-12 justify-around items-center gap-8 px-6">
  {/* Image */}
  <img
    src={question}
    alt="Student blog illustration"
    className="w-64 h-64 rounded-lg object-cover shadow-md"
  />

  {/* Description */}
  <h3 className="max-w-xl text-lg leading-relaxed text-gray-700">
    Students need a blog site because it gives them a space to share ideas, experiences, and knowledge outside the classroom. Blogging builds confidence, improves communication skills, and encourages reflection. It also creates community, helping students connect with peers and learn from diverse perspectives. Beyond personal growth, a blog can showcase creativity and skills that strengthen academic portfolios and career opportunities.</h3>
</div>
</div>

    <div className="px-6">
  <h2 className="font-bold text-3xl md:text-4xl text-center mt-12 mb-8">
    What We Provide
  </h2>

  <ul className="space-y-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
    <li>
      <strong>A Creative Platform</strong> – Share your stories, experiences, and ideas with a supportive student community.
    </li>
    <li>
      <strong>Skill Development</strong> – Improve writing, communication, and digital literacy through regular blogging.
    </li>
    <li>
      <strong>Networking Opportunities</strong> – Connect with peers, discover diverse perspectives, and build meaningful relationships.
    </li>
    <li>
      <strong>Portfolio Building</strong> – Showcase your creativity and thought leadership to strengthen academic and career profiles.
    </li>
    <li>
      <strong>Safe & Inclusive Space</strong> – Express yourself freely in a moderated environment that values respect and diversity.
    </li>
  </ul>

</div>

    </div>
    <footer className="bg-blue-800 text-white py-10 mt-12">
  <div className="max-w-5xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-8">
      <h1 className="font-bold text-3xl">For More Information</h1>
      <p className="text-gray-300 mt-2">
        Subscribe to our newsletter or reach out to us directly.
      </p>
    </div>

    {/* Content Row */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left side */}
      <div className="text-center md:text-left">
        <p className="text-lg">📧 Contact us at:</p>
        <p className="text-sm text-gray-300">studentblog@example.com</p>
      </div>

      {/* Right side: Input box */}
      <div className="bg-blue-500 px-6 py-4 rounded-lg w-full md:w-96">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 bg-blue-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button className="mt-4 w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition">
          Subscribe
        </button>
      </div>
    </div>

    {/* Bottom line */}
    <div className="text-center text-xs text-gray-400 mt-10">
      © {new Date().getFullYear()} Student Blog. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  );
};
export default Main;
