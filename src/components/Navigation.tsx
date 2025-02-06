import { AppBar, Box, Button, Toolbar } from "@mui/material";
import logo from '/calc-logo.png';
import * as strings from '../assets/helpers/text.strings.json';
import { ActiveContent } from "../assets/helpers/constats.helper";


interface NavigationProps {
    contentFn: (content: ActiveContent) => void;
}

const Navigation = ({ contentFn }: NavigationProps) => {

    return (
        <>
            <AppBar>
                <Toolbar sx={{
                    display: 'flex',
                    bgcolor: "#fff",
                    justifyContent: 'space-between'
                }}>
                    <Box sx={{ px: 2 }}>
                        <img src={logo} alt="Logo" style={{ height: 80 }} onClick={() => contentFn(ActiveContent.Hello)} />
                    </Box>
                    <Box>

                        <Button onClick={() => contentFn(ActiveContent.Calculator)} sx={{ fontWeight: 'bold' }}>
                            {strings.calculatorBtn}
                        </Button>

                        <Button onClick={() => contentFn(ActiveContent.About)} sx={{ fontWeight: 'bold' }}>
                            {strings.about}
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navigation;
