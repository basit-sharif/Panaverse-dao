"use client"
import { ChakraProvider } from "@chakra-ui/react"
import Main from "./Main"

export default function Home() {

  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  )

}
