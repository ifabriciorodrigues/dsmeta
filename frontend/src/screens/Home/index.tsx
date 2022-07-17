import { useState } from "react"
import SalesCard from "../../components/SalesCard"
import SalesContext from "../../contexts/SalesContext"
import Sale from "../../models/Sale"
import { Content, SalesWrapper } from "./styles"

const Home = () => {
  const [sales, setSales] = useState<Sale[]>([]);

  const changeSales = (sales: Sale[]) => {
    setSales(sales);
  } 
  
  return (
    <SalesContext.Provider value={{ changeSales }}> 
      <main>
        <SalesWrapper>
          <Content>
            <SalesCard sales={sales} />
          </Content>
        </SalesWrapper>
      </main>
    </SalesContext.Provider> 
  )
}

export default Home