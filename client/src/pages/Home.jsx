import { useEffect, useState } from 'react';
import Featured from '../components/Featured';
import List from '../components/List';
import Navbar from '../components/Navbar';
import axios from 'axios';

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              token:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTQ5NGY5Y2I5YzgyMDM4ZjRiMzFmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mzk5Nzc1MywiZXhwIjoxNjU0NDI5NzUzfQ.xnJCJcokygkObptwFedSngH-YoS_4EClKSFrGUNim14',
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
}

export default Home;
