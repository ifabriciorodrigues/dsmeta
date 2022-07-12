import { DatepickerWrapper, FormContainer, Heading } from './styles'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from 'react';
import { ONE_YEAR_AGO_DATE } from './SalesCardHeader.constants';

const SalesCardHeader = () => {
  const [startDate, setStartDate] = useState<Date>(ONE_YEAR_AGO_DATE);
  const [endDate, setEndDate] = useState<Date>(new Date());

  return (
    <div>
      <Heading>Vendas</Heading>

      <DatepickerWrapper />
      <div>
        <FormContainer>
          <DatePicker
            selected={startDate}
            onChange={(d: Date) => setStartDate(d)}
            dateFormat="dd/MM/yyyy"
            className="datepicker"
          />
        </FormContainer>
        <FormContainer>
          <DatePicker
            selected={endDate}
            onChange={(d: Date) => setEndDate(d)}
            dateFormat="dd/MM/yyyy"
            className="datepicker"
          />
        </FormContainer>
      </div>

    </div>
  )
}

export default SalesCardHeader