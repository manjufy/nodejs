export default function userService() {
  function getUser() {
      return {
          name: "Manjunath",
          team: "Red Bull"
      }
  }

  return {
    getUser
  }
}
