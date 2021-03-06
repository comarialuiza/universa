import React from 'react';

import Semester from '../../components/Semester';
import { Container, PerformanceContainer } from './styles';
import Header from '../../components/Header';

import subjectsMock from '../../utils/subjectsMockData';
interface Subject {
  title: string;
  code: string;
  teacher: string;
  hours: number;
  grade: number;
  frequency: number;
  status: string;
}

interface SemesterData {
  semesterNumber: number;
  active: boolean;
  subjects: Array<Subject>;
}

const Performance: React.FC = () => {
  return (
    <>
      <Header />
      <Container className="container">
        <PerformanceContainer>
          { subjectsMock.filter(status => status.active === true).map((semester: SemesterData) => (
            <Semester semester={ semester } parent="performance" key={ semester.semesterNumber } />
          )) }
        </PerformanceContainer>
      </Container>
    </>
  );
}

export default Performance;