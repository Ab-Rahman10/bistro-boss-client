import img1 from "../../../assets/home/slide3.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";

const Recommend = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-20">
      <SectionTitle
        subTitle={"--- Should try ---"}
        title={"Chef Recommends"}
      ></SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product 1 */}
        <div className="border rounded-lg shadow-lg p-4 text-center">
          <img
            src={img1}
            alt="Caesar Salad"
            className="rounded-lg mb-4 w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover object-center"
          />
          <h3 className="text-lg font-semibold mb-2">Caesar Salad</h3>
          <p className="text-gray-600 mb-4">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
            ADD TO CART
          </button>
        </div>

        {/* Product 2 */}
        <div className="border rounded-lg shadow-lg p-4 text-center">
          <img
            src={img2}
            alt="Caesar Salad"
            className="rounded-lg mb-4 w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover object-center"
          />
          <h3 className="text-lg font-semibold mb-2">Caesar Salad</h3>
          <p className="text-gray-600 mb-4">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
            ADD TO CART
          </button>
        </div>

        {/* Product 3 */}
        <div className="border rounded-lg shadow-lg p-4 text-center">
          <img
            src={img3}
            alt="Caesar Salad"
            className="rounded-lg mb-4 w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover object-center"
          />
          <h3 className="text-lg font-semibold mb-2">Caesar Salad</h3>
          <p className="text-gray-600 mb-4">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
