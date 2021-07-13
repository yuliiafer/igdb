import { useFilterContext } from "../context/filter_context";
import Content from "./Content";
import ListView from "./ListView";
import Loading from "./Loading";

const List = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return (
      <>
        <h5 style={{ textTransform: "none" }}>
          Sorry, no games matched your search...
        </h5>
        <p>Wait for the data to load or refresh the page...</p>
        <Loading />
      </>
    );
  }
  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <Content products={products}>game list</Content>;
};

export default List;
