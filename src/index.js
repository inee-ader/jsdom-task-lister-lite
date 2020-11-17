document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (e) => {
      e.preventDefault()
      const input = document.querySelector("#new-task-description")
      const ul = document.querySelector("#tasks")
      const li = document.createElement("li")
      li.innerText = input.value
      ul.appendChild(li)
      input.value = ""
      const btn = document.createElement("button")
      btn.innerText = "Delete Task"
      li.appendChild(btn)
      btn.addEventListener("click", (e) => {
        // btn.parentNode.remove()
        li.remove()
      })
    })
});


