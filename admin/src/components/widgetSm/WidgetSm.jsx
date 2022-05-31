import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('/users?new=true', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTQ5NGY5Y2I5YzgyMDM4ZjRiMzFmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mzk5Nzc1MywiZXhwIjoxNjU0NDI5NzUzfQ.xnJCJcokygkObptwFedSngH-YoS_4EClKSFrGUNim14',
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
                'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
              }
              alt=''
              className='widgetSmImg'
            />
            <div className='widgetSmUser'>
              <span className='widgetSmUsername'>{user.username}</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
