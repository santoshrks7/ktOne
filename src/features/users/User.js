import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TableData from "../../components/TableData";
import { callApi } from "./userSlice";

const User = () => {
  // const user = useSelector((state) => state.users.list);
  // console.log(user);

  const dispatch = useDispatch();

  return (
    <div>
      <TableData />
      <button onClick={() => dispatch(callApi())}>Click to call api</button>
    </div>
  );
};

export default User;
