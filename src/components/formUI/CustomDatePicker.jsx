import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function CustomDatePicker() {
  const [value, setValue] = React.useState(dayjs('2022-04-07'));

  return (
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        // openTo="year"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
  );
}
