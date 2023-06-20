/**
 * 导入request文件
 */

import PRequest from "./request"
import { BASE_URL, TIME_OUT } from "./config"

const P1 = new PRequest({
   baseURL: BASE_URL,
   timeout: TIME_OUT
})

export default P1