import useCategories from "../../../hooks/useCategory";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";

const sortByOptions = [
  {
    value: "latest",
    lable: "مرتب سازی (جدید ترین)",
  },
  {
    value: "earliest",
    lable: "مرتب سازی (قدیمی ترین)",
  },
];

const statusOptions = [
  { value: "", lable: "همه" },
  { value: "OPEN", lable: "باز" },
  { value: "CLOSED", lable: "بسته" },
];

function ProjectsHeader() {
  const { transformedCategories, isLoading } = useCategories();

  return (
    <div className="lg:flex lg:items-center lg:justify-between text-secondary-600 mb-8">
      <h1 className="text-lg font-bold mb-5 lg:mb-0">
        لیست پروژه ها
      </h1>

      <div className="flex flex-col w-full gap-2 sm:!flex-row-reverse lg:!w-fit">
        <FilterDropDown
          filterField="category"
          option={[
            { value: "", lable: "دسته بندی (همه)" },
            ...transformedCategories,
          ]}
        />

        <FilterDropDown filterField="sort" option={sortByOptions} />

        <Filter filterField="status" option={statusOptions} />
      </div>
    </div>
  );
}

export default ProjectsHeader;
