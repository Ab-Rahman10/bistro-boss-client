const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <>
      <div className="flex">
        <img
          className="w-20 h-20 rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]"
          src={image}
        />
        <div className="ml-2">
          <h4 className="uppercase text-lg">{name}------------</h4>
          <p className="text-sm mt-1">{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p>
      </div>
    </>
  );
};

export default MenuItem;
