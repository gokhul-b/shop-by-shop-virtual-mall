import React, { useState } from "react";
import axios from "axios";

const AddProduct = ({ onClose }) => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [images2, setImages2] = useState("");
  const [images3, setImages3] = useState("");
  const [images4, setImages4] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleImageChange = async (e) => {
    const fr = new FileReader();
    await fr.readAsDataURL(e.target.files[0]);
    fr.onloadend = () => {
      setImages(fr.result);
    };
  };
  const handleImageChange2 = async (e) => {
    const fr = new FileReader();
    await fr.readAsDataURL(e.target.files[0]);
    fr.onloadend = () => {
      setImages2(fr.result);
    };
  };

  const handleImageChange3 = async (e) => {
    const fr = new FileReader();
    await fr.readAsDataURL(e.target.files[0]);
    fr.onloadend = () => {
      setImages3(fr.result);
    };
  };

  const handleImageChange4 = async (e) => {
    const fr = new FileReader();
    await fr.readAsDataURL(e.target.files[0]);
    fr.onloadend = () => {
      setImages4(fr.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name: productName,
      description: description,
      category: category,
      subcategory: subcategory,
      price: price,
      quantity: quantity,
      images: images,
    };

    console.log(productData);

    try {
      const response = await axios.post(
        "http://localhost:3004/products",
        productData
      );

      if (response.status === 201) {
        console.log("Data sent successfully");
        onClose();
      } else {
        console.error("Error adding product");
      }
    } catch (error) {
      console.error("Error adding product", error);
    }
  };
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-xl font-semibold">Add Product</h2>
            <button className="bg-red-400 px-2 rounded-md " onClick={onClose}>
              X
            </button>
          </div>
          <hr className="mb-2" />
          <form onSubmit={handleSubmit}>
            <div className="w-full flex py-3">
              <div className="w-[400px] p-4">
                <div className="flex flex-col justify-center items-center space-y-4">
                  <label className="w-[200px] h-[200px] relative block  text-black py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 cursor-pointer">
                    <span className="absolute inset-0 flex items-center justify-center">
                      {images ? "" : "+"}
                    </span>
                    <input
                      type="file"
                      name="image"
                      onChange={handleImageChange}
                      className="opacity-0 w-full h-full cursor-pointer absolute inset-0"
                    />
                    <img src={images} alt="" />
                  </label>
                  <div className="flex space-x-4">
                    <label className="w-[100px] h-[100px] relative block  text-black py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 cursor-pointer">
                      <span className="absolute inset-0 flex items-center justify-center">
                        {images2 ? "" : "+"}
                      </span>
                      <input
                        type="file"
                        name="image"
                        onChange={handleImageChange2}
                        className="opacity-0 w-full h-full cursor-pointer absolute inset-0"
                      />
                      <img src={images2} alt="" />
                    </label>
                    <label className=" w-[100px] h-[100px] relative block  text-black py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 cursor-pointer">
                      <span className="absolute inset-0 flex items-center justify-center">
                        {images3 ? "" : "+"}
                      </span>
                      <input
                        type="file"
                        name="image"
                        onChange={handleImageChange3}
                        className="opacity-0 w-full h-full cursor-pointer absolute inset-0"
                      />
                      <img src={images3} alt="" />
                    </label>
                    <label className="w-[100px] h-[100px] relative block  text-black py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 cursor-pointer">
                      <span className="absolute inset-0 flex items-center justify-center">
                        {images4 ? "" : "+"}
                      </span>
                      <input
                        type="file"
                        name="image"
                        onChange={handleImageChange4}
                        className="opacity-0 w-full h-full cursor-pointer absolute inset-0"
                      />
                      <img src={images4} alt="" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-[500px] flex flex-col space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Product name"
                  className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                <div className="flex space-x-4">
                  <select
                    placeholder="Category"
                    name="category"
                    className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-gray-400"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Dry Fruits">Dry Fruits</option>
                    <option value="Arts & Crafts">Arts & Crafts</option>
                  </select>
                  <select
                    name="subCategory"
                    placeholder="Sub category"
                    className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-gray-400"
                    value={subcategory}
                    onChange={(e) => setSubcategory(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Cashews">Cashews</option>
                    <option value="Grapes">Grapes</option>
                    <option value="Almonds">Almonds</option>
                  </select>
                </div>
                <div className="flex space-x-4">
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Available Quantity"
                    className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="w-full h-24 px-5 py-3 border border-gray-300 rounded-md text-base resize-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <div
                  onClick={handleSubmit}
                  className="bg-blue-900 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-800"
                >
                  Add Product
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
