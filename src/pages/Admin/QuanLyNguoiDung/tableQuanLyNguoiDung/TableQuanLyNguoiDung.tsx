import React from "react";
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

type Props = {};

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
    valueGetter: ({ value }) => (value ? "nữ" : "nam"),
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
];

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
        value: page,
      })
    );
  };

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
          paginationMode="server"
          hideFooter
          autoHeight
        />
      </Box>
      <Pagination
        className="mt-5"
        count={50}
        color="primary"
        onChange={onchangePanigate}
      />
    </div>
  );
}

export default TableQuanLyNguoiDung;
