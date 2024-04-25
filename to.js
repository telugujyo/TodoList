const add = document.getElementById('addbutton')
const output = document.getElementById('output')
const clear = document.getElementById('clear')

let count = 0;
//adding task
add.addEventListener("click", () => {
    addTask()
})


let addTask = () => {
    let task = document.getElementById('inputbox')
    let div = document.createElement('div')
    div.id = `t${count}`;
    text = task.value;


    if (inputbox.value == "") {
        notification("Enter any task to add")
    } else {
        div.innerHTML = `<li>
    <span> <p>     <input class="largerCheckbox" type="checkbox" onclick="strike('s${count}')"</p>&nbsp;
    <p id="s${count}">
    <span>${task.value}</span>
    </p></span>
    <span> <p>
    <button class="edit" id="save${count}" onclick="save('s${count}','save${count}')"><img src="images/edit.png" alt="" width="25px"></button>

    <button id="delete" onclick = "del('t${count}')"><img src="images/delete.png" alt="" width="25px"></button>
    </p></span>
         </li>`

        task.value = ""
        output.appendChild(div)
        count++;
        notification(`${text}  added sucssessfully`)
    }
};
//adding task via enter key
add.addEventListener("click", () => {
    addTask();
});
document.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        addTask();
    }
})
//adding task complete

function save(task, btn) {
    const span = document.getElementById(`${task}`);
    const button = document.getElementById(`${btn}`);
    
    const editImageSrc = 'images/edit.png';
    const checkImageSrc = 'images/check.png';

    const image = button.querySelector('img');
    if (image && image.getAttribute('src') === editImageSrc) {
        button.innerHTML = `<img src="${checkImageSrc}" alt="" width="25px">`;
        button.style.border = "0";
        button.style.backgroundColor = "transparent";
        button.setAttribute('class', 'save');
        span.setAttribute('contenteditable', 'true');
    } else {
        notification(`${text} saved successfully`);
        button.innerHTML = `<img src="${editImageSrc}" alt="" width="25px">`;
        button.setAttribute('class', "edit");
        span.setAttribute('contenteditable', 'false');
    }
}


function strike(task) {
    const p = document.querySelector(`#${task}`);
    if (p.toggleAttribute('class')) {
        p.classList.add('strike');
    } else {
        p.classList.remove('strike');
    }
}

clear.addEventListener("click", () => {
    if ((output.children).length) {
        console.log('children present')
        output.innerHTML = "";
        count = 0;
    } else {
        console.log("not present")
        //notification code
        notification("no tasks are present to delte")
    }
})

//deleting task
function del(index) {
    const div = document.querySelector(`#${index}`)
    div.remove()
    notification(` task deleted`)
}
function dell() {
    div.remove();

}
function notification(msg) {
    let div = document.createElement('div')
    // console.log("clicked")
    div.setAttribute('id', "div")
    div.style.textAlign = "center";
    div.style.right = "0"
    div.style.left = "0"
    div.style.top = "0"
    div.style.position = "absolute"
    div.style.margin = "auto";
    //  div.style.padding=" 0 20%"
    div.style.width = "500px"
    let div1 = document.createElement('div')
    div1.setAttribute('class', 'rotate')
    div.appendChild(div1)
    div.innerHTML = `<span><p>${msg}</p> <button id="ok" onclick="del()">X</button></span>`
    let load = document.createElement('div');

    load.setAttribute('id', 'load')
    load.style.backgroundColor = "white"

    div.appendChild(load)
    document.body.appendChild(div)

    setTimeout(() => {
        div.remove();
    }, 5000)
}
function del() {
    div.remove();
}

