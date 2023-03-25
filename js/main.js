$(document).ready(function () {
  // cases carousel ===========
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
    // console.log(event)
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

  // influence carousel ===========

  const influenceCarousel = $('.influence-carousel')
  influenceCarousel.owlCarousel({
    items: 1,
    pagination: false,
    dots: false,
    loop: true,
  })

  const influenceProgressBar = document.querySelector(
    '.influence__progress_bar'
  )

  const countOfInfluenceCarouselItems = +influenceCarousel[0].dataset.countItems

  const influenceProgessBarItemWidth = 100 / countOfInfluenceCarouselItems + '%'

  let influenceProgressItems = ''

  for (let i = 0; i < countOfInfluenceCarouselItems; i++) {
    influenceProgressItems += `<div class="progress_bar_item influence__progress_bar_item influence__progress_bar_item${
      i + 1
    } ${
      i === 0 ? 'active' : ''
    }" style="width: ${influenceProgessBarItemWidth}"></div>`
  }

  influenceProgressBar.insertAdjacentHTML('afterbegin', influenceProgressItems)

  const nextBtnInfluence = $('.influence__carousel_btn_next')
  const prevBtnInfluence = $('.influence__carousel_btn_prev')

  let actionInfluence

  nextBtnInfluence.click(function () {
    actionInfluence = 'next'
    influenceCarousel.trigger('next.owl.carousel', [600])
  })

  prevBtnInfluence.click(function () {
    actionInfluence = 'prev'
    influenceCarousel.trigger('prev.owl.carousel', [600])
  })

  let prevIndexInfluence = 1

  influenceCarousel.trigger('refresh.owl.carousel')

  influenceCarousel.on('changed.owl.carousel', function (event) {
    let nextIndexInfluence = 1
    // console.log(event)

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
    if (actionInfluence === 'next') {
      nextIndexInfluence = nextObj[event.item.index]
    }
    if (actionInfluence === 'prev') {
      nextIndexInfluence = prevObj[event.item.index]
    }
    const prevInfluenceProgressItem = document.querySelector(
      `.influence__progress_bar_item${prevIndexInfluence}`
    )
    const nextInfluenceProgressItem = document.querySelector(
      `.influence__progress_bar_item${nextIndexInfluence}`
    )

    prevInfluenceProgressItem.classList.remove('active')
    nextInfluenceProgressItem.classList.add('active')

    const influenceIndexElem = document
      .querySelector('.slider_description_number.influence')
      .querySelector('.bordered')

    influenceIndexElem.innerHTML = '#' + nextIndexInfluence

    const influenceSliderData = document.querySelector(
      `.influence-slider-data${nextIndexInfluence}`
    ).dataset
    const { text } = influenceSliderData
    const influenceDescriptionalText = document.querySelector(
      '.slider_description_name.influence'
    )
    influenceDescriptionalText.innerHTML = text
    prevIndexInfluence = nextIndexInfluence
  })
})

const residentsBtn = document.querySelector('.residents_btn')
const residentsCardsContainer = document.querySelector(
  '.residents__cards_container'
)

residentsBtn.addEventListener('click', () => {
  residentsCardsContainer.classList.toggle('opened')
})

