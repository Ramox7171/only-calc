import { Container, Box, Typography } from "@mui/material";
import { aboutTxt } from "../assets/helpers/constats.helper";
import * as strings from '../assets/helpers/text.strings.json';

const About = () => {
    return (<Container sx={{mt:10}}>
        <Box>
            <Typography variant="h2">{strings.aboutHeader}</Typography>
        
        </Box>
        <Box>
            {aboutTxt.map((item)=>(
                <Typography key={item.id} variant="h6" sx={{textAlign: 'left',mt:6}}>{item.paragraph}</Typography>
            ))}
        </Box>
    </Container>)
};

export default About;