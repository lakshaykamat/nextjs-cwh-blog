import Link from 'next/link';

const BlogCard = ({ title, author, date, imageSrc,slug ,description}) => {
    const MAX_LENGTH = 95
    description = description.length > MAX_LENGTH &&  description.substr(0, MAX_LENGTH) + "..."
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="h-48 w-full object-cover object-center" src={imageSrc} alt={title} />
            <div className="p-4">
                <Link href={`/posts/${slug}`} className='hover:underline'>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                </Link>
                <p className="text-gray-600 mb-2">By {author} - {date}</p>
                <p className="text-gray-800">{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;