let header = `<header class="header" id="header-sticky">
<div class="header__logo">
	<svg
		width="137"
		height="25"
		viewBox="0 0 137 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M30.7499 9.1492C30.8929 8.04562 30.8929 7.0037 30.7499 6.01726H22.6519C22.6768 6.8619 22.6519 7.66954 22.596 8.44636C22.54 9.22318 22.4031 10.0555 22.1855 10.9433C21.974 11.8372 21.663 12.8237 21.2649 13.9026L19.4053 18.5512H18.802L19.567 6.02343H11.5747C11.5747 6.07275 11.5747 6.12824 11.5934 6.20222C11.6058 6.27004 11.6121 6.35635 11.6121 6.44883C11.5872 7.24414 11.5312 8.03946 11.4317 8.82244C11.3384 9.61159 11.1767 10.4686 10.9528 11.4118C10.7289 12.349 10.4117 13.4279 10.0136 14.6486L8.44005 18.5573H7.59418L8.84433 6.02959H0.211468L0 25H10.6169L13.1794 19.4266L12.9617 25H24.182L28.2309 16.5906C28.9151 15.1603 29.4749 13.8409 29.8978 12.6326C30.327 11.4242 30.6068 10.2713 30.7499 9.1677V9.1492Z"
			fill="white"
		/>
		<path
			d="M32.9143 5.98644L29.649 24.9877H38.4933L41.796 5.98644H32.9143Z"
			fill="white"
		/>
		<path
			d="M42.8595 0H34.0152L33.1631 4.78422H42.0385L42.8595 0Z"
			fill="white"
		/>
		<path
			d="M44.8125 1.26387L40.6578 24.9877H49.4959L53.6506 1.19605L44.8125 1.26387Z"
			fill="white"
		/>
		<path
			d="M55.8213 1.26387L51.6665 24.9877H60.5047L64.6594 1.19605L55.8213 1.26387Z"
			fill="white"
		/>
		<path
			d="M70.6302 17.2441L70.5929 17.2318C70.5929 17.2318 70.5805 17.2441 70.5742 17.2441C70.5618 17.2441 70.5742 17.2441 70.624 17.2441H70.6302Z"
			fill="white"
		/>
		<path
			d="M73.4539 11.7016C73.6094 11.5968 73.8147 11.5413 74.0759 11.5413C74.9778 11.5413 75.8672 11.5598 76.7566 11.5968C77.646 11.6338 78.5478 11.6831 79.4745 11.7571L80.4697 5.91245C79.1884 5.65351 77.9818 5.46856 76.8499 5.35142C75.7179 5.23428 74.5424 5.17263 73.3358 5.17263C71.3704 5.17263 69.7719 5.45623 68.5404 6.01726C67.3089 6.5783 66.4133 7.33046 65.8598 8.26757C65.3062 9.20469 65.0263 10.2959 65.0263 11.5413C65.0263 12.9285 65.2876 13.9951 65.81 14.7472C66.3325 15.4994 67.1223 16.0481 68.1859 16.3995L70.5991 17.2318C70.5991 17.2318 70.6178 17.2256 70.6364 17.2072C70.8728 17.2996 71.0532 17.3983 71.1713 17.5092C71.2895 17.6202 71.3517 17.7744 71.3517 17.984C71.3517 18.0764 71.3019 18.1751 71.19 18.2676C71.0843 18.36 70.935 18.434 70.7484 18.4772C70.5556 18.5265 70.3317 18.545 70.0767 18.545C69.1562 18.545 68.1921 18.5203 67.2032 18.4772C66.2081 18.4279 65.1569 18.36 64.0436 18.2676L63.0112 24.217C64.0498 24.4266 65.2689 24.5931 66.6683 24.7102C68.0677 24.8274 69.3925 24.889 70.6427 24.889C72.776 24.889 74.5113 24.5931 75.8609 24.0074C77.2106 23.4217 78.1746 22.6449 78.7531 21.6831C79.3315 20.7213 79.6238 19.6178 79.6238 18.3724C79.6238 17.0099 79.3128 15.9864 78.7033 15.2898C78.0876 14.5993 77.2355 14.0259 76.147 13.582L73.9453 12.7374C73.7338 12.6202 73.5597 12.5092 73.4291 12.4044C73.2984 12.2996 73.2363 12.1887 73.2363 12.0715C73.2363 11.9297 73.3109 11.8064 73.4664 11.7016H73.4539Z"
			fill="white"
		/>
		<path
			d="M92.0818 12.0715H95.627L96.7651 5.56104H93.2386L93.8855 1.89889H85.0411L84.4005 5.56104H82.3418L81.2409 12.0715H83.2623L82.3107 17.5277C81.9064 19.9199 82.1179 21.7633 82.9327 23.0518C83.7474 24.3403 85.2837 24.9877 87.529 24.9877C88.3313 24.9877 89.3265 24.9137 90.5144 24.7596C91.6961 24.6054 92.7162 24.4575 93.5683 24.3218L94.6318 18.0949C94.2524 18.1443 93.7859 18.1813 93.2324 18.2183C92.6788 18.2552 92.2559 18.2737 91.9698 18.2737C91.3043 18.2737 91.0555 17.8298 91.2234 16.9359L92.0818 12.0777V12.0715Z"
			fill="white"
		/>
		<path
			d="M118.671 5.56104L115.399 24.5314H110.423L109.571 16.2947C109.559 16.1344 109.621 15.9803 109.739 15.8755L112.153 13.8286C112.47 13.5573 112.32 13.0456 111.91 12.984L109.186 12.5832C109.012 12.5586 108.862 12.4353 108.8 12.2688L107.905 9.74723C107.768 9.37115 107.251 9.30949 107.034 9.64858L105.305 12.3551C105.23 12.4723 105.106 12.5524 104.969 12.5709L101.84 13.0148C101.461 13.0703 101.287 13.5203 101.548 13.8101L103.358 15.8385C103.47 15.9679 103.507 16.1406 103.457 16.3009L102.587 19.0752C102.456 19.476 102.879 19.8335 103.265 19.6486L105.802 18.4155C106.045 18.2984 106.337 18.397 106.455 18.6375L107.407 20.5364C107.544 20.8076 107.494 21.1344 107.283 21.3564L106.331 22.3551C105.442 23.2676 104.521 23.9211 103.576 24.3095C102.63 24.6917 101.648 24.889 100.628 24.889C99.5142 24.889 98.5626 24.6609 97.7727 24.2047C96.9766 23.7423 96.4293 22.8792 96.1183 21.6153C95.8135 20.3453 95.8509 18.6128 96.224 16.4057L96.6159 14.1554C97.0699 11.7571 97.7043 9.90136 98.5377 8.57583C99.365 7.25031 100.298 6.34402 101.343 5.86313C102.381 5.38224 103.551 5.1418 104.857 5.1418C106.275 5.1418 107.581 5.39457 108.781 5.90012C109.459 6.18372 110.119 6.52281 110.772 6.90506L111.922 5.5672H118.671V5.56104Z"
			fill="white"
		/>
		<path
			d="M136.888 5.41924C136.366 5.23428 135.75 5.13564 135.041 5.13564C134.214 5.13564 133.337 5.33292 132.416 5.73366C131.496 6.1344 130.563 6.76942 129.63 7.65105C129.151 8.10111 128.672 8.62515 128.193 9.20469L127.161 5.55487H120.879L117.613 24.5253H125.923L126.439 21.8804C126.626 21.1652 126.85 20.4316 127.129 19.6671C127.745 17.5339 128.286 15.9618 128.747 14.9507C129.207 13.9396 129.673 13.2491 130.146 12.873C130.619 12.4969 131.222 12.312 131.956 12.312C132.69 12.312 133.884 12.349 135.545 12.4168L137 5.45006L136.894 5.41307L136.888 5.41924Z"
			fill="white"
		/>
	</svg>
</div>
<div class="header__menu">
	<ul class="header__menu__list">
		<a class="header__menu__item" href="#aboutus">о нас</a>
		<a class="header__menu__item" href="#cases">кейсы</a>
		<a class="header__menu__item" href="#residents">резиденты</a>
		<a class="header__menu__item" href="production.html">production</a>
		<a class="header__menu__item" href="#services">услуги</a>
		<a class="header__menu__item" href="#contacts">контакты</a>
	</ul>
</div>
<div class="header__social">
	<a
		class="header__social__item"
		href="https://whatsapp.com"
		target="_blank"
		><svg
			width="26"
			height="26"
			viewBox="0 0 26 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12.0589 0.00840525C10.0932 0.199703 8.61094 0.623883 7.0033 1.45501C4.54907 2.72389 2.56731 4.74301 1.34199 7.22318C0.871245 8.17606 0.649386 8.76012 0.403346 9.6946C0.0931619 10.8724 0.00285056 11.5884 5.06043e-05 12.8915C-0.00132392 13.5402 0.0254539 14.2443 0.0619551 14.5182C0.339507 16.6011 0.993679 18.3962 2.08775 20.0768L2.45241 20.637L1.64235 23.025C1.1968 24.3383 0.839325 25.4199 0.847929 25.4286C0.856583 25.4371 1.97092 25.0905 3.32426 24.6582C4.67766 24.2259 5.80304 23.8721 5.82518 23.8721C5.84733 23.8721 6.05626 23.9906 6.28947 24.1353C6.52268 24.2801 7.0113 24.5408 7.37529 24.7148C10.6667 26.2878 14.4293 26.4225 17.7995 25.0878C21.6181 23.5756 24.551 20.2674 25.598 16.2917C25.9186 15.0739 26 14.4064 26 12.9931C26 11.5799 25.9186 10.9123 25.598 9.6946C24.3698 5.0305 20.6262 1.40504 15.9024 0.304935C15.1087 0.120093 14.2829 0.0264522 13.2807 0.00769354C12.7207 -0.00282962 12.1709 -0.0025246 12.0589 0.00840525ZM8.95401 6.04082C9.03831 6.08449 9.15642 6.20828 9.21654 6.31585C9.3683 6.58752 10.6059 9.56415 10.642 9.74421C10.6881 9.97455 10.4625 10.3661 9.9565 10.9343C9.42842 11.5271 9.31495 11.7174 9.36194 11.9312C9.44731 12.3191 10.6247 13.8783 11.3501 14.564C12.4757 15.628 14.1771 16.6384 14.9352 16.693C15.325 16.7211 15.4671 16.611 16.0634 15.8184C16.3338 15.4589 16.6223 15.0976 16.7044 15.0156C16.9008 14.8195 17.1923 14.778 17.5192 14.8994C17.9385 15.0553 20.5019 16.3019 20.6819 16.4375L20.8542 16.5673L20.8258 17.106C20.7528 18.4888 20.2671 19.2069 18.9824 19.8312C17.761 20.4248 16.805 20.4085 14.9333 19.7625C12.4222 18.8958 11.0893 18.0679 9.28323 16.2531C8.37951 15.345 7.7373 14.5772 7.00275 13.5269C5.79235 11.7961 5.32817 10.4596 5.46633 9.10311C5.57711 8.01551 5.9577 7.21265 6.72636 6.44512C7.0982 6.07376 7.58478 5.9209 8.3171 5.9453C8.62779 5.95562 8.85555 5.98978 8.95401 6.04082Z"
				fill="white"
			/>
		</svg>
	</a>
	<a
		class="header__social__item"
		href="https://telegram.org"
		target="_blank"
		><svg
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M14 0C6.2692 0 0 6.2692 0 14C0 21.7308 6.2692 28 14 28C21.7308 28 28 21.7308 28 14C28 6.2692 21.7308 0 14 0ZM20.4904 9.52C20.2804 11.7348 19.3676 17.1052 18.9028 19.586C18.7068 20.636 18.3204 20.986 17.9452 21.0224C17.1332 21.098 16.5144 20.4848 15.7276 19.9696C14.4956 19.1632 13.7984 18.6592 12.6028 17.8696C11.2196 16.9596 12.1156 16.4584 12.9052 15.6408C13.1124 15.4252 16.6936 12.1688 16.7636 11.872C16.772 11.8356 16.7804 11.6984 16.6992 11.6256C16.618 11.5528 16.4976 11.578 16.4108 11.5976C16.2876 11.6256 14.3192 12.9276 10.5056 15.5008C9.9456 15.8844 9.4416 16.072 8.988 16.0608C8.4868 16.0496 7.5264 15.778 6.8124 15.5456C5.936 15.26 5.2388 15.1088 5.3004 14.6272C5.3312 14.3752 5.6784 14.1176 6.342 13.8544C10.4244 12.0764 13.146 10.9032 14.5068 10.3376C18.396 8.7192 19.2024 8.4392 19.7288 8.4308C19.8436 8.428 20.104 8.4588 20.272 8.5932C20.412 8.708 20.454 8.862 20.4708 8.9712C20.4848 9.0804 20.5072 9.3268 20.4904 9.52Z"
				fill="white"
			/>
		</svg>
	</a>
	<a
		class="header__social__item"
		href="https://instagram.com"
		target="_blank"
		><svg
			width="27"
			height="28"
			viewBox="0 0 27 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8.71538 0.0778615C6.8928 0.142938 5.96017 0.277612 5.01546 0.611951C2.66929 1.44226 1.02973 3.29153 0.416447 5.79924C0.0321483 7.37089 0 8.00204 0 13.9749C0 19.9519 0.0360949 20.6656 0.41801 22.2372C1.05431 24.8556 2.89959 26.8233 5.38208 27.531C6.93169 27.9726 7.49194 28.0057 13.3197 27.9994C19.805 27.9923 20.7125 27.92 22.3018 27.2832C23.3054 26.881 23.9509 26.4446 24.7073 25.6568C25.768 24.5519 26.3823 23.2752 26.7236 21.466C26.9758 20.129 27.0802 14.1022 26.9316 9.45454C26.8779 7.77628 26.8215 7.07664 26.6846 6.39065C26.3307 4.61703 25.7657 3.46953 24.7077 2.37542C23.654 1.28583 22.4809 0.660994 20.8451 0.31804C19.4591 0.0273694 13.4561 -0.0914404 8.71538 0.0778615ZM21.4012 5.01116C22.0397 5.35078 22.3569 5.92385 22.3065 6.64669C22.2042 8.11429 20.5672 8.74654 19.5641 7.70591C18.7259 6.83655 19.0127 5.39821 20.1155 4.93985C20.4455 4.80271 21.0751 4.83768 21.4012 5.01116ZM14.6717 6.90103C15.3353 7.01267 16.4909 7.45874 17.1073 7.8411C17.7947 8.26755 18.7883 9.27159 19.2725 10.0291C21.8827 14.1119 19.8829 19.6406 15.3122 20.9784C14.4231 21.2386 12.6325 21.2604 11.7988 21.0211C10.5362 20.6588 9.46696 20.0198 8.58819 19.1024C7.31163 17.7697 6.65855 16.2401 6.56211 14.357C6.48063 12.7668 6.8521 11.372 7.71542 10.026C8.73405 8.43796 10.3531 7.30445 12.1275 6.93719C12.7912 6.79979 13.9708 6.78307 14.6717 6.90103ZM12.3832 9.5041C10.4652 10.0392 9.14375 11.7148 9.0256 13.7617C8.89775 15.9764 10.3725 18.0232 12.4649 18.5348C14.6534 19.07 16.9188 17.8036 17.7002 15.6079C17.9716 14.8455 18.0357 13.7138 17.8508 12.9515C17.4347 11.2358 16.1887 9.92995 14.5563 9.49872C13.9486 9.33812 12.9694 9.34059 12.3832 9.5041Z"
				fill="white"
			/>
		</svg>
	</a>
	<a
		class="header__social__item"
		href="https://facebook.com"
		target="_blank"
		><svg
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12.5816 0.0431786C6.87944 0.645079 2.08845 4.63297 0.514312 10.0877C0.0979415 11.5304 -0.00131778 12.2839 1.31453e-05 13.9918C0.00134407 15.7003 0.102705 16.4694 0.514312 17.8958C1.95599 22.8914 6.12095 26.7059 11.2476 27.726C15.1968 28.5117 19.2094 27.5934 22.484 25.1544C23.2749 24.5653 24.5877 23.2559 25.1751 22.4702C26.6507 20.4965 27.5632 18.2993 27.9123 15.8795C28.0285 15.0738 28.0294 12.9191 27.9138 12.104C27.2129 7.16027 23.9943 2.98109 19.412 1.06492C18.4778 0.674233 17.3832 0.357657 16.3432 0.177206C15.4219 0.0173799 13.4811 -0.0517662 12.5816 0.0431786ZM18.6723 4.56292L18.935 4.60647V6.13545V7.66443L17.7967 7.66484C16.5051 7.66526 16.1977 7.72574 15.8809 8.04197C15.5567 8.36547 15.5034 8.65981 15.503 10.1289L15.5026 11.4398H17.1899H18.8773L18.8357 11.702C18.7695 12.1198 18.4446 14.6713 18.4446 14.7732C18.4446 14.847 18.1469 14.8657 16.9736 14.8657H15.5026V19.2004V23.5352H13.7163H11.9301V19.2004V14.8657H10.4941H9.0581V13.1528V11.4398H10.4856H11.9131L11.9486 9.70944C11.9793 8.21592 12.0047 7.90892 12.134 7.46664C12.6207 5.80279 13.7661 4.78539 15.4592 4.51293C15.8385 4.45196 18.2269 4.48909 18.6723 4.56292Z"
				fill="white"
			/>
		</svg>
	</a>
</div>
</header>`

