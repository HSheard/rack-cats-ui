import { useEffect, useState } from "react";

function Filter({ toggleFilter, category, filteredCategories }) {
  const [active, setActive] = useState(false);

  const action = (category) => {
    toggleFilter(category);
  };

  useEffect(() => {
    setActive(filteredCategories.includes(category) ? true : false);
  }, [filteredCategories]);

  return (
    <div
      className={"category-filter" + (active ? " active" : "")}
      onClick={() => action(category)}
    >
      {category}
    </div>
  );
}

export default Filter;
