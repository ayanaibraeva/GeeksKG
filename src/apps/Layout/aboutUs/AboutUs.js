import React from 'react';
import HistoryAdd from "./blocks/historyAdd/HistoryAdd";
import OurValues from "./blocks/ourValues/OurValues";
import WorkBlock from "./blocks/work/WorkBlock";
import Qualities from "./blocks/Qualities/Qualities";
import MainAboutUp from "./blocks/mainAbout/MainAboutUp";



const AboutUs = () => {
    return (
        <>
            <MainAboutUp/>
            <HistoryAdd/>
            <OurValues/>
            <WorkBlock/>
            <Qualities/>
            {/*<OurTeam/>*/}
        </>
    );
};

export default AboutUs;