import { useSearchParams } from "react-router-dom";

function Filter({ option, filterField }) {
  let [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || option.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
    // setSearchParams({ category: e.target.value });
  }
  return (
    <div className="flex text-xs items-center gap-x-2">
      <span className="font-bold">وضعیت</span>
      <div className="bg-secondary-0 flex items-center gap-x-2 p-1 text-xs border-2 border-gray-200 rounded-lg">
        {option.map((option) => {
          const active = option.value === currentFilter;
          return (
            <button
              key={option.value}
              onClick={() => handleClick(option.value)}
              disabled={option.value === currentFilter}
              className={`whitespace-nowrap rounded-md px-4 py-1 transition-all duration-300 
          ${
            active
              ? "!bg-primary-900 text-white"
              : "bg-secondary-0 text-secondary-800"
          }`}
            >
              {option.lable}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
