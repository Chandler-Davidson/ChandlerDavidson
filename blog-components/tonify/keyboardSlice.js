import Router from 'next/router';
import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {attack, release, startTransport, stopTransport, playRecording} from './tone';
import {Transport} from 'tone';

const initialState = {
  keysPressed: [],
  isRecording: false,
  recording: {notes: []},
  isSaved: false,
  isPlaying: false,
};

export const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    startNote: (state, action) => {
      const tone = action.payload;
      attack(tone);

      if (state.isRecording) {
        state.recording.notes.push({
          tone,
          attack: Transport.position,
        });
      }
    },

    endNote: (state, action) => {
      const tone = action.payload;
      release(tone);

      if (state.recording.notes.length === 0) return;

      const lastIndex = lastIndexOfFind(state.recording.notes, n => n.tone === tone);
      const lastNote = state.recording.notes[lastIndex];

      if (state.isRecording && lastNote && !lastNote.release) {
        state.recording.notes[lastIndex] = {
          ...lastNote,
          release: Transport.position,
        };
      }
    },

    toggleIsRecording: state => {
      state.isRecording = !state.isRecording;
      const {isRecording, isPlaying} = state;

      if (isPlaying) state.isPlaying = false;

      if (isRecording) {
        state.recording.notes = [];
        startTransport();
      } else {
        stopTransport();
      }
    },

    toggleIsPlaying: state => {
      state.isPlaying = !state.isPlaying;
      const {isPlaying, isRecording, recording} = state;

      if (isRecording) state.isRecording = false;

      if (isPlaying) {
        playRecording(recording.notes);
        Router.events.on('routeChangeComplete', () => {
          stopTransport();
        });
      } else {
        stopTransport();
      }
    },

    toggleIsSaved: (state, action) => {
      state.isSaved = !state.isSaved;
      state.recording.id = action.payload;
    },

    setRecording: (state, action) => {
      state.recording.notes = action.payload;
    },
  },
});

function lastIndexOfFind(arr, predicate) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const el = arr[i];

    if (predicate(el)) return i;
  }

  return -1;
}

export const {
  startNote,
  endNote,
  toggleIsRecording,
  toggleIsPlaying,
  toggleIsSaved,
  setRecording,
} = keyboardSlice.actions;

export const saveRecording = () => async (dispatch, getState) => {
  const {isSaved, recording} = getState().keyboard;

  if (isSaved) return;

  const response = await axios.post('/api/tonify', {
    notes: recording.notes,
  });

  const {id} = response.data;

  dispatch(toggleIsSaved(id));

  Router.push(`./tonify?songId=${id}`);
};

export const fetchRecording = songId => async dispatch => {
  const response = await axios.get(`/api/tonify/${songId}`);

  const recording = response.data;

  if (!recording) return;

  dispatch(setRecording(recording.notes));
  dispatch(toggleIsSaved(songId));
};

export const selectIsRecording = state => state.keyboard.isRecording;

export const selectIsPlaying = state => state.keyboard.isPlaying;

export const selectIsSaved = state => state.keyboard.isSaved;

export default keyboardSlice.reducer;
