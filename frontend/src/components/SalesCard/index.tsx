import Sale from "../../models/Sale"
import TableRow from "../TableRow"
import SalesCardHeader from "./SalesCardHeader"
import { MainContainer, SalesTable, SalesTableBody, SalesTableHead } from "./styles"

const tableHeadTitles = ['ID', 'Data', 'Vendedor', 'Visitas', 'Vendas', 'Total', 'Notificar']

interface ISalesCard {
  sales: Sale[]
}

const SalesCard = ({ sales }:ISalesCard) => (
  <MainContainer>
    <SalesCardHeader />
    <div>
      <SalesTable>
        <SalesTableHead>
          <TableRow isHeader={true} titles={tableHeadTitles} />
        </SalesTableHead>
        <SalesTableBody>
          {sales.map((sale) => {
            return (
              <TableRow key={sale.id} titles={[
                sale.id.toString(), 
                sale.date, 
                sale.sellerName, 
                sale.timesVisited.toString(), 
                sale.quantity.toString(), 
                sale.total.toString()
              ]} 
              />
            )  
          })}
        </SalesTableBody>
      </SalesTable>
    </div>
</MainContainer>
)
export default SalesCard 