import { useEffect, useState } from 'react';
import axios from 'axios';
import './widgetLg.css';

export default function WidgetLg() {
  const [newContent, setNewContent] = useState([]);

  useEffect(() => {
    const getNewContent = async () => {
      try {
        const res = await axios.get('/movies?new=true', {
          headers: {
            token:
              'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
          },
        });
        setNewContent(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewContent();
  }, []);

  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest content</h3>
      <table className='widgetLgTable'>
        <tbody>
          <tr className='widgetLgTr'>
            <th className='widgetLgTh'>Movie</th>
            <th className='widgetLgTh'>Genre</th>
            <th className='widgetLgTh'>Year</th>
            <th className='widgetLgTh'>Age Limit</th>
            <th className='widgetLgTh'>Is Series?</th>
          </tr>
          {newContent.map((content) => (
            <>
              <tr className='widgetLgTr'>
                <td className='widgetLgUser'>
                  <img src={content.image} alt='' className='widgetLgImg' />
                  <span className='widgetLgName'>{content.title}</span>
                </td>
                <td className='widgetLgDate'>{content.genre}</td>
                <td className='widgetLgAmount'>{content.year}</td>
                <td className='widgetLgAmount'>{content.limit}</td>
                <td className='widgetLgAmount'>
                  {content.isSeries ? 'Yes' : 'No'}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
