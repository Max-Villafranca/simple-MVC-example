class model {
    #colorsHistory = {
        red: 0,
        green: 0,
        blue: 0
    }
    constructor(controller) {
        this.controller = controller
    }
    get colorsHistory() {
        return this.#colorsHistory
    }
    addColorToHistory(color) {
        this.#colorsHistory[color]++
    }
}

class view {
    constructor(controller) {
        this.controller = controller
        this.button = document.querySelector('button')
        this.box = document.querySelector('.box')
        this.red = document.querySelector('.red')
        this.green = document.querySelector('.green')
        this.blue = document.querySelector('.blue')
        this.colorsHistory = this.controller.colorsHistory

        this.button.addEventListener('click', () => {
            const color = this.randomColor()
            this.controller.addColorToHistory(color)
            this.box.className = 'box'
            this.box.classList.add(`${color}BG`)
            this[color].textContent = this.colorsHistory[color]
        })
    }
    randomColor() {
        const colors = Object.keys(this.colorsHistory)
        return colors[Math.floor(Math.random() * 3)]
    }
}

class controller {
    constructor() {
        this.model = new model(this)
        this.view = new view(this)
    }
    get colorsHistory() {
        return this.model.colorsHistory
    }
    addColorToHistory(color) {
        this.model.addColorToHistory(color)
    }
}

const main = new controller()