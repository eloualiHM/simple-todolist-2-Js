let btnPlus = document.querySelector(".btn-list");
let input = document.querySelector(".input-list");
let ul = document.querySelector(".container ul");
btnPlus.addEventListener("click", (e) => {
    e.preventDefault();
    let li = document.createElement("li");
    let inpLi = document.createElement("input");
    let check = document.createElement("button");
    let delet = document.createElement("button");
    if (input.value.length !== 0) {
        check.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        delet.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        inpLi.className = "todo-list";
        check.className = "check-list";
        delet.className = "delete-list";

        li.append(inpLi);
        li.append(check);
        li.append(delet);
        ul.append(li);

        inpLi.value = input.value;
        li.addEventListener("click", (e) => {
            e.target.className === "check-list" ? e.target.parentElement.classList.add("checked")
                : e.target.parentElement.classList.add("deleted");
        });
    }
});

