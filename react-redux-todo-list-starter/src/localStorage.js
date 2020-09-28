const STATE_KEY = 'tasks';

export const loadState = () => {
  const tasks = localStorage.getItem(STATE_KEY);
  if(!tasks) return undefined;
  else {
    try{
      const parsedState = JSON.parse(tasks);
      return parsedState;
    } catch (err) {
      console.warn(err);
      return undefined;
    }

  }
};

export const saveState = (state) => {
  try{
    const jsonState = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, jsonState);
  } catch (err) {
    console.warn(err);

  }
};
