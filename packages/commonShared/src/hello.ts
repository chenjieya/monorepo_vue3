export const hello = (to: string = 'Monorepo') => {
  const txt = `Hello ${to}!`
  alert(txt)
  return txt
}
