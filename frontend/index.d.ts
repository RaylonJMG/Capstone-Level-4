//Typescript declaration file
//Declaration files inform TypeScript of data types that were not defined in the source code
// Filename must end with `.d.ts`
//Inform TS that jpg files and other asset extensions can be imported

//add asset extensions here:
declare module "*.jpg";
declare module "*.png";
declare module "*.mp4";
declare module "*.jpeg";

//add functions and obj from external scripts here
declare const bootstrap: any; //assert as a type of object instead of any, once more advanced
declare const imageMapResize: any;
//should be asserted as a function instead of any, once more advanced
