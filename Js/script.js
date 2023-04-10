const inputElement = document.querySelector(".new_task");
const addTask = document.querySelector(".new_task_button");

const validateInput = () => inputElement.value.trim().length > 0;
const handleAddTask = () => {
    const inputValid = validateInput();

    if (!inputValid) {
        inputElement.classList.add("error");
    }
}
addTask.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange());
