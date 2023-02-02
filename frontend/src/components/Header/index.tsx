import { HeaderContainer, LogoContainer, LogoText } from "./styles";
import { NavLink } from 'react-router-dom'
import { Kanban, Plus, SignIn } from "phosphor-react";
import { useTheme } from "styled-components";

export function Header() {
  const theme = useTheme()

  return (
    <HeaderContainer>
      <NavLink to="/" title="Inicio" end style={{ textDecoration: 'none' }}>
        <LogoContainer>
          <Kanban size={32} weight="thin" color={theme["green-300"]} />
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