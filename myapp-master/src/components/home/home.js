import React from 'react'
import './home.css'
import Navigation from '../navigation/nav'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Tring Library Management',
    }
    this.summaryStory = this.summaryStory.bind(this)
    this.calbacktitle = this.calbacktitle.bind(this)
  }
  summaryStory = () => {
    this.setState({
      message:
        'Our Tring Library preserves and provides access to a rich, diverse and enduring source of knowledge to inform, inspire and engage you in your intellectual and creative endeavors. Whether you are new to the Library of Tring or an experienced researcher, we have a world class staff ready to assist you online and in person.',
    })
  }
  calbacktitle = () => {
    this.setState({
      message: 'Tring Library Management',
    })
  }

  render() {
    return (
      <div>
        <Navigation />
        <h3
          className='welcome_title'
          onMouseOver={this.summaryStory}
          onMouseOut={this.calbacktitle}
        >
          {this.state.message}
        </h3>
      </div>
    )
  }
}

export default Home
