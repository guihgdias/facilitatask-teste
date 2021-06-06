var idDeleteTask = document.getElementById('deleteTaskModal').querySelector('.idTask')

function openCloseDeleteModal() {
    let deleteTaskModal = document.getElementById('deleteTaskModal')
    if(deleteTaskModal.classList.contains('-hidden') == true) {
        deleteTaskModal.classList.remove('-hidden')
        let BodyHTML = document.querySelector('body').style = 'overflow: hidden'
    } else {
        deleteTaskModal.classList.add('-hidden')
        BodyHTML = document.querySelector('body').style = 'overflow: auto'
    }
}

function deleteTask(idTask) {
    openCloseDeleteModal()
    idDeleteTask.value = idTask
}

let cancelDelete = document.getElementById('deleteTaskModal').querySelector('.cancelDeleteTask')
let confirmDelete = document.getElementById('deleteTaskModal').querySelector('.confirmDeleteTask')

cancelDelete.addEventListener('click', () => {
    openCloseDeleteModal() 
})

confirmDelete.addEventListener('click', () => {
    let taskDeleted = idDeleteTask.value
    
    let thisTaskDeleted = document.getElementById(''+taskDeleted+'')
    if(thisTaskDeleted) {
        taskListArea.removeChild(thisTaskDeleted);
        openCloseDeleteModal()
    }
})