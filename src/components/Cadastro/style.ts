import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Formulario = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
  gap: 3px;
  }
`

export const Button = styled.button`
  background: ${variaveis.preto};
  color: ${variaveis.branco};
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 9px;
  width: 78px;
  height: 35px;

  &:hover {
    background: ${variaveis.cinzaEscuro};
  }
`

export const ButtonSalvar = styled(Button)`
  background: ${variaveis.verde};

  &:hover {
    background: ${variaveis.verdeClaro};
  }
`

export const CancelButton = styled(Button)`
  background-color: ${variaveis.vermelho};

  &:hover {
    background: ${variaveis.vermelhoClaro};
  }
`

export const InputNomeRegistrado = styled.input`
  padding: 8px;
  border: none;
  border-bottom: 1px solid ${variaveis.cinza};
  background-color: transparent;
  line-height: 15px;
  font-family: 'Roboto Mono', monospace;
  width: 300px;
`

export const InputTelefoneRegistrado = styled(InputNomeRegistrado)`
  width: 215px;
`

export const InputEmailRegistrado = styled(InputNomeRegistrado)`
  width: 300px;
`
