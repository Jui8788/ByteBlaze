import { Link } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
import { MdDelete } from "react-icons/md";

const BlogCard = ({ blog, deletable, handleDelete }) => {
  const { cover_image, title, description, published_at, id } = blog;

  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group transition border-2 border-primary hover:scale-105 border-opacity-30 hover:border-secondary hover:no-underline focus:no-underline bg-white dark:bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
          src={cover_image || placeHolderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold text-black group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-black dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p className="text-black">{description}</p>
        </div>
      </Link>

      {deletable && (
        <div
          onClick={() => handleDelete(id)}
          className="absolute bg-primary hover:bg-secondary group cursor-pointer p-3 rounded-full hover:scale-105 -top-5 -right-5"
        >
          <MdDelete
            size={20}
            className="text-secondary group-hover:text-primary"
          />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
