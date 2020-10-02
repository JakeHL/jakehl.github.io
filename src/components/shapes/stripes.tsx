import React from 'react';
import styled from 'styled-components';

const StripeContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    transform-origin: 0% 0%;
    transform: rotate(-45deg);
`;

const Stripe = styled.div`
    width: 1200vw;
    height: 30px;
    background-color: skyblue;
    margin-bottom: 20px;
`;

const Stripes = () => <StripeContainer>
    <Stripe/>
    <Stripe/>
    <Stripe/>
    <Stripe/>
</StripeContainer>

export default Stripes;