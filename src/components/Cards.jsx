import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import '../cards.scss'
import north from '../assets/TnNorth.mp4'
import south from '../assets/TnSouth.mp4'
import coast from '../assets/TnCoast.mp4'


const CARDS = 3;
const MAX_VISIBILITY = 2;

const Card = ({ title, content, classname, videoName }) => (
  <div className={classname}>
    <h2>{title}</h2>
    <p>{content}</p>
    <div className='bgVideo'>
      <video
        src={videoName}
        autoPlay
        muted
        loop
      />
    </div>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(1);
  const count = React.Children.count(children);

  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline /></button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
          '--active': i === active ? 1 : 0,
          '--offset': (active - i) / 3,
          '--direction': Math.sign(active - i),
          '--abs-offset': Math.abs(active - i) / 3,
          'pointerEvents': active === i ? 'auto' : 'none',
          'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
          'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
        }}>
          {child}

        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline /></button>}
    </div>
  );
};

const Cards = () => {
  return (
    <div className='app'>
      <Carousel>
        {[...new Array(CARDS)].map((_, i) => (

          <Card title={i === 0 ? 'North' : i === 1 ? 'South' : i === 2 ? 'Coast' : ''} content={
            i === 0 ? 'The North of Tunisia is a culturally rich region along the Mediterranean coast, famous for its ancient ruins, Islamic landmarks, and traditional architecture. It offers a unique blend of historical and modern elements, making it an intriguing destination for those interested in exploring Tunisias past and present.' :
              i === 1 ? 'The South of Tunisia is a rugged and diverse region known for its vast deserts, stunning oases, and unique Berber culture. It offers thrilling adventures, such as camel rides and desert safaris, as well as historic attractions like ancient troglodyte dwellings and the historic city of Tozeur and Tataouine. Whether you^re seeking natural beauty or cultural immersion, the South of Tunisia is a must-visit destination.' :
                i === 2 ? 'The coast of Tunisia spans over 1,100 km along the Mediterranean Sea, offering stunning beaches, charming coastal towns, and rich cultural heritage. Sidi Bou Said, a picturesque village with white-and-blue painted buildings, and Djerba, a large island with ancient ruins and traditional villages, are just two of the many popular destinations along the coast. Whether you^re looking for a relaxing beach vacation or an adventure steeped in history and culture, the coast of Tunisia has something for everyone.' : ''
          } classname={i === 2 ? 'Coastcard' : 'card'} videoName={i === 0 ? north : i === 1 ? south : i === 2 ? coast : undefined} />
        ))}
      </Carousel>
    </div>
  );
}
export default Cards;