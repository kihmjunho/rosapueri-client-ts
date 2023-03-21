export const setTokenToCookie = (value: string) => {
  document.cookie = `ls_token=${value}`;
};

export const setUserIdToCookie = (value: string) => {
  document.cookie = `ls_userId=${value}`;
};

export const getTokenFromCookie = () => {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)ls_token\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
};

export const getUserIdFromCookie = () => {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)ls_userId\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
};

export const deleteCookie = (value: string) => {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};
