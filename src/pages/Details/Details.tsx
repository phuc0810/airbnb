import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import StarIcon from "@mui/icons-material/Star";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MoveDownIcon from "@mui/icons-material/MoveDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatchNavList } from "../../redux/QuanLyVe/QuanLyVe.selector";
import { Button } from "@mui/material";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { values } from "lodash";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useDispatchLayDanhSachDanhGiaTheoPhong } from "../../redux/QuanLyDanhGia/QuanLyDanhGia.selector";
import { RoomId } from "../../@types/QuanLyDanhGia/QuanLyDanhGia";
import moment from "moment";
import { useDispatchReviewRoom } from "../../redux/QuanLyPhongChoThue/QuanLyPhongChoThue.selector";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import { USER_LOGIN } from "../../@types/XacThucNguoiDung/XacThucNguoiDung";
import { postDatPhong } from "../../redux/QuanLyPhongChoThue/QuanLyPhongChoThue.thunk";

// date-fns

type Props = {};

function Details(props: Props) {
  let { navList } = useDispatchNavList();
  let { id } = useParams<{ id: string }>();
  let { roomIsRated } = useDispatchLayDanhSachDanhGiaTheoPhong(id);
  let { reviewRoom } = useDispatchReviewRoom(id);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        ref.current?.classList.add("scroll");
      } else {
        ref.current?.classList.remove("scroll");
      }
    });
  }, []);

  return (
    <div className="details container max-w-7xl mx-auto">
      <h1 className="text-3xl my-3 font-bold">{reviewRoom?.name}</h1>
      <div className="flex justify-between my-5">
        <p>
          <StarIcon className="text-pink-500" />{" "}
          <span className="font-bold">{reviewRoom?.locationId?.valueate}</span>
          <span className="underline">(18 đánh giá)</span> -{" "}
          <LoyaltyIcon className="text-pink-500" /> chủ nhà siêu cấp -{" "}
          <span className="underline">
            Thành Phố Vũng Tàu , Bà Rịa - Vũng Tàu,Việt Nam
          </span>
        </p>
        <div className="flex">
          <span className="font-bold flex justify-center items-center">
            <IosShareIcon /> <span className="underline">Chia sẻ</span>
          </span>
          <span className="ml-10 font-bold flex justify-center items-center">
            <FavoriteBorderIcon /> <span className="underline">Lưu</span>
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-4 gap-2">
          <div
            className="col-span-2 row-span-2"
            style={{
              backgroundImage: `url(${reviewRoom?.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
              height: "400px",
            }}
          >
            <img
              src="http://picsum.photos/300"
              alt=""
              style={{ width: "100%", opacity: "0", height: "400px" }}
            />
          </div>
          <div
            style={{
              backgroundImage: `url(${reviewRoom?.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "196px",
            }}
          >
            <img
              src="http://picsum.photos/300"
              alt=""
              style={{ width: "100%", opacity: "0" }}
            />
          </div>
          <div
            style={{
              backgroundImage: `url(${reviewRoom?.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderTopRightRadius: "10px",
              height: "196px",
            }}
          >
            <img
              src="http://picsum.photos/300"
              alt=""
              style={{
                width: "100%",
                opacity: "0",
              }}
            />
          </div>
          <div
            style={{
              backgroundImage: `url(${reviewRoom?.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "196px",
            }}
          >
            <img
              src="http://picsum.photos/300"
              alt=""
              style={{ width: "100%", opacity: "0", display: "none" }}
            />
          </div>
          <div
            style={{
              backgroundImage: `url(${reviewRoom?.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderBottomRightRadius: "10px",
              height: "196px",
            }}
          >
            <img
              src="http://picsum.photos/300"
              alt=""
              style={{ width: "100%", opacity: "0", display: "none" }}
            />
          </div>
        </div>
        <FullScreenDialog />
      </div>
      <div className="flex pb-8" style={{ borderBottom: "2px solid #dddddd" }}>
        <div className="left" style={{ width: "60%" }}>
          <div style={{ width: "80%" }}>
            <div
              className="flex justify-between pb-10 mt-10"
              style={{ borderBottom: "2px solid #dddddd" }}
            >
              <div>
                <span className="font-bold text-xl">{reviewRoom?.name}</span>
                <br />
                <span>
                  <span>
                    {reviewRoom?.guests} khách - {reviewRoom?.bedRoom} phòng ngủ
                    - {reviewRoom?.bath} phòng tắm
                  </span>
                </span>
              </div>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Remy Sharp"
                  src={`https://i.pravatar.cc/150?img=6`}
                />
              </Stack>
            </div>
            <div
              className="mt-5 pb-10"
              style={{ borderBottom: "2px solid #dddddd" }}
            >
              <button
                className="p-3 flex justify-between"
                style={{
                  border: "2px solid black",
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              >
                <span>Dịch sang tiếng việt</span> <MoveDownIcon />
              </button>
              <p className="leading-6 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                odit minima aut explicabo nisi fugiat! Recusandae quod fugiat
                saepe porro delectus sapiente perspiciatis tempora sed
                quibusdam. Autem ipsam maiores deleniti.
              </p>
              <span className="underline">
                Hien thị thêm{" "}
                <ArrowForwardIosIcon style={{ fontSize: "13px" }} />{" "}
              </span>
            </div>
            <div className="mt-10">
              <h1 className="text-2xl font-bold">Tiện nghi</h1>
              <div className="grid grid-cols-2">
                {navList?.map((item, i) => {
                  return (
                    <div className="flex justify-start items-center" key={i}>
                      <img
                        src={item.icon}
                        alt={item.icon}
                        style={{ height: "50px", marginRight: "20px" }}
                      />{" "}
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
              <Button
                variant="outlined"
                style={{
                  marginTop: "30px",
                  color: "black",
                  borderColor: "black",
                  border: "2px solid",
                }}
              >
                Hiện thị 24 tiện nghi khác
              </Button>
            </div>
          </div>
        </div>

        {/* ------------------------ */}
        <div className="right mt-10" style={{ width: "40%" }}>
          <div
            className="datphong"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "10px",
            }}
            ref={ref}
          >
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-xl">
                    {reviewRoom?.price.toLocaleString()} VNĐ
                  </span>
                  /đêm
                </div>
                <div>
                  <StarIcon
                    className="text-pink-500"
                    style={{ fontSize: "15px" }}
                  />
                  {reviewRoom?.locationId?.valueate}{" "}
                  <span className="underline">(18 đánh giá)</span>
                </div>
              </div>
              <DatPhong price={reviewRoom?.price} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <StarIcon className="text-pink-500" />{" "}
        <span className="text-lg font-bold">4,38(18 đánh giá)</span>
        <div className=" grid grid-cols-2 mt-6">
          {roomIsRated?.slice(0, 10).map((item, i) => {
            return (
              <div className="userComment mb-5" key={i}>
                <div className="flex justify-start items-center">
                  <ImageAvatars index={i} />
                  <div className="ml-4 leading-5">
                    <span className="text-black font-bold">
                      {item.userId?.name}
                    </span>
                    <br />
                    <span className="text-gray-500">
                      Tháng {moment(item.created_at).format("MM")} Năm{" "}
                      {moment(item.created_at).format("YYYY")}
                    </span>
                  </div>
                </div>

                <div className="content-comment mt-1" style={{ width: "80%" }}>
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;

function ImageAvatars(props: imageAvatars) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={`https://i.pravatar.cc/150?img=${props.index}`}
      />
    </Stack>
  );
}

function DatPhong(props: DatPhong) {
  // datapicker antd
  const { RangePicker } = DatePicker;
  let { id } = useParams<{ id: string }>();

  const dateFormat = "DD/MM/YYYY";

  // !-------------------- gui du lieu di --------------------

  const dispatch = useDispatch<any>();
  const history = useHistory();
  let diff = 0;

  let onChange = (value: any, dateString: any) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    formik.setFieldValue("checkIn", value[0].toISOString());
    formik.setFieldValue("checkOut", value[1].toISOString());
    diff = value[1].diff(value[0], "d");
    let totalPrice = diff * (props.price * 1);
  };

  let toltalPrice = () => {
    // return totalDay * ;
  };

  const formik = useFormik({
    initialValues: {
      roomId: id,
      checkIn: "",
      checkOut: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(postDatPhong(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{ borderBottom: "2px solid #dddddd" }}>
        <div className="text-center">
          <RangePicker
            defaultValue={[
              moment("1/7/2022", dateFormat),
              moment("1/7/2022", dateFormat),
            ]}
            format={dateFormat}
            onChange={onChange}
            onBlur={formik.handleBlur}
            name="date"
          />
          <br />
        </div>
        <span>Tổng tiền: {toltalPrice}</span>
        <Button
          className="mt-10"
          variant="contained"
          type="submit"
          style={{ width: "100%" }}
          onClick={() => {
            if (!localStorage.getItem(USER_LOGIN)) {
              history.push("/dangnhap");
            }
          }}
        >
          Đặt Phòng
        </Button>
      </div>
    </form>
  );
}

interface DatPhong {
  price?: number;
}

// diablog

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="absolute right-3 bottom-6">
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{
          border: "2px solid black",
          color: "black",
          backgroundColor: "white",
        }}
      >
        Hiển thị tất cả ảnh
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "fix", background: "black" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Tất cả hình ảnh về khách sạn
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="max-w-7xl mx-auto mt-28">
          <div className="grid grid-cols-2 gap-2">
            <div
              className="col-span-2"
              style={{
                backgroundImage: "url(http://picsum.photos/400?random=1)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <img
                className="opacity-0"
                src="http://picsum.photos/400?random=1"
                alt=""
              />
            </div>
            <div>
              <img src="http://picsum.photos/400?random=2" alt="" />
            </div>
            <div>
              <img src="http://picsum.photos/400?random=3" alt="" />
            </div>
            <div
              className="col-span-2"
              style={{
                backgroundImage: "url(http://picsum.photos/400?random=10)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <img
                className="opacity-0"
                src="http://picsum.photos/400?random=4"
                alt=""
              />
            </div>
            <div>
              <img src="http://picsum.photos/400?random=5" alt="" />
            </div>
            <div>
              <img src="http://picsum.photos/400?random=6" alt="" />
            </div>
            <div
              className="col-span-2"
              style={{
                backgroundImage: "url(http://picsum.photos/400?random=7)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <img
                className="opacity-0"
                src="http://picsum.photos/400?random=10"
                alt=""
              />
            </div>
            <div>
              <img src="http://picsum.photos/400?random=8" alt="" />
            </div>
            <div>
              <img src="http://picsum.photos/400?random=9" alt="" />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

interface imageAvatars {
  index: number;
}
