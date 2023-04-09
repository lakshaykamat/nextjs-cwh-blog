import Link from 'next/link';

const Navbar = ({pathname}) => {

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className=" text-white font-bold text-lg">My Blog</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/posts" className="hover:bg-indigo-500  text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-semibold">Posts
              </Link>
              <Link href="/about" className="hover:bg-indigo-500 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-semibold">About
              </Link>
              <Link href="/contact" className="hover:bg-indigo-500 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-semibold">Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
