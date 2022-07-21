import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import _ from "lodash";
import { useDispatch } from "react-redux";
// ----------------//!icon----------------------
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useDispatchHotelListAdmin } from "../../../../redux/QuanLyPhongChoThue/QuanLyPhongChoThue.selector";
import { quanLyPhongChoThueAction } from "../../../../redux/QuanLyPhongChoThue/QuanLyPhongChoThue.reducer";
import { deletePhongChoThue } from "../../../../redux/QuanLyPhongChoThue/QuanLyPhongChoThue.thunk";
import UpdateLocation from "../../QuanLyViTri/UpdateLocation/UpdateLocation";
import UpdatePhong from "../UpdatePhong/UpdatePhong";

type Props = {};

function TableQuanLyPhong(props: Props) {
  let { hotelListAdmin } = useDispatchHotelListAdmin();
  // console.log(danhSachNguoiDung);
  const dispatch = useDispatch<any>();

  const rows = hotelListAdmin ? [...hotelListAdmin] : [];

  let onchangePanigate = (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(
      quanLyPhongChoThueAction.updateFilterAdmin({
        key: "pageAdmin",
        value: page - 1,
      })
    );
  };

  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "name",
      headerName: "name",
      width: 200,
    },
    {
      field: "guests",
      headerName: "guests",
      width: 110,
    },
    {
      field: "price",
      headerName: "price",
      width: 100,
    },
    {
      field: "image",
      headerName: "image",
      width: 110,
      renderCell: (params) => <img src={params.row.image} alt="..." />,
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
                  dispatch(deletePhongChoThue(params.row._id));
                }
              }}
            >
              <DeleteIcon className="text-red-500" />
            </Button>
            <UpdatePhong idUser={params.row._id} />
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
          loading={_.isEmpty(hotelListAdmin)}
          getRowId={(row) => row._id}
          hideFooter
          autoHeight
        />
      </Box>
      <Pagination count={50} color="primary" onChange={onchangePanigate} />
    </div>
  );
}

export default TableQuanLyPhong;
