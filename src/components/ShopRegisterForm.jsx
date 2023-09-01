const ShopRegisterForm = () => {
  return (
    <div className="w-full my-24">
      <div className="w-1/2 mx-auto bg-red-100 px-8 py-8 rounded-lg">
        <form action="" className="flex flex-col space-y-8">
          <h1 className="text-center text-2xl font-bold text-gray-700">
            Build here!
          </h1>
          <div className="flex justify-between space-x-4">
            <input
              type="text"
              placeholder="Shop name"
              className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
            />
            <input
              type="text"
              placeholder="Owner name"
              className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
            />
          </div>
          <div className="flex justify-between space-x-4">
            <select
              type="text"
              placeholder="Shop category"
              className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-gray-500"
            >
              <option value="Select" className="text-gray-300">
                Select Category
              </option>
              <option value="fashion">Fashion</option>
              <option value="dryfruits">Dry Fruits</option>
              <option value="arts & crafts">Arts & Crafts</option>
              <option value="beauty">Beauty and Body Care</option>
              <option value="toys">Toys & Games</option>
            </select>
            <select
              type="text"
              className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-gray-500"
              placeholder="Sub category"
            >
              <option value="Select">Select Sub Category</option>
              <option value="cashews">Cashews</option>
              <option value="almonds">Almonds</option>
              <option value="dry grapes">Dry Grapes</option>
              <option value="pista">Pista</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Address Line 1"
            className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
          />
          <input
            type="text"
            placeholder="Address Line 2"
            className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
          />
          <div className="flex justify-between space-x-4">
            <input
              type="text"
              placeholder="State"
              className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
            />
            <input
              type="text"
              placeholder="District"
              className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
            />
          </div>
          <div className="flex justify-between space-x-4">
            <input
              type="text"
              placeholder="City"
              className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
            />
            <input
              type="number"
              placeholder="Pincode"
              className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
            />
          </div>
          <div className="flex justify-between space-x-4">
            <input
              type="tele"
              name=""
              id=""
              placeholder="Phone number"
              className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
            />
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
            />
          </div>
          <div className="flex justify-between space-x-4">
            <input
              type="text"
              placeholder="GSTIN"
              className="w-3/4 border border-gray-300 px-3 py-2.5 rounded-lg"
            />
            <a
              href="/merchantdashboard"
              className="w-1/4 border bg-green-500 px-3 py-2.5 rounded-lg text-center"
            >
              Build Now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopRegisterForm;
