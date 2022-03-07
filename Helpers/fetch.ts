import * as RNFS from "react-native-fs";

const path = RNFS.DocumentDirectoryPath + "/activities.json";

const loadFromFile = (location: string) => {
  JSON.stringify(location);
  return;
};

const loadLocalActivityList = () => {
  if (!RNFS.exists(path)) RNFS.writeFile(path, "");
  
  RNFS.readFile(path).
    then((file) => {
        return JSON.parse(file);
    });
};


export { loadFromFile, loadLocalActivityList };

// const fetch = ("url to image").then((resp) => {
//     return resp.blob();
//   })
