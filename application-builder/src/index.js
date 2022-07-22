import packageJson from "../package.json";

import { initApplication } from "../../application-source";

initApplication(packageJson.homepage, packageJson.version);
