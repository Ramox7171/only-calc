import { useState } from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import './App.css';
import Navigation from './components/Navigation';
import * as strings from './assets/helpers/text.strings.json';
import EarningCalculator from './components/EarningCalculator';
import { ActiveContent } from './assets/helpers/constats.helper';
import Hello from './components/Hello';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [activeContent, setActiveContent] = useState<ActiveContent>(ActiveContent.Hello);
  const [closeInfo, setCloseInfo] = useState<boolean>(false);

  const handleCloseInfo = () => {
    setCloseInfo(true);
  };


  const renderContent = () => {
    switch (activeContent) {
      case ActiveContent.Hello:
        return <Hello contentFn={setActiveContent} />
      case ActiveContent.About:
        return <About />;
      case ActiveContent.Calculator:
        return <EarningCalculator />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navigation contentFn={setActiveContent} />
      {!closeInfo ? (<Card sx={{ mt: 8 }}>
        <CardContent sx={{
          color: '#B70000', fontWeight: 'bold', bgcolor: '#FF9F9F',
        }}>
          <Box>
            <Typography sx={{ fontWeight: 'bold', textAlign: "center", m: 1 }}>
              {strings.noticeInfo}
            </Typography>
            <Typography sx={{ textAlign: 'left' }}>
              {strings.notice}
            </Typography>
            <Button variant='contained' sx={{ bgcolor: '#B70000', my: 1 }} onClick={handleCloseInfo}>{strings.closeInfoBtn}</Button>
          </Box>
        </CardContent>
      </Card>) : ''}


      <Box sx={{ mt: 4 }}>
        {renderContent()}
      </Box>
      <Footer />
    </>
  );
}

export default App;
