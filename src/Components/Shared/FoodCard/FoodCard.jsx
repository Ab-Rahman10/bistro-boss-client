const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
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
          <button className="btn  border-0 border-b-4 border-black hover:bg-black/75 hover:text-white/95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
