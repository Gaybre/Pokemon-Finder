import styled from 'styled-components'

export const Alert = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 30%;
  height: 35px;
  margin: 0 auto;
  border-radius: var(--border);
  text-align: center;
  color: var(--grayscale-1);
  background-color: rgba(0,0,0, .3);
  z-index: var(--zindex-notification);
  animation: fadeIn 4s 1;

  @keyframes fadeIn {
    0% {
      top: 0;
      left: 0;
      right: 0;
      width: 30%;
    }
    10% {
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
    }
    20% {
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
    50% {
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      opacity: 0.9
    }
    100% {
      opacity: 0;
    }
  }
`

export const Message = styled.div`
  position: absolute;
  bottom: 70px;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size:.1rem;
  animation: fadetext 4s 1;
  img {
    width: 10px;
    opacity: 0;
    animation: fadeImg 3s 1;
  }

  @keyframes fadeImg {
    0% {width: 10px;}
    20% {
      width: 10px;
      opacity: .1;
    }
    30% {
      width: 120px;
      opacity: 1;
    }
    70% {
      width: 120px;
      opacity: 1;
    }
    75% {
      width: 20px;
      opacity: .2;
    }
    100% {
      width: 10px;
      opacity: 0;
    }
  }

  @keyframes fadetext {
    0% {font-size: .1rem;}
    20% {font-size: 1.2rem;}
    50% {font-size: 1.2rem;}
    100% {font-size: .2rem;}
  }
  `