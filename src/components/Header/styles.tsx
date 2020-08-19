import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
    padding: 40px;
    background-color: var(--color-white);
    width: 300px;
    height: calc(100vh - 80px);
    border-radius: 20px 0 0 20px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
`;

export const Title = styled.h1`
    font-family: Megrim;
    font-size: 40px;
    color: var(--color-primary);
`;

export const Welcome = styled.p`
    margin-bottom: 8px;
    color: var(--color-text-complement);
`;

export const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`;

export const NavigationLink = styled(NavLink)`
    padding: 10px 12px;
    margin: 8px 0;
    border-radius: 8px;
    color: var(--color-primary);

    svg {
        margin-right: 8px;
        color: var(--color-primary);
    }

    &&:hover {
        color: var(--color-primary);
    }

    &&.activeLink {
        background-color: var(--color-primary);
        color: var(--color-button-text);

        svg {
            color: var(--color-button-text);
        }
    }
`;