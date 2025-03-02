import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDb";
import { addToViewList } from "../../utility/viewDetails";



const BookDetails = () => {
    function App(){
        const notify = () => toast("Wow so easy!");}
   
    const handleMarkeAsRead=(id)=>{
        addToStoredReadList(id)

    }
    const handleViewList=(id)=>{
         addToViewList(id)
    }
    const navigate=useNavigate()
    const handleBack=()=>{
        navigate(-1)
    }
    const {bookId}=useParams();
    const id=parseInt(bookId)
    const data=useLoaderData();
    const book=data.find(book=>book.bookId===id)
    const {bookId:currentBookId,image,bookName,author,tags,category,review,totalPages,rating,publisher,yearOfPublishing}=book;
    return (
        <div className="hero bg-base-200 min-h-screen gap-11">
  <div className="hero-content flex-col lg:flex-row ">
    <img 
      src={image}
      className="w-[425px] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold ">{bookName}</h1>
      <p className="py-2">
        By: {author}
      </p>
      <div className="divider"></div>
      <p>{category}</p>
      <div className="divider"></div>
      <p>{review}</p>
      <p className="mr font-bold">Tag:
        {
            tags.map(tag=><button className="mr-3 ml-4 text-green-500"> {tag}</button> )
        }
      </p>
      <div className="divider"></div>
      <div className="flex gap-14 py-8">
    <div>
        <p>Number of pages:</p>
        <p>Publisher:</p>
        <p>Year of Publishing:</p>
        <p>Rating:</p>
    </div>
    <div>
        <p>{totalPages}</p>
        <p>{publisher}</p>
        <p>{yearOfPublishing}</p>
        <p>{rating}</p>
    </div>
</div>

      <button onClick={()=>handleMarkeAsRead(bookId)} className="btn btn-outline mr-4 text-purple-400">Mark As Read </button>
     
      <button onCanPlay={handleViewList} className="btn btn-accent mr-4 ">Add To Wishlist</button>
      <button onClick={handleBack} className="btn btn-outline text-blue-600 ">Go back</button>
    </div>
    
  </div>
</div>
    );
};

export default BookDetails;