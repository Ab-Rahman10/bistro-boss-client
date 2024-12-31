import { Link } from "react-router-dom";
import Cover from "../../../Components/Shared/Cover/Cover";
import MenuItem from "../../../Components/Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="py-10">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4 text-black hover:text-yellow-500 transition">
          Order now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
