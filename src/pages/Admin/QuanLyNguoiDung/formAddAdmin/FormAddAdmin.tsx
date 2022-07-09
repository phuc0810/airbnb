import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";

type Props = {};

function FormAddAdmin(props: Props) {
  const handleOnChangeDate: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    let birthday = dateString;
    formik.setFieldValue("birthday", birthday);
    console.log(dateString);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      type: "",
      address: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex -mx-3 flex-wrap">
        {/* //!input tên */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">Tên</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="text"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Tên"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
        {/* //!input email */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">email</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="tel"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Số điện thoại"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {/* //!input password */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">password</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="tel"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Số điện thoại"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {/* //!input phone */}

        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">phone</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="tel"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Số điện thoại"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {/* //!input birthday */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">birthday</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <DatePicker
              format={"DD/MM/YYYY"}
              onChange={handleOnChangeDate}
              onBlur={formik.handleBlur}
              name="birthday"
              className="w-2/3 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 bg-white"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormAddAdmin;
