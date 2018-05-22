const initialState = {
  player: {
    time: '00:00',
    isActive: false,
  },
  track: {
    name: '',
    description: '',
    urlCover: '',
  },
};

export default function trackState(state = initialState) {
  return state;
};
