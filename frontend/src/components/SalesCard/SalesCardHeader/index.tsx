import { DatepickerWrapper, FormContainer, Heading } from './styles'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const SalesCardHeader = () => (
  <div>
    <Heading>Vendas</Heading>

    <DatepickerWrapper />
    <div>
      <FormContainer>
        <DatePicker
          selected={new Date()}
          onChange={(date: Date) => {}}
          dateFormat="dd/MM/yyyy"
          className="datepicker"
        />
      </FormContainer>
      <FormContainer>
        <DatePicker
          selected={new Date()}
          onChange={(date: Date) => {}}
          dateFormat="dd/MM/yyyy"
          className="datepicker"
        />
      </FormContainer>
    </div>

  </div>
)

export default SalesCardHeader