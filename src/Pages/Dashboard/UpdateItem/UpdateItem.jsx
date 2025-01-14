import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMAGE_HOSTING_KEY
}`;
const UpdateItem = () => {
  const item = useLoaderData();

  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //   now send the menuitem to the server with image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
      console.log(menuRes.data);
      // show success toast
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Item has been Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
  };
  return (
    <div>
      <SectionTitle subTitle="What's new" title="Update an Item"></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-4 bg-gray-50 rounded-lg shadow-md"
      >
        {/* Recipe Name */}
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text font-semibold">Recipe Name</span>
          </label>
          <input
            defaultValue={item.name}
            {...register("name", { required: true })}
            id="name"
            type="text"
            placeholder="Enter Recipe Name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Categories and Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category Selector */}
          <div className="form-control">
            <label htmlFor="category" className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <select
              defaultValue={item.category}
              {...register("categories", { required: true })}
              id="category"
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select a Category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soups">Soups</option>
              <option value="desserts">Desserts</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>

          {/* Price Input */}
          <div className="form-control">
            <label htmlFor="price" className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              defaultValue={item.price}
              {...register("price", { required: true })}
              id="price"
              type="number"
              placeholder="Enter Price"
              className="input input-bordered w-full"
              min="0"
            />
          </div>
        </div>

        {/* Recipe Details */}
        <div className="form-control">
          <label htmlFor="details" className="label">
            <span className="label-text font-semibold">Recipe Details</span>
          </label>
          <textarea
            defaultValue={item.recipe}
            {...register("details", { required: true })}
            id="details"
            className="textarea textarea-bordered w-full"
            placeholder="Provide details about the recipe"
            rows="4"
          ></textarea>
        </div>

        {/* File Upload */}
        <div className="form-control">
          <label htmlFor="image" className="label">
            <span className="label-text font-semibold">Upload Image</span>
          </label>
          <input
            {...register("image", { required: true })}
            id="image"
            type="file"
            className="file-input"
            accept="image/*"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn bg-[#2B3440] text-gray-200 hover:text-black mt-4"
        >
          Update a Recipe
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;
