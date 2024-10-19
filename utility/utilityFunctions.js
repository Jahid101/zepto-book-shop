import { Constants } from "./constants";

export const changeThemeColor = (primary = '#04818c') => {
  document.documentElement.style.setProperty('--color-primary', primary);
};

export const getRandomLoadingMsgs = () => {
  const randomIndex = Math.floor(Math.random() * Constants.loadingMsgs.length);
  return Constants.loadingMsgs[randomIndex];
}
