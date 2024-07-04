import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAnswerVisible: false,
    }
  }

  toggleAnswerVisibility = () => {
    this.setState(prevState => ({
      isAnswerVisible: !prevState.isAnswerVisible,
    }))
  }

  render() {
    const {faq} = this.props
    const {questionText, answerText} = faq
    const {isAnswerVisible} = this.state
    const iconUrl = isAnswerVisible
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const iconAltText = isAnswerVisible ? 'minus' : 'plus'

    return (
      <li className="faq-item">
        <div
          className="question-container"
          onClick={this.toggleAnswerVisibility}
          role="button"
          tabIndex={0}
          onKeyPress={e => {
            if (e.key === 'Enter') this.toggleAnswerVisibility()
          }}
        >
          <h1 className="question">{questionText}</h1>
          <img src={iconUrl} alt={iconAltText} className="icon" />
        </div>
        {isAnswerVisible && <p className="answer">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
