import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    text-align: center;
    padding: 40px;
    background-color: var(--color-primary);
`;

export const Title = styled.h1`
    font-family: Megrim;
    font-size: 40px;
    color: var(--color-secundary);
`;

export const Welcome = styled.p`
    margin-bottom: 8px;
    color: var(--color-title-in-primary);
`;

export const Navigation = styled.nav`
    padding: 5px;
`;

export const NavigationLink = styled(NavLink)`
    padding: 10px 12px;
    margin: 0 15px;
    border-radius: 8px;
    color: var(--color-text-complement);

    svg {
        margin-right: 8px;
        color: var(--color-text-complement);
    }

    &&:hover {
        color: var(--color-text-complement);
    }

    &&.activeLink {
        background-color: var(--color-tertiary);
        color: var(--color-text-title);

        svg {
            color: var(--color-text-title);
        }
    }
`;