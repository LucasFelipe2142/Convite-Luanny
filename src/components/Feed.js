import styled from "styled-components";
import sky from "../images/backLua.jpg";
import moon from "../images/moon.png";
export default function Feed() {
  console.log("feed");
  return (
    <Container>
      <div className="convite">
        <Moon src={moon} />
        <p>
          Conto com a sua presença para comemorar comigo o meu aniversário de 15
          anos
        </p>
        <Button>Confirmar Presença</Button>
        <Button2>Endereço e horário</Button2>
      </div>
      <Background src={sky} />
    </Container>
  );
}

const Container = styled.div`
  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #ac1800;
    margin-top: 30px;
    margin-bottom: 20px;
    font-family: "Sansita Swashed", cursive;
    font-size: 30px;
    text-align: center;
    font-weight: 900;
    width: 240px;
    line-height: 40px;
    text-shadow: 0.07em 0.07em 0.05em white;
  }
  .convite {
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
  }
`;

const Background = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: relative;
  top: 0;
  left: 0;
`;

const Moon = styled.img`
  opacity: 0.8;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const Button = styled.div`
  margin-top: 20px;
  width: 250px;
  height: 60px;
  background: #ac1800;
  border-radius: 7px;
  opacity: ${(props) => props.cor};
  display: flex;
  font-family: "Lexend Giga", sans-serif;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 26px;
  color: #ffffff;
`;
const Button2 = styled.div`
  margin-top: 20px;
  width: 250px;
  height: 60px;
  background: white;
  border-radius: 7px;
  opacity: ${(props) => props.cor};
  display: flex;
  font-family: "Lexend Giga", sans-serif;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 26px;
  color: #ac1800;
`;
