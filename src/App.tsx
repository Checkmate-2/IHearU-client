import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Webcam from 'react-webcam';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsDialog from './Settings';
import { RootState } from './store';
import { getCounts, loadActions, loadModel, loadVideoFeed, logWords } from './util';
import CircularProgress from '@material-ui/core/CircularProgress';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import TypeWriter from 'react-typewriter';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffce42',
      main: '#ffbd00',
      dark: '#bd8c00',
      contrastText: '#fff',
    },
  },
});

function App() {
  const webcamRef: React.Ref<Webcam> = useRef(null);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const settings = useSelector((state: RootState) => state.settings)
  const sentence = useSelector((state: RootState) => state.sentence)

  const handleClickOpenSettings = () => {
    setSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setSettingsOpen(false);
  };

  useEffect(() => {
    const init = async () => {
      await loadActions()
      await loadModel();
      if (webcamRef.current?.video) await loadVideoFeed(webcamRef.current?.video)
      setLoading(false)
    }
    init()
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar className="appbar-toolbar">
          <div className="appbar-toolbar--title">
            <img src="/favicon.ico" alt="logo"></img>
            <Typography variant="h6">IHearU</Typography>
          </div>
          <IconButton edge="end" aria-label="settings" aria-haspopup="true" color="inherit" onClick={handleClickOpenSettings}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className="App-body">
        {(!loading && settings.showStats) && <div className="stats">
          {/* <div>Threshold: {settings.threshold}%</div> */}
          <div>
            {Object.keys(getCounts(sentence.predictions)).map(word =>
              <span key={word}>{word}: {getCounts(sentence.predictions)[word]} </span>)}
          </div>
        </div>}
        <Webcam
          ref={webcamRef}
          style={{
            display: loading ? "none" : "block"
          }}
        />
        <SettingsDialog open={settingsOpen} handleClose={handleCloseSettings} />
        {loading && <div className="loading-scrim">
          <img src="/logo192.png" alt="IHearU Logo" className="App-logo"></img>
          <h3>Loading detection models</h3>
          <CircularProgress /></div>
        }
        {!loading && <div className="word-container">
          <div className="typewriter-container">
            <TypeWriter typing={1}>{sentence.words.join(" ")}</TypeWriter>
            <IconButton edge="end" aria-label="settings" aria-haspopup="true" color="primary" onClick={logWords} disabled={sentence.words.length === 0}>
              <RecordVoiceOverIcon />
            </IconButton>
          </div>

          <div className="word-log">
            {sentence.log.map((sentence, i) =>
              <p key={`${sentence}-${i}`}>{sentence.join(" ")} </p>
            )}
          </div>
        </div>}
      </div>
    </ThemeProvider>
  );
}

export default App;
