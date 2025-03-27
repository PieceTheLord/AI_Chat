import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

interface AuthProviderProps { children: ReactNode }

export const AuthProvider = async ({children}: AuthProviderProps) => {
  // TODO: Implement the authorization validation
  const session = await auth()
  if (!session) return redirect("http://localhost:3000/")
  return <>{children}</>
}
export default AuthProvider