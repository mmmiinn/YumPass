import { styled } from "styled-components";
import LoginForm from "../components/login";

const loginPage = () => {
  return (
    <>
      <LoginArea>
        <LoginForm />
      </LoginArea>
    </>
  );
};

export default loginPage;

const LoginArea = styled.div``;
