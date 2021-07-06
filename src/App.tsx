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
import { CircularProgress } from '@material-ui/core';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

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
    <div className="App">
      <AppBar position="static">
        <Toolbar className="appbar-toolbar">
          <Typography variant="h6" className="appbar-toolbar--title">
            IHearU
          </Typography>
          <IconButton edge="end" aria-label="settings" aria-haspopup="true" color="inherit" onClick={handleClickOpenSettings}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
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
        <h3>Loading detection models</h3>
        <CircularProgress /></div>
      }
      <h3>
        {sentence.words.map((c, i) =>
          <span key={`${c}-${i}`}>{c} </span>
        )}
        <IconButton edge="end" aria-label="settings" aria-haspopup="true" color="primary" onClick={logWords} disabled={sentence.words.length === 0}>
          <RecordVoiceOverIcon />
        </IconButton>
      </h3>

      <h3>
        {sentence.log.map((words, i) =>
          <p key={`${words}-${i}`}>{words.join(" ")} </p>
        )}
      </h3>
    </div>
  );
}

export default App;
