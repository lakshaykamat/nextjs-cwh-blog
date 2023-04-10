import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarData = {
    title: "My Blog",
    links: [
      {
        id:1,
        path: "/",
        linkName: "Home",
      },
      {
        id:2,
        path: "/posts",
        linkName: "Posts",
      },
      {
        id:2,
        path: "/about",
        linkName: "About",
      },
      {
        id:3,
        path: "/contact",
        linkName: "Contact"
      },
    ],
  };
//focus:bg-gray-500 focus:font-bold focus:text-white
  const allLinks = navbarData.links.map((item,index)=>{
    return <Link key={index} href={item.path} className={`text-gray-300 hover:text-white md:mx-4 my-2 md:my-0 text-center block md:inline-block px-3 py-2 rounded-md text-sm font-medium`}>{item.linkName}</Link>
  })
  return (
    <nav className="bg-indigo-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          <div className="text-white font-bold text-xl"><Link href="/">{navbarData.title}</Link></div>
          <div className="flex md:hidden absolute right-5 top-4">
            <button
              type="button"
              className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
              onClick={() =>setIsOpen(!isOpen)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`md:flex md:flex-row md:items-center ${
              isOpen ? "w-full flex flex-col" : "w-fit hidden"
            }`}
          >
            {allLinks}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
