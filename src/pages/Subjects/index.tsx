import React from 'react';

import Subject from '../../components/Subject';
import { Container } from './styles';

import subjectsMock from './subjectsMockData';

const Subjects: React.FC = () => {
    return (
        <Container>
            { subjectsMock.map(subject => (
                <Subject subject={ subject }/>
            )) }
        </Container>
    );
}

export default Subjects;