import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Typography, CardActions, Button } from "@mui/material";
import { callApi } from "../features/users/userSlice";
import store from "../app/store";

const ViewMore = () => {
  const [state, setState] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    store.dispatch(callApi());
    setState(true);
  }, []);

  const users = useSelector((state) => state.users.list);
  //   console.log(users, "users");
  //   console.log(id);
  console.log(store.getState().users.list, "kkkkkkkk");

  //   const singleElement = users.find((item) => item.id == id);
  const singleElement = store
    .getState()
    .users.list.find((item) => item.id == id);
  console.log("from getState", singleElement);

  return (
    <>
      {state && users?.length && (
        <Card sx={{ maxWidth: 345, padding: 10 }}>
          <Typography component="div">{singleElement.id}</Typography>
          <Typography component="div" variant="h5">
            {singleElement.name}
          </Typography>
          <CardActions>
            <Button size="small">{singleElement.phone}</Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default ViewMore;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { Card, Typography, CardActions, Button } from "@mui/material";
// import userSlice, { callApi } from "../features/users/userSlice";
// import store from "../app/store";
// // import api from "../app/middleware/api";

// const ViewMore = () => {
//   //   const dispatch = useDispatch();
//   const [state, setState] = useState(false);
//   const { id } = useParams();

//   useEffect(() => {
//     store.dispatch(callApi());
//     setState(true);
//   }, []);

//   //   const dispatch = useDispatch(userSlice());¿

//   const users = useSelector((state) => state.users.list);
//   console.log(users, "users");
//   console.log(id);
//   console.log(store.getState().users.list, "kkkkkkkk");

//   const singleElement = store
//     .getState()
//     .users.list.find((item) => item.id == id);
//   console.log(singleElement);

//   return (
//     <>
//       {state && users?.length && (
//         <Card sx={{ maxWidth: 345, padding: 10 }}>
//           <Typography component="div">{singleElement.id}</Typography>
//           <Typography component="div" variant="h5">
//             {singleElement.name}
//           </Typography>
//           <CardActions>
//             <Button size="small">{singleElement.phone}</Button>
//           </CardActions>
//         </Card>
//       )}
//     </>
//   );
// };

// export default ViewMore;
