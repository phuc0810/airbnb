import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { UseDispatchThongTinNguoiDung } from "../../../../../redux/QuanLyNguoiDung/QuanLyNguoiDung.selector";
import moment from "moment";

type Props = {
  idUser: string;
};

function FormUpdateUser(props: Props) {
  const dispatch = useDispatch<any>();
  let { thongTinNguoiDung } = UseDispatchThongTinNguoiDung(props.idUser);
  console.log(thongTinNguoiDung);

  const handleOnChangeDate: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    formik.setFieldValue("birthday", date?.toISOString());
  };

  let handleChangeGender = (event: any) => {
    console.log(event.target.value);
    formik.setFieldValue('gender', Boolean(event.target.value));
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: thongTinNguoiDung?.name || '',
      email: thongTinNguoiDung?.email || '',
      password: thongTinNguoiDung?.password || '',
      phone: thongTinNguoiDung?.phone || '',
      birthday: thongTinNguoiDung?.birthday || null,
      gender: thongTinNguoiDung?.gender || null,
      type: thongTinNguoiDung?.type || null,
      address: thongTinNguoiDung?.address || '',
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className="form-add-admin" onSubmit={formik.handleSubmit}>
      <div className="flex -mx-3 flex-wrap">
        {/* //!input tên */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1"></label>
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
              value={formik.values.name}
            />
          </div>
          {/* <Input
            label="Ten",
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
           /> */}
        </div>
        {/* //!input email */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">email</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="email"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
        </div>

        {/* //!input password */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">mật khẩu</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="password"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
        </div>

        {/* //!input phone */}

        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">Số điện thoại</label>
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
              value={formik.values.phone}
            />
          </div>
        </div>

        {/* //!input địa chỉ */}

        <div className="w-full px-3 mb-5">
          <label className="text-xs font-semibold px-1">Địa chỉ</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="text"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Địa chỉ"
              name="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
          </div>
        </div>

        {/* //!input birthday */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">sinh nhật</label>
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
              popupStyle={{
                zIndex: 2000,
              }}
              value={formik.values.birthday ? moment(formik.values.birthday) : null}
              // defaultPickerValue={moment(formik.values.birthday)}
            />
          </div>
        </div>

        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">Giới tính</label>
            {/* input email */}
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg" />
              </div>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  // defaultValue={formik.values.gender}
                  value={formik.values.gender}
                  onChange={handleChangeGender}
                  name="radio-buttons-group"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="Nữ"
                  />
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Nam"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">Quyền Truy Cập</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg" />
              </div>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  name="radio-buttons-group"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <FormControlLabel
                    value="ADMIN"
                    control={<Radio />}
                    label="ADMIN"
                    name="type"
                  />
                  <FormControlLabel
                    value="CLIENT"
                    control={<Radio />}
                    label="CLIENT"
                    name="type"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-4 bg-gray-500" style={{ height: "2px" }} />
      <Button variant="contained" type="submit" className="float-right">
        submit
      </Button>
    </form>
  );
}

export default FormUpdateUser;
