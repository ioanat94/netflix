import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext/UserContext';
import { useContext, useEffect } from 'react';
import { deleteUser, getUsers } from '../../context/userContext/apiCalls';

export default function UserList() {
  const { users, dispatch } = useContext(UserContext);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img
              className='userListImg'
              src={
                params.row.profilePicture ||
                'https://firebasestorage.googleapis.com/v0/b/netflix-clone-49e41.appspot.com/o/items%2F1654582827926profilePicture30db479e1558c3ed46b4ed23b3cd98ae.jpg?alt=media&token=22e948b2-d8ef-4818-b2e4-ba34196b6c3b'
              }
              alt=''
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 230 },
    {
      field: 'isAdmin',
      headerName: 'Is Admin?',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: '/user/' + params.row._id,
                user: params.row,
              }}
            >
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        getRowId={(r) => r._id}
      />
    </div>
  );
}
