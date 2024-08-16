import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MarketPlace = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
  
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  
    const handleDayChange = (e) => setDay(e.target.value);
    const handleMonthChange = (e) => setMonth(e.target.value);
    const handleYearChange = (e) => setYear(e.target.value);
  
    return (
      <div>
        <select value={day} onChange={handleDayChange}>
          <option value="">Day</option>
          {days.map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
  
        <select value={month} onChange={handleMonthChange}>
          <option value="">Month</option>
          {months.map((month, index) => (
            <option key={index} value={index + 1}>{month}</option>
          ))}
        </select>
  
        <select value={year} onChange={handleYearChange}>
          <option value="">Year</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
  
        <p>Selected Date: {`${day}-${month}-${year}`}</p>
      </div>
    );
};

export default MarketPlace;
