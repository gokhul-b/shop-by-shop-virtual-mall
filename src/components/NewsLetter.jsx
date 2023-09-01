const NewsLetter = () => {
  return (
    <div>
      <section id="newsletter" className="mb-10 bg-gray-100 ">
        <div className="container mx-auto py-8">
          <div className="text-center mb-4">
            <h4 className="text-xl font-semibold">Sign Up For Newsletters</h4>
            <p>
              Get E-mail updates about our latest shop and{" "}
              <span className="text-blue-500">special offers</span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Your email address"
              className="border p-2 rounded-l-lg focus:outline-none"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-r-lg">
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
