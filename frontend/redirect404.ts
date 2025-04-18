/**************************************************************
 * @summary Redirects the SPA to the root path
 * @param rootPath Set this to the correct root path
 * @description
 * Useful when an SPA page is refreshed.
 * Load this module through 404.html to redirect on 404 errors.
 * By redirecting to the root path, 404 errors are removed.
 * Use Redirect.js to redirect to the path where the 404 occured.
 **************************************************************/

const rootPath = "/Capstone-Level-4/";
const path = window.location.pathname; //path of URL
window.localStorage.setItem("redirect", path); //setItem stores a key/value pair of the URL into the browser
window.location.replace(rootPath); //method that replaces/redirects to the URL for the homepage
