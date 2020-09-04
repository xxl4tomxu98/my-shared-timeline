document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("http://localhost:8080/tasks");
  const { tasks } = await res.json();
  const tasksContainer = document.querySelector(".tasks-container");
  const tasksHtml = tasks.map(
    ({ name }) => `
      <div class="card">
        <div class="card-body">
          <p class="card-text">${name}</p>
        </div>
      </div>
    `
  );
  tasksContainer.innerHTML = tasksHtml.join("");

});
