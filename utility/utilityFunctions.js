export const changeThemeColor = (primary = '#04818c') => {
  document.documentElement.style.setProperty('--color-primary', primary);
};
