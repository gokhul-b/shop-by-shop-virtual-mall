import Rating from "./Rating";
import Prdimg from "../assets/img/specific-product/front.jpg";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate("/product");
  };
  return (
    <div className="w-full flex flex-col justify-center items-center px-36 py-24">
      <p className="text-5xl text-center font-inter font-regular mb-10">
        Our Products
      </p>
      <div className="h-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <div className="w-[350px] h-[400px] border flex flex-col">
          <div className="flex justify-center py-4">
            <img
              src={Prdimg}
              alt="cashew"
              className="w-60 h-auto object-cover"
            />
          </div>
          <div className="px-6 flex flex-col flex-wrap">
            <p className="text-sm font-medium">Cashews</p>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-700">Price: ₹720</p>
              <Rating />
            </div>
            <button
              className="w-full my-3 self-center border rounded-lg bg-gray-700 text-white font-inter font-medium w-50 px-4 py-2"
              onClick={handleBuy}
            >
              BUY NOW
            </button>
          </div>
        </div>
        {/* <div className="w-[350px] h-[400px] border flex flex-col">
          <div className="flex justify-center py-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRURCFpNlseiUyfXM1niH3w6QFgFfuLliWHGN5V42aVIm3JA3irVM8pcwZpUlQ9J31q-VqJBc0Qr_iTADkV3AY-bi3oTWcsIjZua9c51iE"
              alt="cashew"
              className="w-40 h-auto object-cover "
            />
          </div>
          <div className="px-6 flex flex-col flex-wrap">
            <p className="text-sm font-medium">The Great Gatsby</p>
            <div className="flex justify-between items-center">
              <p className="text-sm">Price: ₹199</p>
              <Rating />
            </div>
            <button className="w-full my-3 self-center border rounded-lg bg-gray-700 text-white font-inter font-medium w-50 px-4 py-2">
              BUY NOW
            </button>
          </div>
        </div> */}
        {/* <div className="w-[350px] h-[400px] border flex flex-col">
          <div className="flex justify-center py-4">
            <img
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTNJToOkA1TDZeGqJ09X4eKmTxL3kZRRjheU791Jn3ieMeSY2DSlf0i1zsXh8dH9Xf7kxBExS3SsrusC9FKFt0CKk4OAYGTK2NS7M7VcwQuo7aJxZR0gHYD7A"
              alt="cashew"
              className="w-40 h-auto object-cover "
            />
          </div>
          <div className="px-6 flex flex-col flex-wrap">
            <p className="text-sm font-medium">THE FAMOUS FIVE COLLECTION 4</p>
            <div className="flex justify-between items-center">
              <p className="text-sm">Price: ₹199</p>
              <Rating />
            </div>
            <button className="w-full my-3 self-center border rounded-lg bg-gray-700 text-white font-inter font-medium w-50 px-4 py-2">
              BUY NOW
            </button>
          </div>
        </div> */}
        {/* <div className="w-[350px] h-[400px] border flex flex-col">
          <div className="w-[300px] h-[350px] flex justify-center py-4">
            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR4O2V5s-GYHUWZljno3Cem7NutiAL8p7NEiwalzaVszadFJjZUIRUPsgsePsNjs5Ud0nOEtDERNfC99TkR71SZOFcGAMU68IN40DMF23m_0oyX0Akf3r0U"
              alt="cashew"
              className="w-40 h-auto object-cover "
            />
          </div>
          <div className="px-6 flex flex-col flex-wrap">
            <p className="text-sm font-medium">
              100 Most Famous People Of The World
            </p>
            <div className="flex justify-between items-center">
              <p className="text-sm">Price: ₹399</p>
              <Rating />
            </div>
            <button className="w-full my-3 self-center border rounded-lg bg-gray-700 text-white font-inter font-medium w-50 px-4 py-2">
              BUY NOW
            </button>
          </div>
        </div> */}
        {/* <div className="w-[350px] h-[400px] border flex flex-col">
          <div className="flex justify-center py-4">
            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR5boCx0-KiEyUU9uTpjKlUE6SQfQxthCXR_781CZbsdIXMvUu05XoyWI7vrXmF1zq4kif5alCtLeUaJ9MhX59QC-XIWeVIoegICQlukV21"
              alt="cashew"
              className="w-40 h-auto object-cover "
            />
          </div>
          <div className="px-6 flex flex-col flex-wrap">
            <p className="text-sm font-medium">Wings of Fire</p>
            <div className="flex justify-between items-center">
              <p className="text-sm">Price: ₹199</p>
              <Rating />
            </div>
            <button className="w-full my-3 self-center border rounded-lg bg-gray-700 text-white font-inter font-medium w-50 px-4 py-2">
              BUY NOW
            </button>
          </div>
        </div> */}
        {/* <div className="w-[350px] h-[400px] border flex flex-col">
          <div className="flex justify-center py-4">
            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR5boCx0-KiEyUU9uTpjKlUE6SQfQxthCXR_781CZbsdIXMvUu05XoyWI7vrXmF1zq4kif5alCtLeUaJ9MhX59QC-XIWeVIoegICQlukV21"
              alt="cashew"
              className="w-40 h-auto object-cover "
            />
          </div>
          <div className="px-6 flex flex-col flex-wrap">
            <p className="text-sm font-medium">Wings of Fire</p>
            <div className="flex justify-between items-center">
              <p className="text-sm">Price: ₹199</p>
              <Rating />
            </div>
            <button className="w-full my-3 self-center border rounded-lg bg-gray-700 text-white font-inter font-medium w-50 px-4 py-2">
              BUY NOW
            </button>
          </div>
        </div> */}
        {/* <div className="w-[350px] h-[400px] border flex flex-col">
          <div className="flex justify-center py-4">
            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR5boCx0-KiEyUU9uTpjKlUE6SQfQxthCXR_781CZbsdIXMvUu05XoyWI7vrXmF1zq4kif5alCtLeUaJ9MhX59QC-XIWeVIoegICQlukV21"
              alt="cashew"
              className="w-40 h-auto object-cover "
            />
          </div>
          <div className="px-6 flex flex-col flex-wrap">
            <p className="text-sm font-medium">Wings of Fire</p>
            <div className="flex justify-between items-center">
              <p className="text-sm">Price: ₹199</p>
              <Rating />
            </div>
            <button className="w-full my-3 self-center border rounded-lg bg-gray-700 text-white font-inter font-medium w-50 px-4 py-2">
              BUY NOW
            </button>
          </div>
        </div> */}
        {/* <div className="w-[350px] h-[400px] border flex flex-col">
          <div className="flex justify-center py-4">
            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR5boCx0-KiEyUU9uTpjKlUE6SQfQxthCXR_781CZbsdIXMvUu05XoyWI7vrXmF1zq4kif5alCtLeUaJ9MhX59QC-XIWeVIoegICQlukV21"
              alt="cashew"
              className="w-40 h-auto object-cover "
            />
          </div>
          <div className="px-6 flex flex-col flex-wrap">
            <p className="text-sm font-medium">Wings of Fire</p>
            <div className="flex justify-between items-center">
              <p className="text-sm">Price: ₹199</p>
              <Rating />
            </div>
            <button className="w-full my-3 self-center border rounded-lg bg-gray-700 text-white font-inter font-medium w-50 px-4 py-2">
              BUY NOW
            </button>
          </div> 
        </div>
        <div className="w-[350px] h-[400px] border flex flex-col">
          <div className="flex justify-center py-4">
            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR5boCx0-KiEyUU9uTpjKlUE6SQfQxthCXR_781CZbsdIXMvUu05XoyWI7vrXmF1zq4kif5alCtLeUaJ9MhX59QC-XIWeVIoegICQlukV21"
              alt="cashew"
              className="w-40 h-auto object-cover"
            />
          </div>
          <div className="px-6 flex flex-col flex-wrap items-center">
            <p className="text-sm font-medium">Wings of Fire</p>
            <div className="flex justify-between items-center">
              <p className="text-sm">Price: ₹199</p>
              <Rating />
            </div>
            <button className="w-full my-3 self-center border rounded-lg bg-gray-700 text-white font-inter font-medium w-50 px-4 py-2">
              BUY NOW
            </button>
          </div>
        </div> */}
      </div>
      {/* <button className="px-2.5 py-2 border bg-indigo-500 text-white rounded-lg mt-8">
        Show more
      </button> */}
    </div>
  );
};

export default ProductList;
