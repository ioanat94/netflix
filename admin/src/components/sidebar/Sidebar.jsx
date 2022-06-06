import './sidebar.css';
import {
  LineStyle,
  PermIdentity,
  PlayCircleOutline,
  List,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <Link to='/' className='link'>
              <li className='sidebarListItem active'>
                <LineStyle className='sidebarIcon' />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <Link to='/users' className='link'>
              <li className='sidebarListItem'>
                <PermIdentity className='sidebarIcon' />
                Users
              </li>
            </Link>
            <Link to='/movies' className='link'>
              <li className='sidebarListItem'>
                <PlayCircleOutline className='sidebarIcon' />
                Movies
              </li>
            </Link>
            <Link to='/lists' className='link'>
              <li className='sidebarListItem'>
                <List className='sidebarIcon' />
                Lists
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
