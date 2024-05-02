import { useSearchParams } from "react-router-dom";

function FilterDropDown({ option, filterField }) {
  let [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get(filterField) || "ALL";

  function handleSubmit(e) {
    e.preventDefault();

    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
    // setSearchParams({ category: e.target.value });
  }

  return (
    <select
      value={value}
      className="input-primary py-2 pr-10 pl-4 text-xs bg-secondary-0"
      onChange={handleSubmit}
    >
      {option.map((option) => (
        <option value={option.value} key={option.value}>
          {option.lable}
        </option>
      ))}
    </select>
  );
}

export default FilterDropDown;
