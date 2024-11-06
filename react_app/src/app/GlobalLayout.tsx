'use client'
import { useRouter } from "next/navigation"
import { FC, ReactElement } from "react"
import "./GlobalLayout.css"
import { Button } from "../components/Button"


type Props = {
  children: ReactElement | ReactElement[]
}

export const GlobalLayout: FC<Props> = ({ children }) => {
  const router = useRouter()

  return <>
    <div>
      <Button onClick={() => router.push('/')}>Home</Button>
      <Button onClick={() => router.push('/books')}>Books</Button>
    </div>
    <div>
      {children}
    </div>
  </>
}

