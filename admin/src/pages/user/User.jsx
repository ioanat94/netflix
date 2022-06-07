import { MailOutline, SettingsApplicationsOutlined } from '@material-ui/icons';
import { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/userContext/UserContext';
import './user.css';
import storage from '../../firebase';
import { updateUser } from '../../context/userContext/apiCalls';

export default function User() {
  const history = useHistory();
  const location = useLocation();
  const user = location.user;

  const [updatedUser, setUpdatedUser] = useState(user);
  const [profilePicture, setProfilePicture] = useState(null);

  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedUser({ ...updatedUser, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(updatedUser._id, updatedUser, dispatch);
    history.push('/users');
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById('uploadProgress').textContent =
            'Upload is ' + progress.toFixed(2) + '% done';
        },
        (err) => {
          console.log(err);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setUpdatedUser((prev) => {
              return { ...prev, [item.label]: url };
            });
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([{ file: profilePicture, label: 'profilePicture' }]);
  };

  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/newUser'>
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img
              src={
                user.profilePicture ||
                'https://firebasestorage.googleapis.com/v0/b/netflix-clone-49e41.appspot.com/o/items%2F1654582827926profilePicture30db479e1558c3ed46b4ed23b3cd98ae.jpg?alt=media&token=22e948b2-d8ef-4818-b2e4-ba34196b6c3b'
              }
              alt=''
              className='userShowImg'
            />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>{user.username}</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Email</span>
            <div className='userShowInfo'>
              <MailOutline className='userShowIcon' />
              <span className='userShowInfoTitle'>{user.email}</span>
            </div>
            <span className='userShowTitle'>Is Admin?</span>
            <div className='userShowInfo'>
              <SettingsApplicationsOutlined className='userShowIcon' />
              <span className='userShowInfoTitle'>
                {user.isAdmin ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input
                  type='text'
                  name='username'
                  placeholder='test.dev'
                  className='userUpdateInput'
                  onChange={handleChange}
                />
              </div>
              <div className='userUpdateItem'>
                <label>Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder='test@gmail.com'
                  className='userUpdateInput'
                  onChange={handleChange}
                />
              </div>
              <div className='userUpdateItem'>
                <label>Password</label>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  className='userUpdateInput'
                  onChange={handleChange}
                />
              </div>
              <div className='userUpdateItem'>
                <label>Is Admin?</label>
                <select id='isAdmin' name='isAdmin' onChange={handleChange}>
                  <option value='false'>No</option>
                  <option value='true'>Yes</option>
                </select>
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img
                  className='userUpdateImg'
                  src={
                    user.profilePicture ||
                    'https://firebasestorage.googleapis.com/v0/b/netflix-clone-49e41.appspot.com/o/items%2F1654582827926profilePicture30db479e1558c3ed46b4ed23b3cd98ae.jpg?alt=media&token=22e948b2-d8ef-4818-b2e4-ba34196b6c3b'
                  }
                  alt=''
                />
                <label htmlFor='file'>
                  <input
                    type='file'
                    id='profilePicture'
                    name='profilePicture'
                    onChange={(e) => setProfilePicture(e.target.files[0])}
                  />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <div className='submitButtons'>
                <button className='addProductButton' onClick={handleUpload}>
                  Upload
                </button>
                <button className='addProductButton' onClick={handleSubmit}>
                  Update
                </button>
              </div>
              <div id='uploadProgress'></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
