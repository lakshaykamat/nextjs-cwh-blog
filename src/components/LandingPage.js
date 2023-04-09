import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="bg-indigo-100 min-h-screen">
      <header className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-lg mb-8">Get inspired, learn new things, and explore interesting topics.</p>
          <Link href="/posts" className="bg-white text-purple-800 py-2 px-6 rounded-full text-lg font-semibold hover:bg-indigo-200 transition duration-300">Explore Posts
          </Link>
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Discover New Ideas</h2>
            <p className="text-gray-600">Read interesting and informative blog posts on various topics to expand your knowledge and perspective.</p>
          </div>
          <img src="/images/ideas.jpg" alt="Discover New Ideas" className="w-full md:w-1/2 rounded-lg" />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-indigo-200">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <img src="/images/community.jpg" alt="Join Our Community" className="w-full md:w-1/2 rounded-lg" />
          <div className="flex-1 ml-0 md:ml-8 mt-8 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-gray-600">Become a part of our thriving community of fellow bloggers, readers, and learners. Engage in discussions, share ideas, and connect with like-minded individuals.</p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Stay Informed</h2>
            <p className="text-gray-600">Get regular updates on new blog posts, events, and announcements. Don't miss out on the latest content and stay informed.</p>
          </div>
          <img src="/images/newsletter.jpg" alt="Stay Informed" className="w-full md:w-1/2 rounded-lg" />
        </div>
      </section>
      <footer className="bg-indigo-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2023 My Blog. All rights reserved.</p>
        </div>
  </footer>
</div>

);
};

export default LandingPage;