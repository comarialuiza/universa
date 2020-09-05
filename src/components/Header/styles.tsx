import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
    background-color: var(--color-white);
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    @media (min-width: 1141px) {
        width: 300px;
        height: calc(100vh - 80px);
        border-radius: 20px 0 0 20px;
        padding: 40px;
    }

    @media (max-width: 1140px) {
        display: none;
    }
`;

export const HeaderContainer = styled.div``;

export const Title = styled.h1`
    font-family: Megrim;
    font-size: 50px;
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
    margin: 6px 0;
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

export const User = styled.div<{ image: string }>`
    height: 60px;
    width: 60px;
    display: block;
    background: url(${ props => props.image });
    background-position: center;
    background-size: 70px;
    border-radius: 50%;
    border: 5px solid var(--color-primary);
`;