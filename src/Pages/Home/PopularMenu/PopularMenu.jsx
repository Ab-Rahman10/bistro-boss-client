import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import MenuItem from "../../../Components/Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularData = data.filter((item) => item.category === "popular");
        setMenu(popularData);
      });
  }, []);
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-7">
      <SectionTitle
        subTitle={"---Check it out---"}
        title={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
