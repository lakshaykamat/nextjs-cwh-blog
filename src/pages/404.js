const { default: Link } = require("next/link");

const NotFound = () => {
    return (
        <div className="my-12 flex items-center justify-center">
            <div className="max-w-md p-6 bg-white border border-gray-200 rounded-md shadow-lg text-center">
                <h1 className="text-4xl font-semibold mb-4">404</h1>
                <p className="text-gray-600 mb-4">Page not found</p>
                <p className="text-gray-500">
                    The page you are looking for does not exist. Please check the URL or go back to the home page.
                </p>
                <Link href="/" className="mt-6 inline-block px-4 py-2 bg-indigo-500 text-white rounded-md transition duration-300 hover:bg-indigo-600">
                    Go to Home
                </Link>
            </div>
        </div>
    )
}
export default NotFound