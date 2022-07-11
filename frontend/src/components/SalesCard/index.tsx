import TableRow from "../TableRow"
import SalesCardHeader from "./SalesCardHeader"
import { MainContainer, SalesTable, SalesTableBody, SalesTableHead } from "./styles"

const tableHeadTitles = ['ID', 'Data', 'Vendedor', 'Visitas', 'Vendas', 'Total', 'Notificar']
const tableBodyTitles = ['#341', '08/07/2022', 'Anakin', '16', '11', 'R$ 55300.00']

const SalesCard = () => (
  <MainContainer>
    <SalesCardHeader />

    <div>
      <SalesTable>
        <SalesTableHead>
          <TableRow isHeader={true} titles={tableHeadTitles} />
        </SalesTableHead>
        <SalesTableBody>
          <TableRow titles={tableBodyTitles} /> 
          <TableRow titles={tableBodyTitles} /> 
          <TableRow titles={tableBodyTitles} /> 
          <TableRow titles={tableBodyTitles} /> 
        </SalesTableBody>
      </SalesTable>
    </div>
</MainContainer>
)
export default SalesCard 