// title, des, category, tags, budget, deadline
// input : text || number
// category => select option
// tags => multi input
// deadline => date picker

// ? title => 8 chars, password : 8, Aa14@#, .. => (validation)

// ! Front-end : neccery, not efficient => FORMIK, REACT-HOOK-FORM => (SIMPLE TO LEARN, OPTIMUM) => که می شه دورش زد بیام از پستمن درخواست بفرستیم
// ! Back-end : OK!

import { useForm } from "react-hook-form";
import TextFieldHookForm from "../../ui/TextFieldHookForm";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import Loader from "../../ui/Loader";
import RhfSelect from "../../ui/RhfSelect";
import useCategories from "../../hooks/useCategory";
import { useCreateProject } from "./useCreateProject";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit }) {
  // ! useQuery
  const { categories, transformedCategories, isLoading } = useCategories();
  const { createProject, isCreating } = useCreateProject();
  const { editProject, isEditing } = useEditProject();

  // ! state
  const [tags, setTags] = useState(projectToEdit?.tags || ["js"]);
  const [value, setValue] = useState(new Date(projectToEdit?.deadline || ""));

  let defaultValues = {};

  if (projectToEdit) {
    defaultValues = {
      title: projectToEdit.title,
      description: projectToEdit.description,
      budget: projectToEdit.budget,
      category: projectToEdit.category._id,
      tags: projectToEdit.tags,
      deadline: projectToEdit.deadline,
    };
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });

  const onHanSub = (data) => {
    const newProject = {
      ...data,
      tags,
      deadline: new Date(value).toISOString(),
    };

    if (projectToEdit) {
      editProject(
        { newProject, id: projectToEdit._id },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onHanSub)}>
      <TextFieldHookForm
        lable="عنوان"
        type="text"
        register={register}
        name="title"
        required={true}
        errors={errors}
        validitonsSchema={{
          required: {
            value: true,
            message: "عنوان ضروری است",
          },
        }}
      ></TextFieldHookForm>

      <TextFieldHookForm
        lable="توضیحات"
        type="text"
        register={register}
        name="description"
        required={true}
        errors={errors}
        validitonsSchema={{
          required: {
            value: true,
            message: "توضیحات ضروری است",
          },
          minLength: {
            value: 10,
            message: "طول عنوان نامعتبر است",
          },
        }}
      ></TextFieldHookForm>

      <TextFieldHookForm
        lable="بودجه"
        type="number"
        register={register}
        name="budget"
        required={true}
        errors={errors}
        validitonsSchema={{
          required: {
            value: true,
            message: "بودجه ضروری است",
          },
        }}
      ></TextFieldHookForm>

      <RhfSelect
        lable="دسته بندی"
        register={register}
        name="category"
        required={true}
        errors={errors}
        option={categories}
        validitonsSchema={{
          required: {
            value: true,
            message: "انتخاب ضروری است",
          },
        }}
      />

      <div className="mb-6">
        <label className="text-xs px-1 mb-1" htmlFor="tags">
          تگ محصولات
        </label>
        <TagsInput
          id="tags"
          value={tags}
          onChange={setTags}
          name="tags"
          placeHolder="تگ ها را بنویسید"
        />
      </div>

      <div className="mb-8">
        <label className="text-xs px-1 mb-1" htmlFor="date">
          ددلاین
        </label>

        <DatePicker
          value={value}
          onChange={setValue}
          calendar={persian}
          locale={persian_fa}
          inputClass="input-primary"
          containerClassName="w-full"
          animations={[
            transition({
              from: 35,
              transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
            }),
          ]}
        />
      </div>

      <button className="btn-primary w-full" type="submit">
        {isCreating || isEditing ? (
          <Loader color="white" height="24" />
        ) : (
          <p>تایید</p>
        )}
      </button>
    </form>
  );
}

export default CreateProjectForm;
