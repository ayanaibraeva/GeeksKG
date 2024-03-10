import GeeksQuestions from './blocks-14/geeksQuestions/GeeksQuestions'
import GeeksCompanies from  './blocks-14/geeksCompanies/GeeksCompanies'
import GeeksPluses from './blocks-14/geeksPluses/GeeksPluses'
import MainGeeksPro from './blocks-14/mainGeeksPro/MainGeeksPro'

function GeeksPro() {

    return (
        <div className="App">
            <MainGeeksPro/>
            <GeeksPluses />
            <GeeksQuestions />
            <GeeksCompanies />
        </div>
    );
}

export default GeeksPro;