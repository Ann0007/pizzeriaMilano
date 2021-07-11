import React from 'react';

import { Link } from "react-router-dom";
import Reviews from '../reviews/Reviews';
import './_history.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';


const History = () => {
    AOS.init({duration: 3000,});

    return (
        <div>
            <div data-aos="fade-up" className="historyContainer">
                <div className="leftSection">
                    <h1 className="ourHistoryTitle">Vår historia</h1>
                    <hr className="hrLineunderTitle" />
                    <p className="ourHistoryText">
                        Sedan 1983 har vi förädlat, utvecklat och fortsatt leverera mat inspirerad av det italienska köket. 
                        Att restaurangen fortfarande drivs inom samma familj är ett kvitto på den höga standard våra pizzor håller.
                    </p>
                    <p className="ourLastSentence">
                        Många säger att vi sedan 1983 nu lyckats skapa <em>”Växjös bästa pizza“</em>.
                    </p>
                    <Link to="/aboutus" className="linkToAboutUs">Läs mer om oss</Link>
                </div>
                <div className="rightSection">
                    <div className="img1"></div>
                    <div className="img2"></div>
                </div>
            </div>
            <Reviews/>
            
        </div>
    )
};

export default History;