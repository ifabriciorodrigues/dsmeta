import { DatepickerWrapper, FormContainer, Heading } from './styles'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useContext, useEffect, useState } from 'react';
import { ONE_YEAR_AGO_DATE } from './SalesCardHeader.constants';
import SalesContext from '../../../contexts/SalesContext';
import { Sales } from '../../../api/requests';

const SalesCardHeader = () => {
  const [startDate, setStartDate] = useState<Date>(ONE_YEAR_AGO_DATE);
  const [endDate, setEndDate] = useState<Date>(new Date());
  const { changeSales } = useContext(SalesContext);

  useEffect(() => {
    Sales.getAll(startDate.toISOString().slice(0,10), endDate.toISOString().slice(0,10)).then((response) => {
      changeSales(response.content);
    })
  }, [endDate])
  

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