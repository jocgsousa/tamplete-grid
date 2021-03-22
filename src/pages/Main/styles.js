import styled from 'styled-components';

// Container para conter todos os conteudos
export const Grid = styled.div``;

// Row estilizado para posicionar os conteudos de acordo com o tamanho da tela atual
export const Row = styled.div`
  display: flex;
  max-width: 1000px;
  @media (max-width: 400px) {
    flex-direction: column;
  }
  margin-left: 10px;
  margin-right: 10px;
`;

// Efeito que sera de acordo se o componente tiver a prop collapse como xs
const media = {
  xs: () => `
    @media only screen and (max-width: 400px){
        
        display: none;
      
    }
  `,

  big: () => `
    @media only screen and (max-width: 400px){
        transition: all 0.1s;
        height: 50px;
    }
  `,
};

// Container de coluna que recebe a prop size para delimitar o tamanho que irá ocupar
export const Col = styled.div`
  flex: ${(props) => props.size};
  margin: 2px;
  background: #fff;
  border: 2px solid palevioletred;
  padding: 10px;
  ${(props) => props.collapse && media[props.collapse]};
  border-radius: 4px;
  transition: all 0.1s;
`;

export const Frame = styled.iframe``;
