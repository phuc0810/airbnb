import React from "react";
import Skeleton from "react-loading-skeleton";
import { DSHotel } from "../../../@types/QuanLyPhongChoThue/QuanLyPhongChoThue";

type Props = {
  cards: number;
};

function CardSkeleton(props: Props): any {
  return Array(props.cards)
    .fill(0)
    .map((item) => {
      return (
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
        </div>
      );
    });
}

export default CardSkeleton;
