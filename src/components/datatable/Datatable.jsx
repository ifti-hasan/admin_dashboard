import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";

function Datatable() {
  const actionColumn = [
    {
      field:"action",
      headerName: "Action",
      width: 200,
      renderCell:()=>{
        return (
          <div className="cellAction">
            <Link to='/users/test'>
            <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
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
            rows={userRows}
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
