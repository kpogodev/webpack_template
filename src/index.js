// JS Files
import { getPosts } from './js/getPosts'

//Style Files (CSS|SASS|SCSS)
import './styles/style.css'
import './styles/main.scss'

//Assest Files (png|jpg|jpeg|gif|svg)
import twitter_icon from './assets/twitter.svg'

;(() => {
  console.log(getPosts())

  const twitterIcon = document.createElement('img')
  twitterIcon.setAttribute('src', twitter_icon)
  twitterIcon.style = 'width: 30px; height: 30px;'
  document.body.append(twitterIcon)
})()
