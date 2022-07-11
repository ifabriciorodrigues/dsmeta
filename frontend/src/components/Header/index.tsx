import { Heading, LogoContainer, LogoImg, MainContainer, Text } from "./styles"
import Logo from "../../assets/logo.png"

const Header = () => {
  return (
    <MainContainer>
        <LogoContainer>
            <LogoImg src={Logo} alt="DSMeta" />
            <Heading>DSMeta</Heading>
            <Text>
              Desenvolvido por
              <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
            </Text>
        </LogoContainer>
    </MainContainer>
  )
}

export default Header