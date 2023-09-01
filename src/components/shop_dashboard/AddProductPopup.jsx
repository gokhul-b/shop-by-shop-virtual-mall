// import React, { useState } from "react";
// import axios from "axios";

// const AddProductPopup = ({ onClose }) => {
//   // State to manage form data
//   const [productName, setProductName] = useState("");
//   const [description, setDescription] = useState("");
//   const [images, setImages] = useState([]);
//   const [category, setCategory] = useState("");
//   const [subcategory, setSubcategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [quantity, setQuantity] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProductDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const imageFiles = Array.from(e.target.files);
//     setImages(imageFiles);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", productName);
//     formData.append("description", description);
//     formData.append("category", category);
//     formData.append("subcategory", subcategory);
//     images.forEach((imageFile) => {
//       formData.append("images", imageFile);
//     });

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/products",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.status === 201) {
//         // Handle success
//         // onClose();
//       } else {
//         // Handle error
//         console.error("Error adding product");
//       }
//     } catch (error) {
//       console.error("Error adding product", error);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <div className="flex justify-between items-center mb-4 px-1">
//           <h2 className="text-xl font-semibold">Add Product</h2>
//           <button className="bg-red-400 px-2 rounded-md" onClick={onClose}>
//             X
//           </button>
//         </div>
//         <hr className="mb-2" />
//         <form onSubmit={handleSubmit}>
//           <div className="w-full flex py-3">
//             <div className="w-[400px] p-4">
//               <div className="flex flex-col justify-center items-center">
//                 <label className="w-[200px] h-[200px] relative block  text-black py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 cursor-pointer">
//                   <span className="absolute inset-0 flex items-center justify-center">
//                     +
//                   </span>
//                   <input
//                     type="file"
//                     name="image"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="opacity-0 w-full h-full cursor-pointer absolute inset-0"
//                   />
//                 </label>
//                 <div className="flex space-x-4">
//                   <label className="w-[100px] h-[100px] relative block  text-black py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 cursor-pointer">
//                     <span className="absolute inset-0 flex items-center justify-center">
//                       +
//                     </span>
//                     <input
//                       type="file"
//                       name="image"
//                       accept="image/*"
//                       onChange={handleImageChange}
//                       className="opacity-0 w-full h-full cursor-pointer absolute inset-0"
//                     />
//                   </label>
//                   <label className=" w-[100px] h-[100px] relative block  text-black py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 cursor-pointer">
//                     <span className="absolute inset-0 flex items-center justify-center">
//                       +
//                     </span>
//                     <input
//                       type="file"
//                       name="image"
//                       accept="image/*"
//                       onChange={handleImageChange}
//                       className="opacity-0 w-full h-full cursor-pointer absolute inset-0"
//                     />
//                   </label>
//                   <label className="w-[100px] h-[100px] relative block  text-black py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 cursor-pointer">
//                     <span className="absolute inset-0 flex items-center justify-center">
//                       +
//                     </span>
//                     <input
//                       type="file"
//                       name="image"
//                       accept="image/*"
//                       onChange={handleImageChange}
//                       className="opacity-0 w-full h-full cursor-pointer absolute inset-0"
//                     />
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="w-[500px] flex flex-col space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Product name"
//                 className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
//                 value={productName}
//                 onChange={(e) => setProductName(e.target.value)}
//               />
//               <div className="flex space-x-4">
//                 <select
//                   placeholder="Category"
//                   name="category"
//                   className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-gray-400"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                 >
//                   <option value="">Select</option>
//                   <option value="">Fashion</option>
//                   <option value="">Dry Fruits</option>
//                   <option value="">Arts & Crafts</option>
//                 </select>
//                 <select
//                   name="subCategory"
//                   placeholder="Sub category"
//                   className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-gray-400"
//                   value={subcategory}
//                   onChange={(e) => setSubcategory(e.target.value)}
//                 >
//                   <option value="">Select</option>
//                   <option value="">Cashews</option>
//                   <option value="">Grapes</option>
//                   <option value="">Almonds</option>
//                 </select>
//               </div>
//               <div className="flex space-x-4">
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="Price"
//                   className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
//                   value={}
//                   onChange={(e) => setPrice(e.target.value)}
//                 />
//                 <input
//                   type="number"
//                   name="quantity"
//                   placeholder="Available Quantity"
//                   className="w-full border border-gray-300 px-3 py-2.5 rounded-lg"
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <textarea
//                 type="text"
//                 name="description"
//                 placeholder="Description"
//                 className="w-full h-24 px-5 py-3 border border-gray-300 rounded-md text-base resize-none"
//                 onChange={handleInputChange}
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-900 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-800"
//               >
//                 Add Product
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProductPopup;
