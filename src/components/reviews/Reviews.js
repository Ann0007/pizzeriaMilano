
import React , {Component} from 'react';
import './_reviews.scss'
import { FaStar } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel'
import './_reviews.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

class Reviews extends Component {

    render() {

      AOS.init({duration: 3000,});

      const  Stars = () => {
        const StarsArray = [1, 2, 3, 4, 5];
        return (
          <>
          {StarsArray.map((star) => (
            <FaStar className="star" key={star} />
          ))}
          </>
        )
      }

      return (
       <div  data-aos="fade-up">
          <h1 className="review-header">Vad säger våra gäster om oss?</h1>
          <hr className="hrLine" />
          <div className="review-container">  
         
        <Carousel className="carousel">
        <Carousel.Item interval={6000}>
           <div className="review-box">
            <ul className="list-style" >
              <li> 
                <Stars />
              </li>
              <br/>
              <li className="quote">"God mat & alltid grym service"</li>
              <br/>
              <li className="comment">"Jag kan varmt rekommendera Milano i Växjö. Jättegod mat och supertrevlig personal" <br/><b> Malin</b></li>
            </ul>
          </div> 
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
        <div className="review-box">
            <ul className="list-style">
              <li>
                <Stars />
              </li>
          <br/>
              <li className="quote">"En av stans bästa pizzerior"</li>
          <br/>
              <li className="comment"> Mycket goda pizzor. Vår erfarenhet är att det är en av de bästa pizzorierna i Växjö. Har funnits i många år med samma ägarfamilj."<br/> <b> Marcell</b></li>
            </ul>
          </div> 
          
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
        <div className="review-box">
            <ul className="list-style">
              
                <li ><Stars /></li>
              
              <br/>
                <li className="quote">"Bästa Pizzan i Växjö"</li>
              <br/>
                  <li className="comment">"Grymt god mat, både pizzor & ala carte. Man känner genast att kvalitén på råvaror och annat är mycket bättre än på andra ställen!" <br/><b>Katja</b></li>
            </ul>
          </div>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>   
      </Carousel>
      </div>
      </div>
      );
    }
  }

export default Reviews;
