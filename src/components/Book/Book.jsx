const Book = ({ book }) => {
  const { bookName, author, image, tags, category } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl p-6">
      <figure className="bg-gray-400 py-8 rounded-2xl">
        <img src={image} className="h-[166px]" alt="book name" />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-4">
          {tags.map((tag) => (
            <button className="btn btn-xs bg-green-200 text-green-500">
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title">
          {bookName}!<div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="pb-2">By: {author}</p>
        <div className="border-t-2 border-dashed"></div>
        <div className="card-actions justify-between items-center pt-3">
          <div className="badge badge-outline">{category}</div>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
