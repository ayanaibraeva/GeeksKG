import React from 'react';
import ourTeam from './ourTeam.json'

const OurTeam = () => {
    return (
        <section className="ourTeam">
            <div className="container">
                <div className="ourTeam__content">
                    <h2></h2>
                    {ourTeam.map((item) => {

                    })}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;