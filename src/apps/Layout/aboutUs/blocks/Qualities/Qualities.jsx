import React from 'react';
import QualitiesJson from './Qualities,.json';
import './Qualities.css';



const QualitiesJsonItem = ({ qualities }) => (
    <div key={qualities.id}
    className='content'>
        <h3>{qualities.id}</h3>
        <div className='p'>
            <h4>{qualities.titleQualities}</h4>
            <p>{qualities.contentQualities}</p>
        </div>
    </div>
);

const Qualities = () => {
    return (
        <section className="Qualities">
            <div className="container">
                <div className="Qualities__content">
                    <h2>Your Heading</h2>
                    <div className="contents">
                        {QualitiesJson.map((qualities) => (
                            <QualitiesJsonItem key={qualities.id} qualities={qualities} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualities;
