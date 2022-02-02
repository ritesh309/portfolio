import React, { useState } from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from "../Components/Title"
import portfolios from '../Data/PortfoliosData'
import Menu from '../Components/Menu'

function PortfolioPage() {
  const [menuItem, setMenuItem] = useState( portfolios )
  return (
    <MainLayout>
      <Title title="Portfolio" span={"portfolio"} />
      <InnerLayout>
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  )
}
const PortfolioStyled = styled.div`


`

export default PortfolioPage
