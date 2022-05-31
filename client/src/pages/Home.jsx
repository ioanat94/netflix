import Featured from '../components/Featured';
import List from '../components/List';
import Navbar from '../components/Navbar';

function Home({ type }) {
  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
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
