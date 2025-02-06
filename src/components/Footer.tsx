import { Box, Button } from '@mui/material';
import * as strings from '../assets/helpers/text.strings.json';

const Footer = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                width: '80%',

                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'end',
                p: 1,
                m: 0

            }}
        >

            <Button
                sx={{
                    fontSize: '10px',
                    padding: '4px 8px',
                }}
                size="small"
                variant="text"
                component="a"
                href="https://github.com/Ramox7171"
                target="_blank"
                rel="noopener noreferrer"
            >
                {strings.footerBtn}
            </Button>
        </Box>
    );
};

export default Footer;
