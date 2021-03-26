import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import BaseAnimation from '../../styles/animation';

// Animations
const animations = {
  fadein: () => keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`,
};

// Containers
export const Grid = styled(BaseAnimation)`
  animation-name: ${(props) => props.animation && animations[props.animation]};
  max-width: 100%;
`;

// Opções de estilização
const media = {
  grid: () => `
    @media (max-width: 450px){
      flex-direction: column;
    }
  `,
  painel: () => `
    height: 100vh;
    @media(min-width: 450px){
     
      left: 0px;
    }
  `,
  painel_left: () => `
    height: 100vh;
    @media(min-width: 450px){
      h1{
        margin-left: 24%;
      }
    }
  `,
  content: () => `
    top: 0px;
    @media(min-width: 400px){
      margin-top: -598px;
    }
    
  `,
};

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.display && media[props.display]}
`;

export const Col = styled(BaseAnimation)`
  flex: ${(props) => props.size && props.size};
  padding: 10px;
  width: 100%;
  /* background-color: #2a2a61; */
  background-color: #15153d;
  border: 1px solid #663399;
  color: #fff;
  animation-name: ${(props) => props.animation && animations[props.animation]};
  ${(props) => props.painel && media.painel}
  ${(props) => props.painel_left && media.painel_left}
`;

export const MenuOption = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Custom css for Material UI
const MaterialButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#7159c1'),
    backgroundColor: '#7159c1',
    '&:hover': {
      backgroundColor: darken(0.05, '#7159c1'),
    },
  },
}))(Button);
export const ButtonOption = styled(MaterialButton)`
  margin-left: 24%;
`;
