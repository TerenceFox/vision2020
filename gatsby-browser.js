const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => addScript("https://cdn.curator.io/published/e6899abb-8c34-4a06-839f-54c030058e17.js")
}
