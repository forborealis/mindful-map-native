// redux/actions/moodActions.js
export const selectMood = (mood) => ({
  type: 'SELECT_MOOD',
  payload: mood,
});

export const toggleActivity = (category, activity) => ({
  type: 'TOGGLE_ACTIVITY',
  payload: { category, activity },
});

export const saveMoodLog = (moodLog) => async (dispatch) => {
  try {
    console.log("Sending mood log data:", moodLog);
    const response = await fetch('http://192.168.100.115:3000/moodlogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(moodLog),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to save mood log');
    }
    
    const data = await response.json();
    dispatch({ type: 'SAVE_MOODLOG_SUCCESS', payload: data });
    return data;
  } catch (error) {
    console.error("Error saving mood log:", error);
    dispatch({ type: 'SAVE_MOODLOG_FAILURE', payload: error.message });
    throw error;
  }
};