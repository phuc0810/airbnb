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
// import UpdateUser from "../UpdateUser/UpdateUser";
import { deleteNguoiDung } from "../../../../redux/QuanLyNguoiDung/QuanLyNguoiDung.thuink";
import { useDispatchDanhSachViTri } from "../../../../redux/QuanLyViTri/QuanLyViTri.selector";
import { quanLyViTriAction } from "../../../../redux/QuanLyViTri/QuanLyViTri.reducer";
import { deleteLocation } from "../../../../redux/QuanLyViTri/QuanLyViTri.thunk";
import UpdateLocation from "../UpdateLocation/UpdateLocation";

type Props = {};

function TableQuanLyViTri(props: Props) {
  let { danhSachViTri } = useDispatchDanhSachViTri();
  // console.log(danhSachNguoiDung);
  const dispatch = useDispatch<any>();

  const rows = danhSachViTri ? [...danhSachViTri] : [];

  let onchangePanigate = (event: React.ChangeEvent<unknown>, page: number) => {
    console.log(page);
    dispatch(
      quanLyViTriAction.updateFilter({
        key: "page",
        value: page - 1,
      })
    );
  };

  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "country",
      headerName: "country",
      width: 150,
    },
    {
      field: "name",
      headerName: "name",
      width: 200,
    },
    {
      field: "province",
      headerName: "province",
      width: 110,
    },
    {
      field: "valueate",
      headerName: "valueate",
      width: 100,
    },
    {
      field: "image",
      headerName: "image",
      width: 110,
      renderCell: (params) => <img src={params.row.image} alt="" />,
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
                  dispatch(deleteLocation(params.row._id));
                }
              }}
            >
              <DeleteIcon className="text-red-500" />
            </Button>
            <UpdateLocation idUser={params.row._id} />
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
          disableSelectionOnClick
          loading={_.isEmpty(danhSachViTri)}
          getRowId={(row) => row._id}
          hideFooter
          autoHeight
        />
      </Box>
      <Pagination count={50} color="primary" onChange={onchangePanigate} />
    </div>
  );
}

export default TableQuanLyViTri;
