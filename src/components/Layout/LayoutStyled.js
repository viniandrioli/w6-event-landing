import styled from "styled-components";
import meetingImage from "../../assets/meeting.jpg";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  main {
    background: #1b232e;
  }

  .header {
    position: absolute;
    top: 2%;
    z-index: 2;
    left: 2%;
    box-shadow: rgb(0 0 0 / 15%) 0px 15px 25px, rgb(0 0 0 / 5%) 0px 5px 10px;
  }

  .event {
    &__main {
      width: 98.9vw;
      height: 99vh;
      clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    }
    &__video-content {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    &__main-text {
      position: absolute;
      font-size: 70px;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      text-shadow: 4px 4px #00000014;

      p {
        font-size: 50px;
        line-height: 20px;
        text-align: right;
        color: #eff183;
        letter-spacing: 40px;
      }
    }
    &__title {
      line-height: 100px;
      font-weight: 900;
      &--sub {
        display: flex;
        align-items: center;
        margin-left: 30px;
        font-weight: 900;
      }
      &--and {
        background-color: rgb(254 34 111);
        border-radius: 50%;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        p {
          font-size: 30px;
          color: #4a348fc7;
          font-weight: 700;
          letter-spacing: 0px;
        }
      }
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, #fe226f63 0%, #2f2262 100%);
  }
`;

export const InfoSection = styled.section`
  height: 600px;
  
  @property --num {
    syntax: "<integer>";
    initial-value: 0;
    inherits: false;
  }

  @keyframes counter {
    from {
      --num: 0;
    }
    to {
      --num: 25;
    }
  }

  @keyframes counter2 {
    from {
      --num: 0;
    }
    to {
      --num: 100;
    }
  }

  @keyframes counter4 {
    from {
      --num: 0;
    }
    to {
      --num: 16;
    }
  }


  .ul--info[data-scroll="out"] {
    opacity: 0;
    transform: translateX(-200px);
  }

  .ul--info[data-scroll="in"] {
    opacity: 1;
    transition: all 2s;
    transform: translateX(0);

    .number--first {
        animation: counter forwards 1s alternate ease-in-out;
        counter-reset: num var(--num);
      }
    .number--first::before, .number--second::before, .number--forth::before {
      content: "+";
    }
    .number--first::after {
      content: counter(num);
    }
    .number--second {
      animation: counter2 forwards 1s alternate ease-in-out;
      counter-reset: num var(--num);
    }
    .number--second::after {
      content: counter(num);
    }
    .number--forth {
      animation: counter4 forwards 1s alternate ease-in-out;
      counter-reset: num var(--num);
    }
    .number--forth::after {
      content: counter(num);
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style-type: none;
    color: #fff;
    padding: 100px;
    margin-left: 200px;
    li {
      display: flex;
      flex-direction: column;

    }    
  }
    p {
      max-width: 250px;
      font-size: 25px;
    }
    span {
      font-size: 70px;
      color: #fe226f;
    }
  }
`;

export const TimerSection = styled.section`
  height: 600px;
  background-image: linear-gradient(#fe226f63 0%, #2f2262 100%),
    url(${meetingImage});
  background-size: cover;

  .timer--info {
    gap: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: inherit;
  }

  p {
    gap: 100px;
    color: #fff;
    font-size: 30px;

    span {
      font-weight: 700;
    }
  }

  .timer--info {
    [data-scroll="out"] {
      opacity: 0;
      transform: translateY(100px);
    }
    [data-scroll="in"] {
      opacity: 1;
      transition: all 4s;
      transform: translateY(0);
    }
  }

  #timer {
    display: flex;
    color: #fff;
    font-size: 22px;
    gap: 60px;
    line-height: 50px;

    .time {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .number {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f8faf9;
        color: #000;
        width: 100px;
        height: 100px;
        font-size: 50px;
      }
    }
  }
`;

export const YoutubeSection = styled.section`
  height: 600px;
  background-color: #252f3d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  height: 300px;
  background-color: #1b232e;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  font-size: 15px;

  .footer__first {
    border-right: 1px solid;
    img {
      margin-left: -15px;
    }
    p {
      max-width: 345px;
    }
  }

  .footer__second {
    line-height: 40px;
    margin-left: -140px;
    p:first-child {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .footer__third {
    p {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
