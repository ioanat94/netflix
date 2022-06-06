import './newList.css';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createList } from '../../context/listContext/apiCalls';
import { ListContext } from '../../context/listContext/ListContext';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { getMovies } from '../../context/movieContext/apiCalls';

export default function NewList() {
  const [list, setList] = useState(null);
  const history = useHistory();

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    history.push('/lists');
  };

  return (
    <div className='newList'>
      <h1 className='addListTitle'>New List</h1>
      <form className='addListForm'>
        <div className='formLeft'>
          <div className='addListItem'>
            <label>Title</label>
            <input
              type='text'
              placeholder='Best Action Movies'
              name='title'
              onChange={handleChange}
            />
          </div>
          <div className='addListItem'>
            <label>Genre</label>
            <input
              type='text'
              placeholder='Action'
              name='genre'
              onChange={handleChange}
            />
          </div>
          <div className='addListItem'>
            <label>Type</label>
            <select name='type' onChange={handleChange}>
              <option>Type</option>
              <option value='movie'>Movie</option>
              <option value='series'>Series</option>
            </select>
          </div>
        </div>
        <div className='formRight'>
          <div className='addListItem'>
            <label>Content</label>
            <select
              multiple
              name='content'
              onChange={handleSelect}
              style={{ height: '203px' }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
      <button className='addListButton' onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
}
