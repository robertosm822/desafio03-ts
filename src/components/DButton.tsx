import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"
import '../pages/css/styles.css'

interface IDButton {
    onClick: MouseEventHandler
}

export const DButton = ({ onClick }: IDButton) => {
    return(
        <Button
          onClick={onClick}
          className="btn-login"
          size="sm"
          width="100%"
          marginTop="5px"
        >
          Entrar
        </Button>
    )
}

export default DButton
