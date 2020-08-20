export const user = {
  username: () => {
    return window.sessionStorage.getItem('username')
  },
  setUsername: username => {
    window.sessionStorage.setItem('username', username)
  }
}