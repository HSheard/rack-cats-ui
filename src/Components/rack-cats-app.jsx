import Categories from "./Categories/Categories";
import Header from "./Header/header";

function RackCatsApp() {
  console.log("rack cats app component");
  return (
    <div className="rack-cats-app">
      <Header />
      <Categories />
    </div>
  );
}

export default RackCatsApp;
