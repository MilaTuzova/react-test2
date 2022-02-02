import defaultImg from './fox.jpg';
import PropTypes from 'prop-types';

export default function Painting({ name, imgUrl = defaultImg, isOnline }) {
  return (
    <div>
      <img src={imgUrl ?? defaultImg} alt="images" width="150" />
      <h2>NAME</h2>
      <div>
        <p> {name} </p>
        <p> {isOnline} </p>
        <button type="button"> {name} </button>
      </div>
    </div>
  );
}

Painting.propTypes = {
  imgUrl: PropTypes.oneOf(['News', 'Photos']),
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
