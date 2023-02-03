import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;
    
      color: ${({ theme }) => theme["gray-100"]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme["green-300"]};
      }

      &.active {
        color: ${({ theme }) => theme["green-300"]};
      }
    }
  }
`

export const LogoContainer = styled.div`
  width: 100%;
 
  display: flex;
  align-items: center;
  justify-content: start;

  gap: 1.125rem;
`

export const ImageLogoKanban = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`

export const LogoText = styled.h1`
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: normal;
  font-family: 'Roboto', sans-serif;

  color: ${({ theme }) => theme['gray-100']};
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme['green-300']};
  }
`