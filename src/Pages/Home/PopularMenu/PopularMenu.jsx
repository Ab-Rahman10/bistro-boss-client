import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import MenuItem from "../../../Components/Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-20">
      <SectionTitle
        subTitle={"--- Don't miss ---"}
        title={"Today's offer"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
