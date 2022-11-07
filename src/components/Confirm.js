import styled from "styled-components";
import { useState } from "react";
import sky from "../images/backLua.jpg";
import moon from "../images/moon.png";
export default function Feed() {
  console.log("feed");
  const [confirm, setConfirm] = useState("");
  return (
    <Container>
      <div className="convite">
        <Moon src={moon} />
        Rua:
        <p>Alípio de Paula Silveira 378</p>
        Bairro:
        <p>Antônio Pimenta</p>
        Data e horário:
        <p>12/11/2022 19:00H</p>
        <input
          disabled={false}
          type="text"
          name="input"
          placeholder="Digite seu nome"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <Button2 onClick={() => alert("Presença Confirmada")}>
          Confiramr presença
        </Button2>
      </div>
      <Background src={sky} />
    </Container>
  );
}

const Container = styled.div`
  color: white;
  font-family: "Sansita Swashed", cursive;
  font-size: 15px;
  text-align: center;
  font-weight: 900;
  width: 260px;
  text-shadow: 0.07em 0.07em 0.05em #ac1800;

  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    border: 1px solid #ac1800;
    outline: none;
    font-style: normal;
    font-weight: 400;
    margin-top: 20px;
    padding-left: 45px;
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
    font-size: 15px;
    line-height: 26px;
    color: #ac1800;
  }
  p {
    color: white;
    font-family: "Sansita Swashed", cursive;
    font-size: 20px;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 900;
    width: 240px;
    line-height: 30px;
    text-shadow: 0.07em 0.07em 0.05em #ac1800;
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
  margin-bottom: 20px;
`;

const Button2 = styled.div`
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
