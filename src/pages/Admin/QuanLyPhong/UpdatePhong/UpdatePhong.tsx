import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
// -----//!icon-----------------
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { quanLyViTriAction } from "../../../../redux/QuanLyViTri/QuanLyViTri.reducer";
import FormUpdatePhong from "./FormUpdatePhong/FormUpdatePhong";
import { quanLyPhongChoThueAction } from "../../../../redux/QuanLyPhongChoThue/QuanLyPhongChoThue.reducer";

// --------------//! HOC Thêm Người Dùng----------------------

type UpdatePhong = {
  idUser: string;
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function UpdatePhong(props: UpdatePhong) {
  const dispatch = useDispatch<any>();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(quanLyPhongChoThueAction.setThongTinChiTietPhong(null));
  };

  return (
    <div className="form-addAdmin">
      <Button variant="text" onClick={handleClickOpen}>
        <EditIcon />
      </Button>
      {open && (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Sửa Thông Tin Phòng
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <FormUpdatePhong idUser={props.idUser} />
          </DialogContent>
        </BootstrapDialog>
      )}
    </div>
  );
}
