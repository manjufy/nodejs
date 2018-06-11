export default function userService() {
  function getUser() {
      return {
          name: "Manjunath",
          team: "Redbull"
      }
  }

  return {
    getUser
  }
}
