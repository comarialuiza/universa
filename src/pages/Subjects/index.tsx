import React from 'react';

import Subject from '../../components/Subject';
import { Container, SubjectsContainer } from './styles';

import subjectsMock from './subjectsMockData';

const Subjects: React.FC = () => {
    return (
        <Container>
            <SubjectsContainer>
                { subjectsMock.map(subject => (
                    <Subject subject={ subject }/>
                )) }
            </SubjectsContainer>
        </Container>
    );
}

export default Subjects;