import React from 'react';
import Footer from '../footer/Footer';
import History from '../history/History';
import './_boxes.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Boxes = () => {

  AOS.init({duration: 3000,});

  const [hoverImage, setHoverImage] = React.useState(false);
  const [two, setTwo] = React.useState(false);
  const [three, setThree] = React.useState(false);

    return (
        <div data-aos="fade-up" className="boxesContainer">
          <div 
            className="boxes one" 
            onMouseEnter={() => setHoverImage(true)} 
            onMouseLeave={() => setHoverImage(false)}
          >
            {hoverImage ? <p className="hoverImageText">Sorella</p> : ''}
          </div>
          <div className="boxes two">
            <h2 className="prices">135:-</h2>
            <h4 className="titles">Italiensk plocktallrik</h4>
            <p className="textInBoxes">
              Boka vår stora succé! 
              Italiensk plocktallrik med en mängd läckerheter. 
              Går att få i ental likväl som till alla på hela festen!
            </p>
          </div>
          <div className="boxes three" onMouseOver={() => setTwo(true)} onMouseLeave={() => setTwo(false)}>
            {two ? <p className="hoverImageText">Glutenfritt</p> : ''}
          </div>
          <div className="boxes four">
            <h2 className="prices">Från 90:-</h2>
            <h4 className="titles">Stor variation</h4>
            <p className="textInBoxes">
              Välj bland vår meny eller komponera ihop en helt egen version utifrån dina önskemål och er egen budget.
            </p>
          </div>
          <div className="boxes five" onMouseOver={() => setThree(true)} onMouseLeave={() => setThree(false)}>
            {three ? <p className="hoverImageText">Roma</p> : ''}
          </div>
          <div className="boxes six">
            <h2 className="prices">Från 110:-</h2>
            <h4 className="titles">Glutenfritt!</h4>
            <p className="textInBoxes">
              Du vet väl att du kan få alla pizzor glutenfria? Välj från vår ordinarie meny och be om glutenfri botten!
            </p>
          </div>
          <History />
          <Footer/>
        </div>
    )
};

export default Boxes;