import { useEffect, useState } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import 'react-calendar/dist/Calendar.css';
import { Icon } from '../../Icon';
import {
  DivStyled,
  MainTitle,
  SecondaryTitle,
  TimeList,
} from './Calendar.styled';

export const Calendar = ({ schedule, setValue }) => {
  const [t, i18n] = useTranslation('global');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [hours, setHours] = useState([]);
  const [dateList, setDateList] = useState([]);

  useEffect(() => {
    const arr = schedule.map(item => item.date);

    arr.sort((a, b) => {
      return new Date(a) - new Date(b);
    });

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
    setValue('appointment_time', '', {
      shouldValidate: true,
    });

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

  const hideDates = date => {
    const result = format(new Date(date), 'yyyy-MM-dd');
    const MEETS = new Set(dateList);

    if (!MEETS.has(result)) {
      return true;
    }
  };

  const checkDate = date => {
    const result = format(new Date(date), 'yyyy-MM-dd');

    if (result === currentDate) {
      return 'current';
    }
  };
  console.log('dateList ', dateList[0]);
  // console.log(new Date(dateList[0]));
  return (
    <DivStyled>
      <MainTitle>{t('appointmentForm.thirdTitle')}</MainTitle>

      {dateList.length > 0 && (
        <>
          <ReactCalendar
            onChange={handleChangeDate}
            value={new Date(dateList[0])}
            // activeStartDate={new Date(dateList[0])}
            locale={'uk'}
            tileDisabled={({ activeStartDate, date, view }) => {
              if (view === 'month') {
                return hideDates(date);
              }
            }}
            tileClassName={({ activeStartDate, date, view }) => {
              if (view === 'month') {
                return checkDate(date);
              }
            }}
            nextLabel={<Icon id="calendar-right-next" height={32} width={32} />}
            next2Label={
              <Icon id="calendar-right-2next" height={32} width={32} />
            }
            prevLabel={<Icon id="calendar-left-next" height={32} width={32} />}
            prev2Label={
              <Icon id="calendar-left-2next" height={32} width={32} />
            }
          />

          {hours.length > 0 && (
            <>
              <SecondaryTitle>
                {t('appointmentForm.fourthTitle')}
              </SecondaryTitle>

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
        </>
      )}
    </DivStyled>
  );
};

Calendar.propTypes = {
  schedule: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
};
