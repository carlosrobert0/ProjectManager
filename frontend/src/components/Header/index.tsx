import { HeaderContainer, LogoContainer, ImageLogoKanban, LogoText } from "./styles";
import { NavLink } from 'react-router-dom'
import { Plus, SignIn } from "phosphor-react";
import { useTheme } from "styled-components";

import kanban from './../../assets/kanban.png'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Inicio" end style={{ textDecoration: 'none' }}>
        <LogoContainer>
          <ImageLogoKanban src={kanban} />
          <LogoText>Gerenciador de projetos</LogoText>
        </LogoContainer>
      </NavLink>

      <nav>
        <NavLink to="/" title="SignIn" end>
          <SignIn size={24} />
        </NavLink>
        <NavLink to="/register" title="Account create" end>
          <Plus size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}