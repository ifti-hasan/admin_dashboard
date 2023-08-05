import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

function Datatable() {
  const [data, setData] = useState(userRows);

  const HandleDelete = (id) => {
    setData( data.filter( (item)=> item.id !== id));
  };
  
  const actionColumn = [
    {
      field:"action",
      headerName: "Action",
      width: 200,
      renderCell:(params)=>{
        return (
          <div className="cellAction">
            <Link to='/users/test'>
            <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={()=>HandleDelete(params.row.id)}>Delete</div>
          </div>
        );
      },
    },
    ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to='/users/new'style={{textDecoration:"none"}} className="link">Add New</Link>
      </div>
        <DataGrid
            className="datagrid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 5 },
            },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable
