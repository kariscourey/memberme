import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailCard } from "../common/DetailCard";
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';


export default function Member() {

    const { card } = useSelector(state => state.memberSlice);

    return (
        <Container>
            <DetailCard card={card} />
        </Container>
    );
}
