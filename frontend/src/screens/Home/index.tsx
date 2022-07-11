import SalesCard from "../../components/SalesCard"
import { Content, SalesWrapper } from "./styles"

const Home = () => (
  <main>
    <SalesWrapper>
      <Content>
        <SalesCard />
      </Content>
    </SalesWrapper>
  </main>
)

export default Home