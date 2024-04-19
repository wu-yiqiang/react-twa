export const changeTheme = (theme) => {
  const app = document.querySelector('#app')
  app.dataset.theme = theme
  app.className = theme
}