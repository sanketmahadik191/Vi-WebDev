// utils/shouldHideHeaderFooter.js

export const shouldHideHeaderFooter = (pathname) => {
  return pathname === '/login' || pathname ==='/signup/intern' || pathname === '/signup/employer' ;
};
