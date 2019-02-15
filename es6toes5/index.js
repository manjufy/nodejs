import userService from './user'
import defaultEx from './default-example'
const user = userService()
console.log('User',  user.getUser())

console.log(defaultEx.getCookies());
console.log(defaultEx.getMePizza());