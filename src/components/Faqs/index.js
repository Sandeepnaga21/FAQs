import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <h1 className="heading">FAQs</h1>
        <ul className="list-container">
          {faqsList.map(eachFaq => (
            <FaqItem faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
