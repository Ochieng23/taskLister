//-----grab elements to manipulate--

let inputVal = document.querySelector('.input')
let addTask = document.querySelector('#btn')
let taskArea = document.querySelector('.taskwrit')
let buttons = document.querySelector('#btns')
let form = document.querySelector('#myForm')
let appendTask= document.querySelector('.tasks')
let prompt = document.querySelector('.prompt')
let button = document.querySelector('#btn')
const handleForm =(event)=>{event.preventDefault()}


addTask.addEventListener('click',(e)=>{
    e.preventDefault() 
    // ----create a list------
    let todList = document.createElement('li')
    let newTask = document.createElement('textarea')
    newTask.type = 'text'
    newTask.readOnly = true;
    let toDo =document.getElementById('input').value
    newTask.innerText = toDo
    newTask.style.border ='2px solid black'
    newTask.style.padding= '5px'
    newTask.style.borderRadius = '5px'
    newTask.style.width= '200px'
    todList.appendChild(newTask)
    appendTask.appendChild(todList)
    //-----remove list style------
    todList.style.listStyle ='none'

    //----create buttons------
    let edit = document.createElement('button')
    let text = document.createTextNode('EDIT')
    edit.style.margin='10px'
    edit.appendChild(text)
    let kuDiliti = document.createElement('button')
    let text2 = document.createTextNode('DELETE')
    kuDiliti.style.margin= '10px'
    kuDiliti.appendChild(text2)
    todList.appendChild(edit)
    todList.appendChild(kuDiliti)
    // -------the edit button----

    edit.addEventListener('click', (e)=>{
        console.log('editing')

        if (edit.innerText.toLowerCase()== 'edit'){ 
            newTask.readOnly =false;
            edit.focus()
            edit.innerText = 'save'
            newTask.contentEditable = true;
            newTask.style.backgroundColor = 'peru'
        } else {
            newTask.setAttribute('readonly', 'readonly')
            edit.innerText = 'edit'
        }
        
    //-----the delete button-----------
    })
    kuDiliti.addEventListener('click',(e)=> {
     console.log('remove')
    e.target.parentNode.remove()
    })

    //console.log('clicked')
})

