import { Constants } from "./constants";

export const getRandomLoadingMsgs = () => {
  const randomIndex = Math.floor(Math.random() * Constants.loadingMsgs.length);
  return Constants.loadingMsgs[randomIndex];
}
