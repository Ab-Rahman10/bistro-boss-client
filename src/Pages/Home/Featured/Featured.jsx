import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      style={{ backgroundImage: `url(${featuredImg})` }}
      className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto mb-8 pb-16 pt-5 px-24 bg-fixed text-white"
    >
      <SectionTitle
        subTitle={"---Check it out---"}
        title={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="flex items-center gap-8 bg-slate-500 bg-opacity-70 ">
        <img className="w-96" src={featuredImg} />
        <div>
          <span className="text-sm">March 20, 2023</span>
          <h4 className="text-lg"> WHERE CAN I GET SOME?</h4>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            laboriosam esse dicta porro illum voluptatem perspiciatis natus
            sequi id. Voluptatum atque fugiat enim illo qui, deleniti ducimus
            architecto, aliquam, excepturi asperiores corporis. Tempore deleniti
            ut ratione nam et recusandae totam.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
