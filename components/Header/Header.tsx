import React from 'react'
import styles from '../../styles/Header.module.css'
import { css} from '@emotion/css'
import styled from '@emotion/styled'

const HeaderPage = styled.header `
  background-color: #e1e1e1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  color: rgb(37, 36, 36);
  height: 3rem;
`

const InputSearch = styled.input `
  background-color: #e1e1e1;
  border-color: rgba(37, 36, 36, 0.5);
  color: rgb(37, 36, 36);
  width: 200px;
  height: 2rem;
  border-radius: 5px;
  margin-right: 5px;
`

const ButtonSearch = styled.button `
  width: 100px;
  height: 2rem;
  background-color: rgb(37, 36, 36);
  color: rgb(209, 207, 207);
  cursor: pointer;
  border-radius: 5px;
`

type HeaderProps = {
  menu?: Array<string>
  pesquisar?: string;
}

export default function Header(props: HeaderProps) {
  return (
        <HeaderPage>
        <div>Logotipo</div>
        <nav>
          <ul className={css`
            width: 90%;
            display: inline-flex;
            margin: 0px;
            padding: 0;
            & > li {
              min-width: 100px;
              text-align: center;
              list-style: none;
            }
          `}>
          <li>Home</li>
          <li>Produtos</li>
          <li>Contato</li>
          <li>Serviços</li>
          </ul>
        </nav>
        <form>
          <InputSearch type='text' placeholder='Pesquisar'></InputSearch>
          <ButtonSearch>
            {props.pesquisar? props.pesquisar:'Search'}
          </ButtonSearch>
        </form>
      </HeaderPage>    
  )
}
