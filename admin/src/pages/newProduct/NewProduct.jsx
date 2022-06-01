import './newProduct.css';
import { useContext, useState } from 'react';
import storage from '../../firebase';
import { createMovie } from '../../context/movieContext/apiCalls';
import { MovieContext } from '../../context/movieContext/MovieContext';

export default function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [image, setImage] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [imageSmall, setImageSmall] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is' + progress + '% done');
        },
        (err) => {
          console.log(err);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
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
    <div className='newProduct'>
      <h1 className='addProductTitle'>New Movie</h1>
      <form className='addProductForm'>
        <div className='addProductItem'>
          <label>Image</label>
          <input
            type='file'
            id='image'
            name='image'
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className='addProductItem'>
          <label>Title Image</label>
          <input
            type='file'
            id='imageTitle'
            name='imageTitle'
            onChange={(e) => setImageTitle(e.target.files[0])}
          />
        </div>
        <div className='addProductItem'>
          <label>Thumbnail Image</label>
          <input
            type='file'
            id='imageSmall'
            name='imageSmall'
            onChange={(e) => setImageSmall(e.target.files[0])}
          />
        </div>
        <div className='addProductItem'>
          <label>Title</label>
          <input
            type='text'
            placeholder='Django Unchained'
            name='title'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Description</label>
          <input
            type='text'
            placeholder='Description'
            name='description'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Year</label>
          <input
            type='text'
            placeholder='2012'
            name='year'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Genre</label>
          <input
            type='text'
            placeholder='Action'
            name='genre'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Duration</label>
          <input
            type='text'
            placeholder='2h 45m'
            name='duration'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Age Limit</label>
          <input
            type='text'
            placeholder='16'
            name='limit'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Is Series?</label>
          <select id='isSeries' name='isSeries' onChange={handleChange}>
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
        </div>
        <div className='addProductItem'>
          <label>Trailer</label>
          <input
            type='file'
            name='trailer'
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className='addProductItem'>
          <label>Video</label>
          <input
            type='file'
            name='video'
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
      </form>
      {uploaded === 5 ? (
        <button className='addProductButton' onClick={handleSubmit}>
          Create
        </button>
      ) : (
        <button className='addProductButton' onClick={handleUpload}>
          Upload
        </button>
      )}
    </div>
  );
}
