function TextFieldHookForm({
  lable,
  placeholder,
  type = "text",
  children,
  register,
  name,
  required,
  validitonsSchema,
  errors,
}) {
  return (
    <div className="flex flex-col w-full mb-6">
      <label className="text-xs font-semibold px-1 mb-1">
        {lable}
        <span className="text-error mr-0.5">{required ? "*" : ""}</span>
      </label>
      <input
        className="input-primary"
        placeholder={placeholder}
        type={type}
        id={name}
        {...register(name, validitonsSchema)}
      />
      {errors && errors[name] && (
        <p className="text-error text-xs">{errors[name]?.message}</p>
      )}
      {children}
    </div>
  );
}

export default TextFieldHookForm;
