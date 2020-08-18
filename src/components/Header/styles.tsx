import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    text-align: center;
    padding: 40px;
`;

export const Title = styled.h1`
    font-family: Megrim;
    font-size: 40px;
`;

export const Welcome = styled.p`
    margin-bottom: 8px;
`;

export const Navigation = styled.nav`
    padding: 5px;
`;

export const NavigationLink = styled(Link)`
    padding: 5px;
`;