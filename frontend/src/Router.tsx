import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Register } from "./pages/Register"
import { SignIn } from "./pages/SignIn"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  )
}