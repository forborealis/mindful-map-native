// redux/reducers/moodReducer.js
const initialState = {
  mood: null,
  activities: {
    activities: [],
    social: [],
    health: [],
    sleepQuality: '',
  },
  loading: false,
  error: null,
  savedLogs: []
};

export default function moodReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_MOOD':
      return { ...state, mood: action.payload };
      
    case 'TOGGLE_ACTIVITY':
      const { category, activity } = action.payload;
      return {
        ...state,
        activities: {
          ...state.activities,
          [category]: state.activities[category].includes(activity)
            ? state.activities[category].filter((item) => item !== activity)
            : [...state.activities[category], activity],
        },
      };
      
    case 'SAVE_MOODLOG_REQUEST':
      return { ...state, loading: true, error: null };
      
    case 'SAVE_MOODLOG_SUCCESS':
      return { 
        ...initialState,
        loading: false,
        savedLogs: [...state.savedLogs, action.payload]
      };
      
    case 'SAVE_MOODLOG_FAILURE':
      return { 
        ...state, 
        loading: false, 
        error: action.payload 
      };
      
    default:
      return state;
  }
}