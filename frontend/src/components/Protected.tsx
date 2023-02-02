import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
interface Protected {
  children: ReactElement
}

export function Protected({ children }: Protected) {
  const token = localStorage.getItem('@Auth:token')

  if ( token ) {
    return children
  }

  return <Navigate to="/" />
}