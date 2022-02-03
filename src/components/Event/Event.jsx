import PropTypes from 'prop-types';
import { AiFillEnvironment, AiFillAudio } from 'react-icons/ai';
import { IoIosAlarm } from 'react-icons/io';
import { formatEventStart, formatEventDuration, formatEventDistans } from 'utils';

import { iconsSize } from 'constans';

import css from './Event.module.css';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStartTime = formatEventStart(start);
  const formattedDurationTime = formatEventDuration(start, end);
  //const formattedDistansTime = formatEventDistans(start, end);

  //console.log(css);
  //console.log(css[type]);

  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <AiFillEnvironment className={css.icon} size={iconsSize.sm} />
        {location}
      </p>
      <p className={css.info}>
        <AiFillAudio className={css.icon} color="blue" size={iconsSize.sm} />
        {speaker}
      </p>
      <p className={css.info}>
        <IoIosAlarm className={css.icon} color="orange" size={iconsSize.sm} />
        {formattedStartTime}
      </p>
      <p className={css.info}>
        <IoIosAlarm className={css.icon} color="red" size={iconsSize.sm} />
        {formattedDurationTime}
        {/*{formattedDistansTime}*/}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
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
