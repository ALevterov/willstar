$(document).ready(function () {
  const casesCarousel = $('.cases-carousel')
  casesCarousel.owlCarousel({
    items: 1,
    pagination: false,
    dots: false,
    loop: true,
  })

  const casesProgressBar = document.querySelector('.cases__progress_bar')

  const countOfCasesCarouselItems = +casesCarousel[0].dataset.countItems

  const casesProgessBarItemWidth = 100 / countOfCasesCarouselItems + '%'

  let progressItems = ''

  for (let i = 0; i < countOfCasesCarouselItems; i++) {
    progressItems += `<div class="progress_bar_item cases__progress_bar_item cases__progress_bar_item${
      i + 1
    } ${
      i === 0 ? 'active' : ''
    }" style="width: ${casesProgessBarItemWidth}"></div>`
  }

  casesProgressBar.insertAdjacentHTML('afterbegin', progressItems)

  const nextBtn = $('.cases__carousel_btn_next')
  const prevBtn = $('.cases__carousel_btn_prev')

  let action

  nextBtn.click(function () {
    action = 'next'
    casesCarousel.trigger('next.owl.carousel', [600])
  })

  prevBtn.click(function () {
    action = 'prev'
    casesCarousel.trigger('prev.owl.carousel', [600])
  })

  let prevIndex = 1

  casesCarousel.on('changed.owl.carousel', function (event) {
    console.log(event)
    const sliderImageContainer = document.querySelector(
      '.slider_description_logo.cases'
    )

    const prevObj = {
      1: 3,
      3: 2,
      2: 1,
    }
    const nextObj = {
      3: 2,
      4: 3,
      2: 1,
    }
    if (action === 'next') {
      nextIndex = nextObj[event.item.index]
    }
    if (action === 'prev') {
      nextIndex = prevObj[event.item.index]
    }

    const prevProgressItem = document.querySelector(
      `.cases__progress_bar_item${prevIndex}`
    )
    const nextProgressItem = document.querySelector(
      `.cases__progress_bar_item${nextIndex}`
    )
    const prevDescriptionImage = document.querySelector(
      `.slider_cases_description_image${prevIndex}`
    )
    const nextDescriptionImage = document.querySelector(
      `.slider_cases_description_image${nextIndex}`
    )

    prevProgressItem.classList.remove('active')
    nextProgressItem.classList.add('active')

    prevDescriptionImage.classList.add('hidden')
    nextDescriptionImage.classList.remove('hidden')

    let { name, text } = nextDescriptionImage.dataset

    const casesNameElem = document.querySelector(
      '.slider_description_name.cases'
    )
    let fullName = name.split(' ')[0] + '<br />' + name.split(' ')[1]
    casesNameElem.innerHTML = fullName

    const casesIndexElem = document
      .querySelector('.slider_description_number.cases')
      .querySelector('.bordered')
    casesIndexElem.innerHTML = '#' + nextIndex

    const casesTextElem = document.querySelector('.slider__bottom_text.cases')
    casesTextElem.innerHTML = text

    prevIndex = nextIndex
  })
})
