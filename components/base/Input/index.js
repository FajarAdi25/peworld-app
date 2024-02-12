import React from "react";

const Input = ({ ...props }) => {
  return (
    <div className="mt-5">
      <label className="block text-sm font-medium leading-6 text-gray-400">
        {props.label}
      </label>

      <input
        type="text"
        name={props.name}
        onChange={props.onChange}
        required
        placeholder={props.placeholder}
        value={props.value}
        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <div className="error-message text-sm font-small text-red-600">
        {formik.errors.email}
      </div>
    </div>
  );
};

export default Input;
