import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";
import './css/styles.css'

const Home = () => {
    const [ email, setEmail ] = useState<string>('')
    const [password, setPassword] = useState<string>("");
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if(!loggedIn){
            return alert('Email ou senha inválidos')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        navigate('/conta/1')
    }
  
    return (
        <Box padding="25px">
            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <div className="space-input-login">
                    <Input
                        placeholder="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="space-input-login">
                    <Input
                        type="password"
                        placeholder="senha"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <Center>
                    <DButton onClick={() => validateUser(email, password)} />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;
