import { useState } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import { format } from 'date-fns';

import 'react-calendar/dist/Calendar.css';
import { DivStyled } from './Calendar.styled';

const MEETS = new Set(['2023-09-09', '2023-09-12', '2023-09-22']);

export const Calendar = () => {
  const [value, setValue] = useState(new Date());

  const handleChangeDate = e => {
    console.log(e);
  };

  const checkDate = date => {
    const result = format(new Date(date), 'yyyy-MM-dd');

    if (MEETS.has(result)) {
      return 'content';
    }
    return null;
  };

  return (
    <DivStyled>
      <h1> Calendar</h1>
      <ReactCalendar
        onChange={handleChangeDate}
        // tileClassName="content"
        value={value}
        locale={'uk'}
        tileDisabled={({ activeStartDate, date, view }) =>
          date.getDay() === 0 || date.getDay() === 6
        }
        tileContent={({ activeStartDate, date, view }) =>
          view === 'month' && date.getDay() === 0 ? <p>Sunday!</p> : null
        }
        tileClassName={({ activeStartDate, date, view }) => {
          if (view === 'month') {
            return checkDate(date);
          }
        }}
      />
    </DivStyled>
  );
};