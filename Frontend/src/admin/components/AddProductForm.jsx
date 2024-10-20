import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function AddProductForm() {
  const [image, setImage] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    setImage(URL.createObjectURL(acceptedFiles[0]));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <form className="min-w-full bg-white rounded-2xl overflow-hidden flex gap-10 p-5 font-bold">
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h2>Product Name</h2>
          <input
            className="border border-black rounded-md px-5 py-2 placeholder:text-[16px] placeholder:text-[#79767C] placeholder:font-thin"
            placeholder="Type name here"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2>Description</h2>
          <textarea
            className="border border-black rounded-md px-5 py-2 min-h-[180px] placeholder:text-[16px] placeholder:text-[#79767C] placeholder:font-thin resize-none"
            placeholder="Type Description here"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2>Category</h2>
          <input
            className="border border-black rounded-md px-5 py-2 placeholder:text-[16px] placeholder:text-[#79767C] placeholder:font-thin"
            placeholder="Type Category here"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2>Brand Name</h2>
          <input
            className="border border-black rounded-md px-5 py-2 placeholder:text-[16px] placeholder:text-[#79767C] placeholder:font-thin"
            placeholder="Type brand name here"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2>Stock Quantity</h2>
          <input
            className="border border-black rounded-md px-5 py-2 placeholder:text-[16px] placeholder:text-[#79767C] placeholder:font-thin"
            placeholder="Type Quantity here"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2>Sale Price</h2>
          <input
            className="border border-black rounded-md px-5 py-2 placeholder:text-[16px] placeholder:text-[#79767C] placeholder:font-thin"
            placeholder="Type Price here"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2>Tags</h2>
          <textarea
            className="border border-black rounded-md px-5 py-2 resize-none placeholder:text-[16px] placeholder:text-[#79767C] placeholder:font-thin"
            placeholder="Type Tags here"
            type="text"
          />
        </div>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <div className="w-[428px] h-[428px] flex items-center bg-[#c8c8c8] rounded-2xl">
          <img className="w-full" src={image} alt="" />
        </div>
        <div>
          <h2>Product Gallery</h2>
          <div
            className="w-full h-[200px] rounded-xl mt-2 font-normal text-[#70706E] border border-dashed border-black flex justify-center items-center"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
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
        </div>
      </div>
    </form>
  );
}

export default AddProductForm;
