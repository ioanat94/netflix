import { Link, useHistory, useLocation } from 'react-router-dom';
import './list.css';
import { useContext, useEffect, useState } from 'react';
import { ListContext } from '../../context/listContext/ListContext';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { updateList } from '../../context/listContext/apiCalls';
import { getMovies } from '../../context/movieContext/apiCalls';

export default function List() {
  const history = useHistory();
  const location = useLocation();
  const list = location.list;

  const [updatedList, setUpdatedList] = useState(list);

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedList({ ...updatedList, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setUpdatedList({ ...updatedList, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateList(updatedList._id, updatedList, dispatch);
    history.push('/lists');
  };

  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>List</h1>
        <Link to='/newList'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <span className='productName'>{list.title}</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Id:</span>
              <span className='productInfoValue'>{list._id}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Genre:</span>
              <span className='productInfoValue'>{list.genre}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Type:</span>
              <span className='productInfoValue'>{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Title</label>
            <input
              type='text'
              placeholder={list.title}
              name='title'
              onChange={handleChange}
            />
            <label>Type</label>
            <select name='type' onChange={handleChange}>
              <option>Type</option>
              <option value='movie'>Movie</option>
              <option value='series'>Series</option>
            </select>
            <label>Genre</label>
            <input
              type='text'
              placeholder={list.genre}
              name='genre'
              onChange={handleChange}
            />
            <label>Content</label>
            <select
              multiple
              name='content'
              onChange={handleSelect}
              style={{ height: '300px' }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
          <div className='productFormRight'>
            <button className='addProductButton' onClick={handleSubmit}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
