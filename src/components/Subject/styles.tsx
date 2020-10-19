import styled from 'styled-components/macro';

export const Container = styled.div<{ type: string }>`
    border-left: 5px solid var(--color-primary);
    border-radius: 8px;
    padding: 30px 20px 20px;
    background-color: var(--color-white);
    position: relative;
    margin-bottom: ${props => props.type === 'performance' ? '30px' : '0'};

    @media (max-width: 480px) {
        margin-bottom: 30px;
    }
`;

export const Title = styled.h3`
    height: 46px;
    overflow: hidden;
    margin-bottom: 8px;
    font-size: 1.5rem;
    font-weight: 500;
    font-size: 18px;
    color: var(--color-text-title);
`;

export const Teacher = styled.p`
    color: var(--color-text-complement);
    font-size: 15px;
`;

export const CodeFlag = styled.span`
    position: absolute;
    top: 10px;
    right: -5px;
    padding: 2px 4px;
    background-color: var(--color-secondary);
    font-size: 13px;
    color: var(--color-title-in-primary);
    border-radius: 4px;
`;

export const StatisticContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const GradeContainer = styled.div`
    @media (min-width: 991px) {
        width: 48%;
    }
`;

export const InfoContainer = styled.div`
    @media (max-width: 990px) {
        margin-bottom: 20px;
    }

    @media (min-width: 991px) {
        width: 48%;
    }
`;

export const Info = styled.div`
    

    @media (min-width: 991px) {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

export const Button = styled.button`
    border: 0;
    display: block;
    padding: 8px 12px;
    border-radius: 4px;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    background: var(--color-white);

    @media (max-width: 790px) {
        width: 100%;
    }

    &&:not(:last-of-type) {
        margin-bottom: 15px;
    }
`;