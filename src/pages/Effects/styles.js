import styled, { keyframes } from 'styled-components';
// import BaseAnimation using for animations
import BaseAnimation from '../../styles/animation';

// Animations using keyframes
const FadeInAnimation = keyframes`
    from { opacity: 0; top: 0px; margin-right: 100px;}
    to { opacity: 1; top: 50px; margin-right: -10px}
`;
// Effect animation FadeIn
export const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
  margin-top: 10px;
`;

// Object Example
export const Item = styled.div`
  width: 500px;
  height: 100%;
  border-radius: 4px;
  font-weight: bold;
  padding: 15px;
  box-shadow: 2px 2px 5px 1px #666;
  background-color: #3399ff;
  color: #fff;
  word-wrap: break-word;
`;

// Container for content items
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export const InputText = styled.input.attrs({
  type: 'text',
  placeholder: 'Insira aqui o seu texto',
})`
  margin-bottom: 100px;
  width: 500px;
  height: 40px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #7159c1;
  margin-right: 10px;
  padding-left: 10px;
`;

export const Form = styled.form`
  /* border: 1px solid black; */
  padding: 10px;
  height: 10vh;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
`;

export const ScrollTodos = styled.div`
  overflow: auto;
  width: 60%;
  padding: 10px;
  bottom: 0;
`;
