import { Box } from "@chakra-ui/react"
import { Header } from "./Header"

export const Layout = ({ children }: any) => {
  return(
    <Box minHeight='100vh' backgroundColor='#7977ff' >
      <Header />
      { children }
    </Box>
  )
}
