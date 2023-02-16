import React from 'react'
import styled from 'styled-components';
import Card from '../../components/card/Card';
import Topbar from '../../components/Topbar/Topbar'

const Container = styled.div``;
const Wrapper = styled.div`
padding: 20px;
`;
const Desc = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
`;
const H3 = styled.h3`
ont-size: 18px;
color: #4a4b4c;
`;
const DescP = styled.p`
font-size: 14px;
color: #8c9ea9;
`;
const DescSpan = styled.span`
font-size: 14px;
color: #6c757d;
`;
const CardContainer = styled.div`
display: flex;
justify-content: space-between;
gap: 20px;
flex-wrap: wrap;
margin-bottom: 50px;
`;

const TransHistory = () => {
  return (
    <Container>
        <Topbar />
        <Wrapper>
        <Desc>
                <H3>Transaction List</H3>
                <DescP>Transaction / <DescSpan>Transactions List</DescSpan></DescP>
            </Desc>
            <CardContainer>
              <Card type='totalTransactions' />
              <Card type='transactionToday' />
              <Card type='transactionYesterday' />
              <Card type='transactionAgo' />
              </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default TransHistory