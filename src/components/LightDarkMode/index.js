// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  onMode = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const text = isDark ? 'Light Mode' : 'Dark Mode'
    const mode = isDark ? 'dark-mode' : 'light-mode'

    return (
      <div className="bg">
        <div className={`container ${mode}`}>
          <h1>Click To Change Mode</h1>
          <button className="btn" type="button" onClick={this.onMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
