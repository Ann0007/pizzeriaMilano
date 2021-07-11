import React, { useLayoutEffect } from 'react';
import { Link } from "react-router-dom";
import chef from '../../images/itchef.jpg';
import './_aboutus.scss';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const AboutUs = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
      });

    return (
        <>
        <Navbar/>
            <div className="topImage"> 
            <div id="Scroll-up"></div>
                <div className="aboutUsDiv">
                    <div className="leftDiv">
                        <div className="imageDiv">
                            <img src={chef} alt="pizza chef" className="chefImage"/>
                            <p className="welcomeText">Välkomna!</p>
                        </div>
                    </div>
                    <div className="rightDiv">
                        <h1 className="aboutUsTitle">Om oss</h1>
                        <p className="textInRightDiv">
                            <b>1983</b> slog Carlo Buratti och Ioannis Papadopolous upp dörrarna till vår idag väldigt 
                            anrika och populära italienare Milano i centrala Växjö. Då var pizza något nytt för 
                            svenska befolkningen och kanske endast något man hade provat på semestern tidigare. 
                            Folk åkte flera mil för att komma till Växjö och Milano då folks allmänna intresse 
                            för den omtalade och nya rätten var väldigt stort. Under åren som gått har restaurangen 
                            vandrat genom familjeleden och idag möter du andra generationen som ägare.
                        </p>
                        <p className="textInRightDiv">
                            Domenico och Nicola Mangialardo som idag driver och äger Milano är söner till Vittorio Mangialardo 
                            som tillsammans med Uber Zomegnan och Mario Rupnik startade upp restaurangen. En uppstart som både 
                            har varit och är väldigt uppskattad, här är det italienska arvet förvaltat och den italienska maten 
                            görs till allas grej. Vissa saker hör bara traditionen till, som att äta fantastisk god och vällagad 
                            italiensk mat tillagad från grunden på riktiga råvaror.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ecoContainer">
                <div className="ecoTextDiv">
                <hr className="ecoHrLine" />
                    <h2 className="ecoTitle">Ekologiska Råvaror!</h2>
                    <p className="ecoText">
                        Många människor vill bli mer miljövänliga och äta mer ekologiskt.
                        Att välja ekologiskt handlar dock inte enbart om att vara snällare mot miljön. 
                        Du är även snällare mot din hälsa.
                    </p>
                    <p className="ecoText">
                        Vi väljer våra råvaror med omsorg och att använda ekologsikt känns viktigt för oss.
                        Alla våra pizzor tillagas med färska ekologiska råvaror av högsta kvaliten.
                    </p>
                </div>
                <div className="ecoImage"></div>
            </div>        
            
            <div id="kontakt"  className="contactInfoSection">
                <div className="googleSectionLeft">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.115711022832!2d14.809658216418773!3d56.878259012094816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46572392c57a4c63%3A0xaeedfcdd09721a60!2zU3RvcmdhdGFuIDEsIDM1MiAzMyBWw6R4asO2!5e0!3m2!1ssv!2sse!4v1620032543537!5m2!1ssv!2sse" className="googleMaps" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="Padova"></iframe>
                </div>
                <div className="underSectionRight">
                    <p className="contactUs">Kontakta oss</p>
                    <p className="phoneNr">1234 - 000 00</p> 
                    <p className="openingHrs">Måndag-Torsdag: 11:00-20:00</p>
                    <p className="openingHrs">Fredag: 11:00-21:00 </p>
                    <p className="openingHrs">Lördag: 12:00-21:00</p>
                    <p className="openingHrs sunday">Söndag: 12:00-20:00</p>
                    <Link to="/reservation" className="booking">Boka Bord</Link>
                    <Link to="/reservation" className="booking">Boka Avhämtning</Link>
                </div>
            </div>
           
        {/* <Footer/> */}
        </>
    )
};

export default AboutUs;

