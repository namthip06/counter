const counter = document.querySelector('#counter')
const btnAll = document.querySelectorAll('.btn')

let count = 0

btnAll.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const style = e.currentTarget.classList

        if(style.contains('increase')) {
            count++
        } else if (style.contains('decrease')) {
            count--
        } else {
            count = 0
        }

        if (count > 0) {
            counter.style.color = 'green'
        }

        if (count < 0) {
            counter.style.color = 'red'
        }

        if (count === 0) {
            counter.style.color = 'black'
        }

        counter.textContent = count
    })
})