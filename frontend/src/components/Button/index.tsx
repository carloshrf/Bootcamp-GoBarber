import React, { ButtonHTMLAttributes } from 'react';
import { boolean } from 'yup';
import { Container } from './styles';
// quando a interface está vazia, o eslint convert automaticamente para type
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};
// separado children que representa o conteudo usado quando chamado o componente,
// o ...props se refere a todas as outras propriedades que vão ser salvas na var props
const Button: React.FC<ButtonProps> = ({ children, loading, ...props }) => (
  <Container type="button" {...props}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
