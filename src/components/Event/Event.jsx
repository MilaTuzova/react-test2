import PropTypes from 'prop-types';
import { AiFillEnvironment, AiFillAudio } from 'react-icons/ai';
import { IoIosAlarm } from 'react-icons/io';

import css from './Event.module.css';

export const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <AiFillEnvironment className={css.icon} />
        {location}
      </p>
      <p className={css.info}>
        <AiFillAudio className={css.icon} color="blue" />
        {speaker}
      </p>
      <p className={css.info}>
        <IoIosAlarm className={css.icon} color="orange" />
        {start}
      </p>
      <p className={css.info}>
        <IoIosAlarm className={css.icon} color="red" />
        {end}
      </p>
      {/*<span className={`${css.chip} ${css[type]}`}>{type}</span>*/}
    </div>
  );
};

Event.PropeTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
