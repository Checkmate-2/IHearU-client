import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import { Typography, Slider } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch, settingsSlice } from './store';

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
                        <Typography id="treshold-slider" gutterBottom>
                            Accuracy treshold
                        </Typography>
                        <Slider
                            value={settings.treshold}
                            getAriaValueText={valuetext}
                            aria-labelledby="treshold-slider"
                            valueLabelDisplay="auto"
                            step={5}
                            marks
                            min={50}
                            max={99}
                            onChange={(event, value) => dispatch(settingsSlice.actions.update(value as number))}
                        />
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