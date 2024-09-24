// utils/shouldHideHeaderFooter.js

export const shouldHideHeaderFooter = (pathname) => {
  return pathname === '' || pathname ==='' || pathname === '/signup/employer' ;
};
