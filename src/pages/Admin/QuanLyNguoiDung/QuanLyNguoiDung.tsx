import React from "react";
import Button from "@mui/material/Button";
import AddAdmin from "./addAdmin/AddAdmin";

type Props = {};

function QuanLyNguoiDung(props: Props) {
  return (
    <div className="container">
      <AddAdmin/>
    </div>
  );
}

export default QuanLyNguoiDung;
