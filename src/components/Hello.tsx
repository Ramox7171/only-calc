import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { howto } from "../assets/helpers/constats.helper";
import * as strings from '../assets/helpers/text.strings.json';
import { ActiveContent } from "../assets/helpers/constats.helper";



interface HelloProps {
    contentFn: (content: ActiveContent) => void;
}
const Hello = ({ contentFn }: HelloProps) => {


    return (
        <Box sx={{ mt: 10 }}>
            <Typography variant="h6" sx={{ fontWeight: '100', fontStyle: 'italic' }}>Revenue Calculator for "*fans" Platforms</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', m: 1, textAlign: 'left' }}>How to use:</Typography>
            <List>
                {howto.map((item) => (

                    <ListItem key={item.id}>
                        <Typography><Box component='span' sx={{ fontWeight: 'bold', mr: 0.5 }}>{item.id}.</Box>{item.text}</Typography>
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" onClick={() => contentFn(ActiveContent.Calculator)}>{strings.helloBtn}</Button>
        </Box>
    )
};

export default Hello;