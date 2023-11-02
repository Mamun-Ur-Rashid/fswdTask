import React from 'react';
import { Button, CardContainer } from '../component/styles/ContainerStyle';
import {H2, H4, P, StyledImage } from '../component/styles/ElementStyle';

const BookCard = ({book}) => {
    const {id, image, title, description, price,category} = book;
    return (
        <CardContainer>
            <StyledImage src={image} alt='' />
            <H2>Name : {title}</H2>
            <P>Description: {description}</P>
            <H4>Price : ${price}</H4>
            <Button>Buy Now</Button>
        </CardContainer>
    );
};

export default BookCard;