let firstSection = document.getElementById('section-first')
let headerElem = document.getElementById('header')
let aboutusContainer = document.querySelector('.aboutus_container')
console.log(firstSection.scrollHeight)
console.log(headerElem.scrollHeight)
console.log(headerElem.offsetTop)

let withHeader = false
let headerOffset = window.innerWidth < 1600 ? 60 : 72

window.addEventListener('scroll', e => {
  if (
    window.scrollY >
      firstSection.scrollHeight + headerElem.scrollHeight + headerOffset &&
    !withHeader
  ) {
    aboutusContainer.insertAdjacentHTML('afterbegin', header)
    withHeader = true
  }
  if (
    window.scrollY < firstSection.scrollHeight + headerElem.scrollHeight &&
    withHeader
  ) {
    document.getElementById('header-sticky').remove()
    withHeader = false
  }
})

const runningStringInner = document.querySelector('.running_string_inner')
let runningWord = document.getElementById('running_string_word')

const runningStringWords = ['star', 'popular', 'famous']

let currentWordIndex = 0

setInterval(() => {
  runningStringInner.classList.remove('animated2')
  runningStringInner.classList.add('animated1')

  setTimeout(() => {
    currentWordIndex = (currentWordIndex + 1) % 3
    runningWord.innerHTML = runningStringWords[currentWordIndex]
    runningStringInner.classList.remove('animated1')
    runningStringInner.classList.add('animated2')
  }, 600)
}, 4000)
