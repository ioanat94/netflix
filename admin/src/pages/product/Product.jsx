import { Link, useLocation } from 'react-router-dom';
import './product.css';
import { Publish } from '@material-ui/icons';

export default function Product() {
  const location = useLocation();
  console.log(location);
  const movie = location.movie;

  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Movie</h1>
        <Link to='/newproduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img src={movie.image} alt='' className='productInfoImg' />
            <span className='productName'>{movie.title}</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Id:</span>
              <span className='productInfoValue'>{movie._id}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Genre:</span>
              <span className='productInfoValue'>{movie.genre}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Year:</span>
              <span className='productInfoValue'>{movie.year}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Age Limit:</span>
              <span className='productInfoValue'>{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Movie title</label>
            <input type='text' placeholder={movie.title} />
            <label>Year</label>
            <input type='text' placeholder={movie.year} />
            <label>Genre</label>
            <input type='text' placeholder={movie.genre} />
            <label>Age Limit</label>
            <input type='text' placeholder={movie.limit} />
            <label>Trailer</label>
            <input type='file' placeholder={movie.trailer} />
            <label>Video</label>
            <input type='file' placeholder={movie.video} />
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img src={movie.image} alt='' className='productUploadImg' />
              <label for='file'>
                <Publish fontSize='large' />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
