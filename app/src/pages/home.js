import { useState } from 'react';
import DetailedAccordion from '../components/accordion';
import TemporaryDrawer from '../components/drawer';
import { Container } from '@material-ui/core';

export const Home = () => {



    return (
        <>
            <TemporaryDrawer />
            <Container fluid>
                <DetailedAccordion />
            </Container>
        </>
    )
}