import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import {
  DataGrid,
  GridColDef,
  GridRowData,
  GridRowsProp,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import {
  useDispatchDanhSachNguoiDung,
  useSelectorQuanLyNguoiDung,
} from "../../../../redux/QuanLyNguoiDung/QuanLyNguoiDung.selector";
import _ from "lodash";
import { Row } from "antd";
import { useDispatch } from "react-redux";
import { quanLyNguoiDungAction } from "../../../../redux/QuanLyNguoiDung/QuanLyNguoiDung.reducer";
// ----------------//!icon----------------------
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import UpdateUser from "../UpdateUser/UpdateUser";
import { deleteNguoiDung } from "../../../../redux/QuanLyNguoiDung/QuanLyNguoiDung.thuink";

type Props = {};

function TableQuanLyNguoiDung(props: Props) {
  let { danhSachNguoiDung } = useDispatchDanhSachNguoiDung();
  console.log(danhSachNguoiDung);
  const dispatch = useDispatch<any>();

  const rows = danhSachNguoiDung ? [...danhSachNguoiDung] : [];

  let onchangePanigate = (event: React.ChangeEvent<unknown>, page: number) => {
    console.log(page);
    dispatch(
      quanLyNguoiDungAction.updateFilter({
        key: "page",
        value: page - 1,
      })
    );
  };

  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "phone",
      headerName: "Số điện thoại",
      width: 110,
    },
    {
      field: "birthday",
      headerName: "birthday",
      width: 110,
    },
    {
      field: "gender",
      headerName: "gender",
      width: 110,
      valueGetter: ({ value }) => (value ? "Nam" : "Nữ"),
    },
    {
      field: "address",
      headerName: "address",
      width: 150,
    },
    {
      field: "type",
      headerName: "type",
      width: 110,
    },
    {
      field: "avatar",
      headerName: "avatar",
      width: 110,
      renderCell: (params) => <img src={params.row.avatar} alt="" />,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex">
            <Button
              variant="text"
              onClick={() => {
                if (window.confirm("bạn có chắc muốn xóa ?")) {
                  dispatch(deleteNguoiDung(params.row._id));
                }
              }}
            >
              <DeleteIcon className="text-red-500" />
            </Button>
            <UpdateUser idUser={params.row._id} />
          </div>
        );
      },
    },
  ];
  

  return (
    <div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          loading={_.isEmpty(danhSachNguoiDung)}
          getRowId={(row) => row._id}
          hideFooter
          autoHeight
        />
      </Box>
      <Pagination count={50} color="primary" onChange={onchangePanigate} />
    </div>
  );
}

export default TableQuanLyNguoiDung;
