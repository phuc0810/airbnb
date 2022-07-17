import React, { useCallback, useEffect, useState } from "react";
import { Input } from "antd";
import _ from "lodash";
import { quanLyNguoiDungService } from "../../../service/QuanLyNguoiDungService";
import { useDispatch } from "react-redux";

type Props = {};

function InputSearch(props: Props) {
  const dispatch = useDispatch<any>();

  const { Search } = Input;

  const [userQuery, setUserQuery] = useState("");

  const updateQuery = () => {
    // A search query api call.
    // dispatch(quanLyNguoiDungService.LayDanhSachNguoiDung(userQuery));
    console.log(userQuery);
  };

  const delayedQuery = useCallback(_.debounce(updateQuery, 500), [userQuery]);

  const OnChange = (e: any) => {
    setUserQuery(e.target.value);
  };

  useEffect(() => {
    delayedQuery();

    // Cancel the debounce on useEffect cleanup.
    return delayedQuery.cancel;
  }, [userQuery, delayedQuery]);

  return (
    <Search
      className="input-search-addmin w-1/3"
      placeholder="input search text"
      onChange={OnChange}
      value={userQuery}
      enterButton
    />
  );
}

export default InputSearch;
