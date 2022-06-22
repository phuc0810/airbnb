import React from "react";
import Skeleton from "react-loading-skeleton";
import { DSHotel } from "../../../@types/QuanLyPhongChoThue/QuanLyPhongChoThue";

type Props = {
  changeHotelList: any;
};

function CardSkeleton(props: Props) {
  let list = props.changeHotelList;
  return Array(list)
    .fill(0)
    .map((item) => {
      <div className="card-skeleton">
        <div className="image-skeleton">
          <Skeleton style={{ width: "100%", height: "290px" }} />
        </div>
        <div className="content-skeleton">
          <Skeleton />
          <Skeleton style={{ width: "100px" }} />
          <Skeleton style={{ width: "200px" }} />
          <Skeleton style={{ width: "100px" }} />
        </div>
      </div>;
    });
}

export default CardSkeleton;
