import styled from "styled-components";

export const ProjectsContainer = styled.div`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme["green-500"]}
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      a {
        color: ${({ theme }) => theme["gray-500"]};
        width: 3rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;
      
        color: ${({ theme }) => theme["gray-100"]};

        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        &:hover {
          border-bottom: 3px solid ${({ theme }) => theme["green-500"]};
        }

        &.active {
          color: ${({ theme }) => theme["green-500"]};
        }
      } 
    }
  }
`

export const ProjectsList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  button {
    background: inherit;
    border: 0;
    color: ${({ theme }) => theme["gray-100"]};
    align-items: center;
    cursor: pointer;
    
    &:hover {
      color: ${({ theme }) => theme["green-500"]};
      transition: all 0.2s;
    }
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    
    span {
      width: 100%;
      margin-left: -40px;
      height: 5rem;
      display: flex;      
      justify-content: center;
      align-items: center;
    }

    th {
      background-color: ${({ theme }) => theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${({ theme }) => theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      
      &:last-child {
        border-top-right-radius: 8px;
        padding-left: 1.5rem;
      }
    }

    td {
      background-color: ${({ theme }) => theme["gray-700"]};
      border-top: 4px solid ${({ theme }) => theme["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 20%;
        padding-left: 1.5rem;
      }
      
      &:last-child {
        align-items: center;
        justify-content: center;
        padding-left: 0.2rem;
      }
    }

    button {
      cursor: pointer; 

      &:hover {
        color: ${({ theme }) => theme["red-500"]};
        transition: all 0.2s;
      }
    }
  }

  a {
    color: ${({ theme }) => theme["gray-100"]};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme["green-500"]};
      transition: all 0.2s;
    }
  }
`