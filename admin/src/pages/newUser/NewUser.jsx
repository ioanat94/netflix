import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createUser } from '../../context/userContext/apiCalls';
import { UserContext } from '../../context/userContext/UserContext';
import storage from '../../firebase';
import './newUser.css';

export default function NewUser() {
  const history = useHistory();

  const [user, setUser] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);

  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    createUser(user, dispatch);
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
            setUser((prev) => {
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
    <div className='newUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input
            type='text'
            name='username'
            placeholder='test.username'
            onChange={handleChange}
          />
        </div>
        <div className='newUserItem'>
          <label>Email</label>
          <input
            type='email'
            name='email'
            placeholder='test@gmail.com'
            onChange={handleChange}
          />
        </div>
        <div className='newUserItem'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleChange}
          />
        </div>
        <div className='newUserItem'>
          <label>Is Admin?</label>
          <select
            className='newUserSelect'
            name='isAdmin'
            id='isAdmin'
            onChange={handleChange}
          >
            <option>Is Admin?</option>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </div>
        <div className='newUserItem'>
          <label>Profile Picture</label>
          <input
            type='file'
            id='profilePicture'
            name='profilePicture'
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </div>
        <div className='submitButtons'>
          <button className='addProductButton' onClick={handleUpload}>
            Upload
          </button>
          <button className='addProductButton' onClick={handleSubmit}>
            Create
          </button>
        </div>
        <div id='uploadProgress'></div>
      </form>
    </div>
  );
}
