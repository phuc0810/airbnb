import React from "react";

type Props = {
  label: string;
  value: string;
  onBlur: any;
  onChange: any;
};

function Input({ label, value, onBlur, onChange }: Props) {
  return (
    <>
      <label className="text-xs font-semibold px-1">{label}</label>
      <div className="flex">
        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
          <i className="mdi mdi-account-outline text-gray-400 text-lg" />
        </div>
        <input
          type="text"
          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
          placeholder="Tên"
          name="name"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
    </>
  );
}

export default Input;
