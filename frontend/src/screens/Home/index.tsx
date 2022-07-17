import { useEffect, useState } from "react"
import { Sales } from "../../api/requests"
import SalesCard from "../../components/SalesCard"
import Sale from "../../models/Sale"
import { ONE_YEAR_AGO_DATE, TODAY_DATE } from "./Home.constants"
import { Content, SalesWrapper } from "./styles"

const Home = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  
  useEffect(() => {
    Sales.getAll(ONE_YEAR_AGO_DATE, TODAY_DATE).then((response) => {
      setSales(response.content.sort((a,b) => a.id - b.id));
    })
    
  }, [])
  
  return (
    <main>
      <SalesWrapper>
        <Content>
          <SalesCard sales={sales} />
        </Content>
      </SalesWrapper>
    </main>
  )
}

export default Home