import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="faqs-container">
        <ul>
          {faqsList.map(faq => (
            <FaqItem key={faq.id} faq={faq} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
