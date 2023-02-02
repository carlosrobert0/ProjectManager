import { 
  createContext, 
  ReactNode, 
  useContext
} from "react";

import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface AuthProvider {
  children: ReactNode;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface IAuthContextData {
  signIn({ username, password }: SignInCredentials): Promise<void>;
  signOut(): void;
}



const AuthContext = createContext({} as IAuthContextData)

function AuthProvider({ children }: AuthProvider) {
  const navigate = useNavigate()

  function signOut() {
    localStorage.removeItem('@Auth:token')
    navigate('/')
  }

  async function signIn({ username, password }: SignInCredentials) {
    try {
      const response = await api.post("/authenticate", {
        username,
        password
      })

      localStorage.setItem('@Auth:token', response.data)
      
      const token = localStorage.getItem('@Auth:token')
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      navigate("/projects")
    } catch (error) {
      
    }
  }

  return (
    <AuthContext.Provider value={{ 
      signIn,
      signOut
    }}>
      { children }
    </AuthContext.Provider >
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }