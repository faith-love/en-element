import { makeInstaller } from "@en-element/utils"

import components from "./components"
import "@en-element/theme/index.css"
const installer = makeInstaller(components)
export default installer