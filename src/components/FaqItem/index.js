import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isBtnClicked: false}

  onClickPlusBtn = () => {
    this.setState(prevState => ({isBtnClicked: !prevState.isBtnClicked}))
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText, id} = faqDetails
    const {isBtnClicked} = this.state

    const faqAnswerText = isBtnClicked ? answerText : ''

    const onChangeImgUrl = isBtnClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isBtnClicked ? 'minus' : 'plus'

    return (
      <li className="faqs-table" value={id}>
        <div className="faq-question">
          <h1 className="heading">{questionText}</h1>
          <img
            src={onChangeImgUrl}
            alt={altText}
            className="img"
            onClick={this.onClickPlusBtn}
          />
        </div>
        <div className="answer-faq">
          <p className="answer">{faqAnswerText}</p>
        </div>
      </li>
    )
  }
}

export default FaqItem
