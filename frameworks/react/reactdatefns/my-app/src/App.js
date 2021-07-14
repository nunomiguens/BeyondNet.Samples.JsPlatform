import React, { useState } from 'react';
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import { OptionsTypes, buildDates, Formats } from './utils/datePresets'
import './App.scss'
import { Select, MenuItem } from '@material-ui/core';


function App() {
  
  const [dateValue, setDateValue] = useState({from:'-/-/-',to:'-/-/-', option:{key:'-',value:'-'}})
  const [selectedDate, handleDateChange] = useState(new Date());
  const [format, setFormat] = React.useState('');

  const handleOnDateChange = (date) => {
    handleDateChange(date)

    let parameters = {
      format: format, 
      option: OptionsTypes.Last15Min,
      from: new Date(Date.now()), 
      to: new Date(Date.now())
    }

    setDateValue(buildDates(parameters))
  }

  const handleFormatChange = event => {
    setFormat(event.target.value);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div>
        <h1 className='header'>
          Formatting Dates with Date-Fns
        </h1>
        <p>Select a format:</p>
        <div className="format">
            <Select
              labelId="format-select-label"
              id="format-select"
              value={format}
              onChange={handleFormatChange}
            >
            { 
              Object.keys(Formats).map(element => 
                  <MenuItem value={element} key={element}>{Formats[element]}</MenuItem>
              )
            }              
            </Select>
          </div>        
        <div className='dates'>
            <p>Select a date from the calendar:</p>
            <KeyboardDatePicker
              autoOk
              variant="inline"
              inputVariant="outlined"
              label="With keyboard"
              format="MM/dd/yyyy"
              value={selectedDate}
              InputAdornmentProps={{ position: "start" }}
              onChange={date => handleOnDateChange(date)}
            />
          </div>
      </div>
      <div>
      <h3 className='subTitle'>Selected Dates</h3>
      <p>Option selected is used to calculated date values.</p>
      <p>Key: {dateValue.option.key}</p>
      <p>Value: {dateValue.option.key}</p>
      <h4>Date values calculated:</h4>
      <p>Format: {dateValue.Format}</p>
      <p>From: {dateValue.from}</p>
      <p>To: {dateValue.to}</p>
    </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
