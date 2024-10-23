import 'react-image-crop/dist/ReactCrop.css'
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useAddProductMutation, useGetCategoriesQuery } from "../../services/adminFethApi";
import ImageCroper from "./ImageCroper";
import * as Yup from "yup";

function AddProductForm() {
  //--------------> Image drop zone <-------------------//
  // States
  const [profileImage, setProfileImage] = useState(null); // to display image
  const [thumbnail, setThumbnail] = useState([]); // for small images

  // function to handle image
  const onDrop = useCallback(
    (acceptedFiles) => {
      const imageUrls = acceptedFiles.map((file) => ({
        url: URL.createObjectURL(file),
        file,
      }));

      setFormData((prev) => ({
        ...prev,
        image: [...prev.image, ...acceptedFiles], // for formdata
      }));

      setThumbnail((prev) => [...prev || [], ...imageUrls]); // to set thumbnail

      if (profileImage === null)
        setProfileImage(URL.createObjectURL(acceptedFiles[0]));
    },
    [profileImage]
  );
  // hook for image drop
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // useEffect to clean objectUrl
  useEffect(() => {
    return () => {
      if (profileImage) {
        URL.revokeObjectURL(profileImage);
      }
    };
  }, []);

  //--------------> Form Area <-------------------//
  // Mutations

  const [addProduct, { data, isSuccess, isLoading, isError, error }] =
    useAddProductMutation();
  const {data:categoryData} = useGetCategoriesQuery();

  // States
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    category: "",
    size: [],
    stock: "",
    price: "",
    image: [],
  });
  const [modalOpen,setModalOpen] = useState(false);
  const [selectedIndex,setSelectedIndex] = useState(null);
  const [formError,setFormError] = useState({});
  // function to handdle form change
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // function to handle checkbox change
  function handleCheckboxChange(e){
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      size: checked 
        ? [...prev.size, value] 
        : prev.size.filter((size) => size !== value) 
    }));
  }
  // validate schema 
  const validateSchema = Yup.object({
    productName: Yup.string().required("Product Name is Required"),
    description: Yup.string().required("Descritption is Required"),
    category: Yup.string().required("category is Required"),
    size: Yup.array().min(1, "At least one size is required").required("Size is Required"),
    stock: Yup.string().required("Stock is Required"),
    price: Yup.string().required("Price is Required"),
    image:Yup.array().min(3, "At least Three image is required").required("Image is Required")
  });

  // function handle submit
  async function handdleSubmit(e) {
    try {
      e.preventDefault();
      await validateSchema.validate(formData, { abortEarly: false });
      const payload = new FormData();
      payload.append("productName", formData.productName);
      payload.append("description", formData.description);
      payload.append("category", formData.category);
      payload.append("size", formData.size);
      payload.append("stock", formData.stock);
      payload.append("price", formData.price);
      formData.image.forEach((file) => {
        payload.append("file", file);
      });
      await addProduct(payload).unwrap();
        setFormData({
          productName: "",
          description: "",
          category: "",
          size: [],
          stock: "",
          price: "",
          image: [],
        })
        setFormError({})
        setProfileImage(null);
        setThumbnail([]);
    } catch (errors) {
      if (errors.inner) {
        const newErrors = {};
        errors.inner.forEach((error) => {
          return (newErrors[error.path] = error.message);
        });
        return setFormError(newErrors);
      }
      setFormError({});
    }
  }

  // function to handle Cancel
  function handleCancel(){

    setFormError({})
    setThumbnail([])
    setProfileImage(null)
    setFormData({
      productName: "",
      description: "",
      category: "",
      size: "",
      stock: "",
      price: "",
      image: [],
    })
  }


  // function to set cropped images
  function setCropedImage(croppedFile) {
    const imageUrl = URL.createObjectURL(croppedFile);
    setProfileImage(imageUrl);
  
    setFormData((prev) => {
      const updatedImages = [croppedFile];
      return { ...prev, image: updatedImages };
    });

    setThumbnail((prev) => {
      const updatedThumbnails = [...prev];
      updatedThumbnails[selectedIndex] = { url: imageUrl, file: croppedFile };
      return updatedThumbnails;
    });
  }

  return (
    <form
      onSubmit={handdleSubmit}
      className="min-w-full bg-white rounded-2xl overflow-hidden flex gap-10 p-5 font-bold"
    >
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h2>Product Name</h2>
          <input
            className="border border-black rounded-md px-5 py-2 placeholder:text-[16px] placeholder:text-[#79767C] placeholder:font-thin"
            placeholder="Type name here"
            type="text"
            name="productName"
            onChange={handleChange}
            value={formData.productName}
          />
           {formError.productName && (
            <span className="text-red-600">{formError.productName}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <h2>Description</h2>
          <textarea
            className="border border-black rounded-md px-5 py-2 min-h-[180px] placeholder:text-[16px] placeholder:text-[#79767C] placeholder:font-thin resize-none"
            placeholder="Type Description here"
            name="description"
            type="text"
            onChange={handleChange}
            value={formData.description}
          />
          {formError.description && (
            <span className="text-red-600">{formError.description}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <h2>Category</h2>
          <div className="border border-black rounded-md px-5 py-2">
            <select
              name="category"
              className="w-full bg-transparent focus:outline-none text-[#79767C] font-thin"
              onChange={handleChange}
              value={formData.category}
            >
              <option value="">Please select an option</option>
              {
                categoryData && categoryData.map((category) => <option key={category._id} value={category._id}>{category.categoryName}</option>)
              }
            </select>
          </div>
            {formError.category && (
            <span className="text-red-600">{formError.category}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <h2>Size</h2>

          <div className="flex gap-3 px-5 py-2 text-[#5e5d61] font-semibold">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              value="small"
              onChange={handleCheckboxChange}
              checked={formData.size.includes("small")}
            />
            
            Small
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              value="medium"
              onChange={handleCheckboxChange}
              checked={formData.size.includes("medium")}
            />
            Medium
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              value="large"
              onChange={handleCheckboxChange}
              checked={formData.size.includes("large")}
            />
            Large
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              value="extra large"
              onChange={handleCheckboxChange}
              checked={formData.size.includes("extra large")}
            />
            Extra Large
          </label>
          </div>

          {formError.size && (
            <span className="text-red-600">{formError.size}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <h2>Stock Quantity</h2>
          <input
            className="border border-black rounded-md px-5 py-2 placeholder:text-[16px] placeholder:text-[#79767C] placeholder:font-thin"
            placeholder="Type Quantity here"
            type="text"
            name="stock"
            onChange={handleChange}
            value={formData.stock}
          />

            {formError.stock && (
            <span className="text-red-600">{formError.stock}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <h2>Sale Price</h2>
          <input
            className="border border-black rounded-md px-5 py-2 placeholder:text-[16px] placeholder:text-[#79767C] placeholder:font-thin"
            placeholder="Type Price here"
            type="text"
            name="price"
            onChange={handleChange}
            value={formData.price}
          />
          {formError.price && (
            <span className="text-red-600">{formError.price}</span>
          )}
        </div>
      </div>
      <div className="p-5 flex flex-col gap-5 relative">
        <div className="w-[428px] h-[428px] flex items-center bg-[#c8c8c8] rounded-2xl overflow-hidden">
          <img className="w-full" src={profileImage} alt="" />
          <a onClick={() => setModalOpen(true)} className="text-[16px] absolute bg-[#c8c8c8] py-10 px-[5px] rounded-full top-1/5 left-2 text-black">
            <i className="fas fa-pen-to-square "></i>
          </a>
        </div>
        <div className="flex gap-2">
          {thumbnail && thumbnail.map((img, index) => (
            <div
              key={index}
              className="w-[100px] h-[100px] flex items-center bg-[#c8c8c8] rounded-2xl overflow-hidden "
            >
              <img
                src={img.url}
                alt="image"
                onClick={() => {
                  setSelectedIndex(index)
                  setProfileImage(img.url)
                }}
              />
            </div>
          ))}
        </div>
        <div>
          <h2>Product Gallery</h2>
          <div
            className="w-full h-[200px] rounded-xl mt-2 font-normal text-[#70706E] border border-dashed border-black flex justify-center items-center"
            {...getRootProps()}
          >
            <input {...getInputProps()} multiple accept="image/*" />
            {isDragActive ? (
              <div className=" text-center ">
                <i className="fa-solid fa-upload text-5xl mb-2"></i>
                <p>Drop the files here ...</p>
              </div>
            ) : (
              <div className=" text-center ">
                <i className="fa-solid fa-image text-5xl mb-2"></i>
                <p>Drop your images here, or click to select files</p>
              </div>
            )}
          </div>
          {formError.image && (
            <span className="text-red-600">{formError.image}</span>
          )}
        </div>
        <div className="flex gap-5">
          <button
            type="submit"
            className="bg-black text-white flex-1 py-3 rounded-lg "
          >
            {isLoading ? "Adding..." : "Add"}
          </button>
          <a
            onClick={handleCancel}
            className="border border-black text-center cursor-pointer text-black flex-1 py-3 rounded-lg "
          >
            Cancel
          </a>
        </div>
        {isError && (
          <span className="text-red-500">
            {error?.data?.message || "Upload failed"}
          </span>
        )}

        {isSuccess && <span className="text-green-500">{data.message}</span>}
      </div>
       {modalOpen && <ImageCroper updateProfile = {setCropedImage} imageSrc={profileImage} closeModal={() => setModalOpen(false)}/>}
    </form>
  );
}

export default AddProductForm;
