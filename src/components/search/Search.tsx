import { GridSearchIcon } from "@mui/x-data-grid";
import React from "react";
import { useHistory } from "react-router-dom";
import { ComboBox } from "../../pages/Home/Home";
import { useSelectorQuanLyVe } from "../../redux/QuanLyVe/QuanLyVe.selector";

type Props = {};

function Search(props: Props) {
  let history = useHistory();
  let { viTri } = useSelectorQuanLyVe();

  return (
    <div className="p-3 flex justify-center items-center">
      <div className="mr-5">
        <ComboBox />
      </div>

      <button
        className="p-2 bg-pink-500 rounded-full"
        onClick={() => {
          history.push(`/danhsachphong/${viTri?.name}`);
        }}
      >
        <GridSearchIcon className="text-white" />
      </button>
    </div>
  );
}

export default Search;
