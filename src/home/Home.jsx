import Featured from '../components/Featured';
import List from '../components/List';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
