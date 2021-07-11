import React, {useLayoutEffect} from "react";
import './_menu.scss'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = ()=>{

  AOS.init({duration: 3000,});

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return(
    <div className="main-container">
    <Navbar/>
    <h1 className="header"> Pizzor</h1>
    <div className="menu-container"> 
      <div data-aos="fade-up" className="menu-pizza">
      <ol className="list">
        <li className="pizza">Margeritha 80kr</li>
          <ul>
            <li className="ingredients">Tomatsås, ost</li>
          </ul>
        <hr className="line"></hr>
          <li className="pizza">Vesuvio 80kr</li>
            <ul>
              <li className="ingredients">Tomatsås, ost, skinka</li>
            </ul>
            <hr className="line"></hr>
          <li className="pizza">Capricosa 80kr</li>
            <ul>
              <li className="ingredients">Tomatsås, ost, skinka, champinjoner</li>
            </ul>         
            <hr className="line"></hr>
          <li className="pizza">Hawaii 80kr</li>
            <ul>
              <li className="ingredients">Tomatsås, ost, skinka, ananas</li>
            </ul> 
            <hr className="line"></hr>
          <li className="pizza">Funghi 80kr</li>
            <ul>
              <li className="ingredients">Tomatsås, ost, champinjoner</li>
            </ul>
            <hr className="line"></hr>
          <li className="pizza">Sorella 80kr</li>
            <ul>
              <li className="ingredients">Tomatsås, ost, skinka, bacon</li>
            </ul> 
            <hr className="line"></hr>
          <li className="pizza">Bussola 80kr</li>
            <ul>
              <li className="ingredients">Tomatsås, ost, skinka, räkor</li>
            </ul>
            <hr className="line"></hr>
          <li className="pizza">Altonno 80kr</li>
            <ul>
              <li className="ingredients">Tomatsås, ost, tonfisk, rödlök</li>
            </ul>
            <hr className="line"></hr>
          <li className="pizza">Bolognese 80kr</li>
            <ul>
              <li className="ingredients">Tomatsås, ost, köttfärs, rödlök</li>
            </ul>
            <hr className="line"></hr>
          <li className="pizza">La Mafia 80kr</li>
            <ul>
              <li className="ingredients">Tomatsås, ost, bacons, rödlök,paprika</li>
            </ul>
      </ol>
    </div>
    
    <div data-aos="fade-up" className="menu-pizza">
      <ol className="list">
        <li className="pizza">Quatro stagione 90kr</li>
          <ul>
            <li className="ingredients">Skinka, räkor, musslor, champinjoner</li>
          </ul>
        <hr className="line"></hr>
          <li className="pizza">Roma 90kr</li>
            <ul>
              <li className="ingredients">Tonfisk, räkor, gorgonzolaost, lök, svartpeppar</li>
            </ul>
            <hr className="line"></hr>
          <li className="pizza">LCHF 111 90kr</li>
            <ul>
              <li className="ingredients">Kyckling, champinjoner, Kyckling, champinjoner, </li>
            </ul>         
            <hr className="line"></hr>
          <li className="pizza">Kebabpizza 90kr</li>
            <ul>
              <li className="ingredients">Champinjoner, rödlök, kebabkött, kebabsås</li>
            </ul> 
            <hr className="line"></hr>
          <li className="pizza">Husets 90kr</li>
            <ul>
              <li className="ingredients">Kebabkött, pommes, kebabsås</li>
            </ul>
            <hr className="line"></hr>
          <li className="pizza">Mexicana 90kr</li>
            <ul>
              <li className="ingredients">Köttfärssås, rödlök, jalapeňo, tacosås, vitlök (färsk)</li>
            </ul> 
            <hr className="line"></hr>
          <li className="pizza">Kycklingpizza 90kr</li>
            <ul>
              <li className="ingredients">Paprika, kyckling, färska tomater, vitlöksås</li>
            </ul>
            <hr className="line"></hr>
          <li className="pizza">Havspizza 90kr</li>
            <ul>
              <li className="ingredients">Räkor, musslor, krabbsticks, tonfisk</li>
            </ul>
            <hr className="line"></hr>
          <li className="pizza"> Öster 90kr</li>
            <ul>
              <li className="ingredients">Fläskfilé, champinjoner, bearnaissås</li>
            </ul>
            <hr className="line"></hr>
          <li className="pizza"> Hovshaga special 90kr</li>
            <ul>
              <li className="ingredients">Skinka, champinjoner, rödlök, fläskfilé, bearnaissås</li>
            </ul>
        </ol>
      </div>  
      </div> 
    
    <h1 className="header">Ala Carte</h1>
    <div data-aos="fade-up" className="menu-ala-carte">
        <ol className="list">
          <li className="pizza">Fläskfile med pommes 99kr</li>
            <ul>
              <li className="ingredients">Rödlök, gurka, isbergssallad, sparris (stekt), tomat, beasås</li>
            </ul>
          <hr className="line"></hr>
            <li className="pizza">Oxfile med pommes 129kr</li>
              <ul>
                <li className="ingredients">Rödlök, gurka, tomat, isbergssallad, champ. (stekt), beasås</li>
              </ul>
            <hr className="line"></hr>
            <li className="pizza">Arombiff med pommes 99kr</li>
              <ul>
                <li className="ingredients">Isbergssallad, tomat, rödlök, paprika (stekt), beasås</li>
              </ul>         
          <hr className="line"></hr>
            <li className="pizza">Schnitzel med pommes 99kr</li>
              <ul>
                <li className="ingredients">Isbergssallad, tomat, citron, gurka, beasås</li>
              </ul> 
          <hr className="line"></hr>
            <li className="pizza">Panerad rödspätta med kokt potatis 99kr</li>
              <ul>
                <li className="ingredients">Grönsaker, citron, remouladesås</li>
              </ul>
          <hr className="line"></hr>
        </ol>
      </div>
    <Footer/>
  </div>
  
  )
}
export default Menu


