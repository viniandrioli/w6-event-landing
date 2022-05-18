import React, { useEffect } from "react";
import {
  Wrapper,
  InfoSection,
  TimerSection,
  YoutubeSection,
  Footer,
} from "./LayoutStyled";
import { TimerComponent } from "components";
import ScrollOut from "scroll-out";
import video from "./Event-1.webm";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

export const Layout = () => {
  useEffect(() => {
    ScrollOut({ once: true, offset: 400 });
  }, []);

  return (
    <Wrapper>
      <div className="header">
        <img
          src="https://static.wixstatic.com/media/bd4eee_67394a507da048048ffebb827e3a57c4~mv2.png/v1/fill/w_110,h_105,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Novo_Logo_W6connect-removebg-preview%20(1).png"
          alt="Novo_Logo_W6connect"
        />
      </div>
      <main>
        <section className="event__main">
          <video class="event__video-content" autoPlay muted loop>
            <source src={video} type="video/webm" />
          </video>
          <div className="overlay" />
          <div className="event__main-text">
            <h1 className="event__title">˹tecnologic</h1>
            <h2 className="event__title--sub">
              <span className="event__title--and">
                <p>and</p>
              </span>
              innovation˺
            </h2>
            <p>SUMMIT</p>
          </div>
        </section>
        <InfoSection>
          <ul data-scroll className="ul--info">
            <li>
              <span className="number--first" />
              <p>PALESTRAS</p>
            </li>
            <li>
              <span className="number--second" />

              <p>EMPRESAS PARTICIPANTES</p>
            </li>
            <li>
              <span className="number--first" />
              <p>PALESTRAS COM TRASMISSÃO AO VIVO</p>
            </li>
            <li>
              <span className="number--forth" />
              <p> HORAS DE CONTEÚDO E NETWORKING</p>
            </li>
          </ul>
        </InfoSection>
        <TimerSection>
          <div className="timer--info">
            <p data-scroll>
              Em breve, o evento mais importante do Brasil para Diretores de
              <span> Supply Chain, Logística e Compras.</span>
            </p>
            <TimerComponent />
          </div>
        </TimerSection>
        <YoutubeSection>
          <iframe
            title="w6"
            width="640"
            height="438"
            src="https://www.youtube.com/embed/?listType=playlist&list=PLywIm6oN_Fu_6PaL4W7iOLWOT0FBGIOKe"
          ></iframe>
        </YoutubeSection>
      </main>
      <Footer>
        <div className="footer__first">
          <img
            src="https://static.wixstatic.com/media/bd4eee_67394a507da048048ffebb827e3a57c4~mv2.png/v1/fill/w_110,h_105,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Novo_Logo_W6connect-removebg-preview%20(1).png"
            alt="Novo_Logo_W6connect"
          />
          <p>
            Covent Garden, 71-75 Shelton Street, London WC2H 9JQ, United Kingdom
          </p>
        </div>
        <div className="footer__second">
          <p>Contato</p>
          <p>info@w6connect.com</p>
          <p>(11) 3280-2804</p>
        </div>
        <div className="footer__third">
          <p>Redes Sociais</p>
          <div>
            <AiFillFacebook size={24} />
            <AiFillTwitterSquare size={24} />
            <AiFillYoutube size={24} />
            <AiFillInstagram size={24} />
          </div>
        </div>
      </Footer>
    </Wrapper>
  );
};
