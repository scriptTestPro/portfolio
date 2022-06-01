const form = document.querySelector('.contact-form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const phone = document.getElementById('phone').value
  const msg = document.getElementById('msg').value

  let missed = []

  if (!name || !email || !msg) {
    !name ? missed.push('name') : false
    !email ? missed.push('email') : false
    !msg ? missed.push('message') : false
    let alert = ''
    missed.forEach((el, i) => {
      if (i === 0) {
        alert += el
      } else {
        alert += `, ${el}`
      }
    })
    return window.alert(`Fill in ${alert}`)
  }

  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (!email.match(validRegex)) {
    return alert('Invalid email address!')
  }

  const message = `<b>Новое сообщение:</b>%0A - <b>Name:</b> ${name} %0A - <b>Email:</b> ${email} %0A - <b>Phone:</b> ${phone} %0A - <b>Message:</b> ${msg}`

  const API_TOKEN = '5596819873:AAHt93KuK6-yOEN2v2-nAam1YAacgNaWnT4'
  const chat_id = '368409120'

  const url = `https://api.telegram.org/bot${API_TOKEN}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=html`

  const oReq = new XMLHttpRequest()
  oReq.open('GET', url, true)
  oReq.send()

  const clear = ['name', 'email', 'phone', 'msg']
  clear.forEach((el) => {
    document.getElementById(el).value = ''
  })

  window.alert('Message sent!')
})

/***********************************************************************/
const links = document.querySelectorAll('.link')
const sections = document.querySelectorAll('section')
const skills = document.getElementById('skill-section')
const timeline = document.getElementById('timeline')

let activeLink = 0
links.forEach((link, i) => {
  link.addEventListener('click', (el) => {
    if (activeLink != i) {
      if (el.path[1].innerText === 'Home') {
        skills.style.display === 'none'
          ? (skills.style.display = 'block')
          : false
        timeline.style.display === 'none'
          ? (timeline.style.display = 'block')
          : false
      } else {
        skills.style.display = 'none'
        timeline.style.display = 'none'
      }
      links[activeLink].classList.remove('active')
      link.classList.add('active')
      sections[activeLink].classList.remove('active')
      setTimeout(() => {
        activeLink = i
        sections[i].classList.add('active')
      }, 1000)
    }
  })
})
