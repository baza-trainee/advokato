import { useEffect, useState } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import 'react-calendar/dist/Calendar.css';
import {
  DivStyled,
  MainTitle,
  SecondaryTitle,
  TimeList,
} from './Calendar.styled';

export const Calendar = ({ schedule, setValue }) => {
  const [t, i18n] = useTranslation('global');
  const [today, setToday] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  );
  const [currentTime, setCurrentTime] = useState('');
  const [hours, setHours] = useState([]);
  const [datelist, setDateList] = useState([]);

  useEffect(() => {
    const arr = schedule.map(item => item.date);

    setDateList(prev => arr);
  }, [schedule]);

  useEffect(() => {
    const hours = schedule.find(item => item.date === currentDate);

    if (hours) {
      setHours(prev => hours.time);
      setCurrentTime(prev => '');
    }
  }, [schedule, currentDate]);

  const handleChangeDate = date => {
    const changedDate = format(new Date(date), 'yyyy-MM-dd');

    setValue('appointment_date', changedDate, {
      shouldValidate: true,
    });

    setCurrentDate(prev => changedDate);
  };

  const handleClickTime = time => {
    setCurrentTime(prev => time);

    setValue('appointment_time', time, {
      shouldValidate: true,
    });
  };

  const checkDate = date => {
    const result = format(new Date(date), 'yyyy-MM-dd');
    const MEETS = new Set(datelist);

    if (!MEETS.has(result)) {
      return 'content';
    }
    return null;
  };

  return (
    <DivStyled>
      <MainTitle>{t('appointmentForm.thirdTitle')}</MainTitle>

      <ReactCalendar
        onChange={handleChangeDate}
        value={today}
        locale={'uk'}
        tileDisabled={({ activeStartDate, date, view }) => {
          if (view === 'month') {
            return checkDate(date);
          }
        }}
        // tileContent={({ activeStartDate, date, view }) =>
        //   view === 'month' && date.getDay() === 0 ? <p>Sunday!</p> : null
        // }
        // tileClassName={({ activeStartDate, date, view }) => {
        //   if (view === 'month') {
        //     return checkDate(date);
        //   }
        // }}
      />

      {hours.length > 0 && (
        <>
          <SecondaryTitle>{t('appointmentForm.fourthTitle')}</SecondaryTitle>

          <TimeList>
            {hours.map((time, idx) => (
              <li
                key={idx}
                onClick={() => handleClickTime(time)}
                className={time === currentTime ? 'currentTime' : null}
              >
                {time}
              </li>
            ))}
          </TimeList>
        </>
      )}
    </DivStyled>
  );
};

Calendar.propTypes = {
  schedule: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
};
