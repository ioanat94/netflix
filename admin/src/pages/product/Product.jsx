import { Link, useLocation } from 'react-router-dom';
import './product.css';
import { useContext, useState } from 'react';
import { updateMovie } from '../../context/movieContext/apiCalls';
import { MovieContext } from '../../context/movieContext/MovieContext';
import storage from '../../firebase';

export default function Product() {
  const location = useLocation();
  const movie = location.movie;

  const [updatedMovie, setUpdatedMovie] = useState(movie);
  const [image, setImage] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [imageSmall, setImageSmall] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedMovie({ ...updatedMovie, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(updatedMovie._id, updatedMovie, dispatch);
  };

  const upload = (items) => {
    items.forEach((item, key) => {
      if (item.file) {
        const fileName = new Date().getTime() + item.label + item.file.name;
        const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            document.getElementById(`uploadProgress${[key]}`).textContent =
              `Upload ${key + 1} is ` + progress.toFixed(2) + `% done`;
          },
          (err) => {
            console.log(err);
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
              setUpdatedMovie((prev) => {
                return { ...prev, [item.label]: url };
              });
            });
          }
        );
      }
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: image, label: 'image' },
      { file: imageTitle, label: 'imageTitle' },
      { file: imageSmall, label: 'imageSmall' },
      { file: trailer, label: 'trailer' },
      { file: video, label: 'video' },
    ]);
  };

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
            <label>Title</label>
            <input
              type='text'
              placeholder={movie.title}
              name='title'
              onChange={handleChange}
            />
            <label>Description</label>
            <input
              type='text'
              placeholder={movie.description}
              name='description'
              onChange={handleChange}
            />
            <label>Year</label>
            <input
              type='text'
              placeholder={movie.year}
              name='year'
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type='text'
              placeholder={movie.genre}
              name='genre'
              onChange={handleChange}
            />
            <label>Duration</label>
            <input
              type='text'
              placeholder={movie.duration}
              name='duration'
              onChange={handleChange}
            />
            <label>Age Limit</label>
            <input
              type='text'
              placeholder={movie.limit}
              name='limit'
              onChange={handleChange}
            />
            <label>Is Series?</label>
            <select id='isSeries' name='isSeries' onChange={handleChange}>
              <option value='false'>No</option>
              <option value='true'>Yes</option>
            </select>
            <label>Trailer</label>
            <input
              type='file'
              placeholder={movie.trailer}
              name='trailer'
              onChange={(e) => setTrailer(e.target.files[0])}
            />
            <label>Video</label>
            <input
              type='file'
              placeholder={movie.video}
              name='video'
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img src={movie.image} alt='' className='productUploadImg' />
              <label htmlFor='file'>
                <input
                  type='file'
                  id='image'
                  name='image'
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <div className='productUpload'>
              <img src={movie.imageTitle} alt='' className='productUploadImg' />
              <label htmlFor='file'>
                <input
                  type='file'
                  id='imageTitle'
                  name='imageTitle'
                  onChange={(e) => setImageTitle(e.target.files[0])}
                />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <div className='productUpload'>
              <img src={movie.imageSmall} alt='' className='productUploadImg' />
              <label htmlFor='file'>
                <input
                  type='file'
                  id='imageSmall'
                  name='imageSmall'
                  onChange={(e) => setImageSmall(e.target.files[0])}
                />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <div className='submitButtons'>
              <button className='addProductButton' onClick={handleUpload}>
                Upload
              </button>
              <button className='addProductButton' onClick={handleSubmit}>
                Update
              </button>
            </div>
            <div id='uploadProgress0'></div>
            <div id='uploadProgress1'></div>
            <div id='uploadProgress2'></div>
            <div id='uploadProgress3'></div>
            <div id='uploadProgress4'></div>
          </div>
        </form>
      </div>
    </div>
  );
}
