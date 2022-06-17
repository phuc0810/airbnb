import React, { Fragment } from "react";
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

type Props = {};

function Details({}: Props) {
  let { navList } = useDispatchNavList();
  console.log(navList);

  return (
    <div className="container max-w-7xl mx-auto">
      <h1 className="text-3xl">Ten Khach San</h1>
      <div className="flex justify-between">
        <p>
          <StarIcon className="text-pink-500" /> 4,38(18 đánh giá) -{" "}
          <LoyaltyIcon className="text-pink-500" /> chủ nhà siêu cấp -{" "}
          <span className="underline">
            Thành Phố Vũng Tàu , Bà Rịa - Vũng Tàu,Việt Nam
          </span>
        </p>
        <div>
          <span>
            <IosShareIcon /> <span className="underline">Chia sẻ</span>
          </span>
          <span>
            <FavoriteBorderIcon /> <span className="underline">Lưu</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div
          className="col-span-2 row-span-2"
          style={{
            backgroundImage: "url(http://picsum.photos/300)",
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
            backgroundImage: "url(http://picsum.photos/300)",
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
            backgroundImage: "url(http://picsum.photos/300)",
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
            backgroundImage: "url(http://picsum.photos/300)",
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
            backgroundImage: "url(http://picsum.photos/300)",
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
            style={{ width: "100%", opacity: "0" }}
          />
        </div>
      </div>
      <div className="flex">
        <div className="left" style={{ width: "60%" }}>
          <div style={{ width: "80%" }}>
            <div
              className="flex justify-between pb-10"
              style={{ borderBottom: "2px solid #dddddd" }}
            >
              <div>
                <span>Toàn bộ căn hộ condo.Chủ nhà Phong</span>
                <br />
                <span>6 khách - 2 phòng ngủ - 2 phòng tắm</span>
              </div>
              <ImageAvatars />
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
        <div className="right" style={{ width: "40%" }}>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "10px",
            }}
          >
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-xl">$44</span>/đêm
                </div>
                <div>
                  <StarIcon className="text-pink-500" style={{fontSize:'15px'}} />
                  4,38 <span className="underline">(18 đánh giá)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="http://i.pravatar.cc/300" />
    </Stack>
  );
}
