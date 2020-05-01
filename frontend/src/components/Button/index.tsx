import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';
// quando a interface está vazia, o eslint convert automaticamente para type
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
// separado children que representa o conteudo usado quando chamado o componente,
// o ...props se refere a todas as outras propriedades que vão ser salvas na var props
const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Container type="button" {...props}>
    {children}
  </Container>
);

export default Button;
