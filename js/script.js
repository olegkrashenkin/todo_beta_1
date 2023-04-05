'use strict'

const menuBtn = document.querySelector('#menu-btn')
const toggleMenu = () => {
    menuBtn.dispatchEvent(new Event("click"))
}

const listeners = {
    menuBtn: function () {
        menuBtn.addEventListener('click', e => {
            menuBtn.classList.toggle('active')
        })
    },

    subMenuBtns: function () {
        const btnGroup = document.querySelector('.btn-group')
        const btnActive = btnGroup.querySelector('#btn-active')
        const btnAll = btnGroup.querySelector('#btn-all')
        const btnDone = btnGroup.querySelector('#btn-done')

        btnGroup.addEventListener('click', e => {
            e.preventDefault()

            if (e.target.id === 'btn-active') {
                btnActive.classList.add('active')
                btnAll.classList.remove('active')
                btnDone.classList.remove('active')

                //переписать основной блок сайта информацией из бд или сторейджа
            } else if (e.target.id === 'btn-all') {
                btnActive.classList.remove('active')
                btnAll.classList.add('active')
                btnDone.classList.remove('active')

                //переписать основной блок сайта информацией из бд или сторейджа
            } else {
                btnActive.classList.remove('active')
                btnAll.classList.remove('active')
                btnDone.classList.add('active')

                //переписать основной блок сайта информацией из бд или сторейджа
            }
        })
    },

    addTaskForm: function () {
        const addTaskForm = document.querySelector('#form-make-task')
        const addTaskFormInput = addTaskForm.querySelector('input')
        const addTaskFormBtn = addTaskForm.querySelector('button')

        addTaskFormBtn.addEventListener('click', e => {
            e.preventDefault()

            if (addTaskFormInput.value) {
                toggleMenu()
                //отправить данные в бд
                addTaskForm.querySelector('input').value = ''
                //обновить блок с заданиями
            }
        })
    },

    chooseToDoListForm: function () {
        const chooseToDoListForm = document.querySelector('#form-choose-todo-list')
        const chooseToDoListFormInput = chooseToDoListForm.querySelector('select')
        const chooseToDoListFormBtn = chooseToDoListForm.querySelector('button')

        chooseToDoListFormBtn.addEventListener('click', e => {
            e.preventDefault()

            if (chooseToDoListFormInput.value) {
                toggleMenu()
                //отправить данные в бд

                //открыть новый список заданий
            }
        })
    },

    makeToDoListForm: function () {
        const addToDoListForm = document.querySelector('#form-make-todo-list')
        const addToDoListFormInput = addToDoListForm.querySelector('input')
        const addToDoListFormBtn = addToDoListForm.querySelector('button')

        addToDoListFormBtn.addEventListener('click', e => {
            e.preventDefault()

            if (addToDoListFormInput.value) {
                toggleMenu()
                //отправить данные в бд
                addToDoListForm.querySelector('input').value = ''
                //открыть новый список заданий
            }
        })
    },

    newTask: {
        tasks: {},

        foo: function (e) {
            if (e.target.closest('.edit-btn')) {
                console.log('edit')
            } else if (e.target.closest('.done-btn')) {
                console.log('done')
            } else if (e.target.closest('.delete-btn')) {
                console.log('del')
                // listener.newTask.stop()
            }
        },

        start: function () {
            this.tasks = document.querySelectorAll('.new-task')

            this.tasks.forEach(task => {
                task.addEventListener('click', this.foo)
            })
        },

        stop: function () {
            this.tasks.forEach(task => {
                task.removeEventListener('click', this.foo)
            })
        },
    },

    editTask: {
        task: {},

        foo: function (e) {
            if (e.target.closest('.accept-btn')) {
                console.log('accept')
            } else if (e.target.closest('.cancel-btn')) {
                console.log('cancel')
            }
        },

        start: function () {
            this.task = document.querySelector('.edit-task')

            this.task.addEventListener('click', this.foo)
        },

        stop: function () {
            this.task.removeEventListener('click', this.foo)
        },
    },

    doneTask: {
        tasks: {},

        foo: function (e) {
            if (e.target.closest('.return-btn')) {
                console.log('return')
            } else if (e.target.closest('.delete-btn')) {
                console.log('delete')
            }
        },

        start: function () {
            this.tasks = document.querySelectorAll('.done-task')

            this.tasks.forEach(task => {
                task.addEventListener('click', this.foo)
            })
        },

        stop: function () {
            this.tasks.forEach(task => {
                task.removeEventListener('click', this.foo)
            })
        },
    },


}


listeners.menuBtn()
listeners.subMenuBtns()
listeners.addTaskForm()
listeners.makeToDoListForm()
listeners.chooseToDoListForm()
listeners.newTask.start()
listeners.editTask.start()
listeners.doneTask.start()