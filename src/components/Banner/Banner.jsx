
import bannerImg from '../../assets/books.jpg';
const Banner = () => {
    return (
        <div className="hero bg-base-200  h-[554px]">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img className='w-[318px] h-[354px]'
      src={bannerImg} />
    <div className='w-[1170px] h-[354px] flex flex-col items-center justify-center'>
    <h1 className="text-5xl font-bold pb-10">Books to freshen up <br /> your bookshelf</h1>
    <button className="btn btn-success">View The List</button>
</div>

  </div>
</div>
    );
};

export default Banner;