import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: green;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  cursor: pointer;
  text-decoration: none;
`

export default Circulo
