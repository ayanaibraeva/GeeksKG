import React from 'react';
import TitleCours from './components/TitleCours/TitleCours';
import AllUsersBlock from './components/AllUsersBlock/AllUsersBlok';
import TestCours from './components/TestCoursBlock/TestCours';

const Courses = () => {

    return (
        <div>
            <TitleCours />
            <AllUsersBlock />
            <TestCours />
        </div>
    );
};

export default Courses;