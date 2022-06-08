import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { deletUser, editUser } from "../active/Active";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function DataTable() {
  const myState = useSelector((state) => state.user.userData);
  console.log(myState, "myState");
  const [index, setIndex] = useState();

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (id) => {
    // console.log(id, "handleClick");
    dispatch(deletUser(id));
  };

  const handleEdit = (id) => {
   
    dispatch(editUser(id));

    navigate(`/edit/${id}`);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "gender", headerName: "gender", width: 130 },
    
    { field: "person", headerName: "person", width: 130 },
    {
      field: "email",
      headerName: "email",
      type: "number",
      width: 90,
    },
    { field: "password", headerName: "password", type: "text", width: 90 },
    {
      field: "delete",
      headerName: "delete",
      type: "text",
      width: 90,
      disableClickEventBubbling: true,
      renderCell: (b) => {
        // console.log(b,"bbbbbbbbbbb")
        return (
          <Button variant="contained" onClick={() => handleClick(b.row.id)}>
            DELETE
          </Button>
        );
      },
    },
    {
      field: "edit",
      headerName: "edit",
      type: "text",
      width: 90,
      disableClickEventBubbling: true,
      renderCell: (b) => {
        // console.log(b.id, "data");
        return (
          <Button variant="contained" onClick={() => handleEdit(b.row.id)}>
            Edit
          </Button>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={myState}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
