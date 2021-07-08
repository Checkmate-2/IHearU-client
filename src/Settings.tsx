import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slider from '@material-ui/core/Slider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch, settingsSlice } from './store';
import FormGroup from '@material-ui/core/FormGroup';

function valuetext(value: number) {
    return `${value}%`;
}

export default function SettingsDialog(props: { open: boolean, handleClose: () => void }) {
    const { open, handleClose } = props;
    const settings = useSelector((state: RootState) => state.settings)
    const dispatch: AppDispatch = useDispatch()

    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth="sm"
                open={open}
                onClose={handleClose}
                aria-labelledby="settings-dialog-title"
            >
                <DialogTitle id="settings-dialog-title">
                    Settings
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <FormGroup>
                            <FormControlLabel 
                                control={
                                    <Slider
                                        value={settings.threshold}
                                        getAriaValueText={valuetext}
                                        aria-labelledby="threshold-slider"
                                        valueLabelDisplay="auto"
                                        step={5}
                                        marks
                                        min={50}
                                        max={99}
                                        onChange={(event, value) => dispatch(settingsSlice.actions.setThreshold(value as number))}
                                    />
                                }
                                label="Accuracy threshold"
                                labelPlacement="top"
                            />

                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={settings.showStats}
                                        onChange={event => dispatch(settingsSlice.actions.setShowStats(event.target.checked))}
                                        name="showStats"
                                        color="primary"
                                    />
                                }
                                label="Show Stats"
                            />

                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={settings.speakAlong}
                                        onChange={event => dispatch(settingsSlice.actions.setSpeakAlong(event.target.checked))}
                                        name="showStats"
                                        color="primary"
                                    />
                                }
                                label="Speak along signing"
                            />
                        </FormGroup>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}