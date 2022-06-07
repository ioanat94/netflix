import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('/users?new=true', {
          headers: {
            token:
              'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>Newest Members</span>
      <ul className='widgetSmList'>
        {newUsers.map((user) => (
          <li className='widgetSmListItem'>
            <img
              src={
                user.profilePicture ||
                'https://firebasestorage.googleapis.com/v0/b/netflix-clone-49e41.appspot.com/o/items%2F1654582827926profilePicture30db479e1558c3ed46b4ed23b3cd98ae.jpg?alt=media&token=22e948b2-d8ef-4818-b2e4-ba34196b6c3b'
              }
              alt=''
              className='widgetSmImg'
            />
            <div className='widgetSmUser'>
              <span className='widgetSmUsername'>{user.username}</span>
            </div>
            <Link
              to={{
                pathname: '/user/' + user._id,
                user: user,
              }}
              style={{ textDecoration: 'none' }}
            >
              <button className='widgetSmButton'>
                <Visibility className='widgetSmIcon' />
                Display
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
