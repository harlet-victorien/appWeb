'use client'
import { FC } from "react"


type Props = {
    children: string
    onClick: () => void
}
  
export const Button: FC<Props> = ({children, onClick}) => {
return <span className="p-1 bg-blue-200">{children}</span>
}