import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseCart from "../../../Hooks/UseCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = UseCart();

  const { name, image, price, recipe, _id } = item;

  // Add to cart function
  const handleAddToCart = async () => {
    if (user && user?.email) {
      const menuItem = {
        menuId: _id,
        user: user?.email,
        name,
        image,
        price,
      };
      await axiosSecure.post("/carts", menuItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Added to cart!",
            icon: "success",
          });
          // Refetch the cart
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You're not logged in?",
        text: "Do you want to login first?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: pathname });
        }
      });
    }
  };
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <p className="bg-black text-white absolute right-0 mr-4 mt-4 px-4 py-1 rounded-sm">
        {price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            className="btn  border-0 border-b-4 border-black hover:bg-black/75 hover:text-white/95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
