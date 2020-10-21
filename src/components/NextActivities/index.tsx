import React, { useState } from 'react';

import PopUp from './../PopUp';
import { Container, Activity, ActivityName, ActivityDate } from './styles';

import nextActivitiesMockData from './../../utils/nextActivitiesMockData';

interface NextActivity {
    id: string,
    title: string,
    date: string,
    content: string,
}

const NextActivities: React.FC = () => {
    const [ modalVisibility, setModalVisibility ] = useState(false);
    const [ currentActivity, setCurrentActivity ] = useState<NextActivity | null>(null);

    return (
        <Container>
            { nextActivitiesMockData.map((nextActivity: NextActivity) => (
                <Activity 
                    key={ nextActivity.id }
                    onClick={() => {
                        setModalVisibility(true);
                        setCurrentActivity(nextActivity);
                    }}
                >
                    <ActivityName>{ nextActivity.title }</ActivityName>
                    <ActivityDate>{ nextActivity.date }</ActivityDate>
                </Activity>
            )) }

            { modalVisibility && (
                <PopUp setModalVisibility={ setModalVisibility } title={ currentActivity?.title }>
                    <p>{ currentActivity?.content }</p>
                </PopUp>
            )}
        </Container>
    );
}

export default NextActivities;