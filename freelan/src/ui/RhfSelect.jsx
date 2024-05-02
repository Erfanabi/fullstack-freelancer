function RhfSelect({
  lable,
  children,
  option,
  register,
  name,
  required,
  validitonsSchema,
  errors,
}) {
  return (
    <div className="flex flex-col w-full mb-6">
      <label className="text-xs px-1 mb-1">
        {lable}
        <span className="text-error mr-0.5">{required ? "*" : ""}</span>
      </label>

      <select
        className="input-primary pr-10"
        id={name}
        {...register(name, validitonsSchema)}
      >
        {option.map((option) => (
          <option value={option.value} key={option.value}>
            {option.lable}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <p className="text-error text-xs">{errors[name]?.message}</p>
      )}
      {children}
    </div>
  );
}

export default RhfSelect;
