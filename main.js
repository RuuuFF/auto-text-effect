const Messages = [
  'We Love Programming!',
  'Every moment is a fresh beginning.',
  'Don’t tell people your plans. Show them your results.',
  'Try Again. Fail again. Fail better.'
]

const AutoText = {
  textEl: document.getElementById('auto-text'),
  speedEl: document.getElementById('speed'),
  loopEl: document.getElementById('loop'),
  playEl: document.getElementById('play-auto-text'),

  text: Messages[0],
  index: 0,
  speed: 300, // On lvl 1
  loop: true,
  running: true,

  changeText() {
    return Messages[Math.floor(Math.random() * Messages.length)]
  },

  changeSpeed(event) {
    AutoText.speed = 300 / event.target.value
  },

  toggleLoop() {
    if (AutoText.loop === true) {
      AutoText.loop = false
      AutoText.loopEl.value = "OFF"
      AutoText.playEl.disabled = false
    } else {
      AutoText.loop = true
      AutoText.loopEl.value = "ON"
      AutoText.playEl.disabled = true
      AutoText.writeText()
    }
  },

  playAutoText() {
    if (AutoText.running === false) {
      AutoText.index = 0
      AutoText.text = AutoText.changeText()
      AutoText.writeText()
    }
  },

  writeText() {
    AutoText.running = true

    AutoText.textEl.innerText = AutoText.text.slice(0, AutoText.index)

    AutoText.index++

    if (AutoText.index > AutoText.text.length && AutoText.loop === true) {
      AutoText.index = 0
      AutoText.text = AutoText.changeText()
    }

    if (AutoText.index <= AutoText.text.length) {
      setTimeout(AutoText.writeText, AutoText.speed)
    } else {
      AutoText.running = false
    }
  },

  startAutoText() {
    AutoText.loopEl.addEventListener('click', AutoText.toggleLoop)
    AutoText.playEl.addEventListener('click', AutoText.playAutoText)
    
    AutoText.speed = AutoText.speed / AutoText.speedEl.value
    AutoText.loop = AutoText.loopEl.value === "ON" ? true : false

    AutoText.writeText()
  }
}

AutoText.speedEl.addEventListener('input', event => AutoText.changeSpeed(event))

AutoText.startAutoText()
