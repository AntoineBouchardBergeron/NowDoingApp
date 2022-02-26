import * as RNFS from "react-native-fs";
import { Activities } from "../Types/ActivityList";

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

const saveLocalActivityList = (activities: Activities) => {
  return RNFS.writeFile(path, JSON.stringify(activities));
};

export { loadFromFile, loadLocalActivityList, saveLocalActivityList };

// const fetch = ("url to image").then((resp) => {
//     return resp.blob();
//   })
