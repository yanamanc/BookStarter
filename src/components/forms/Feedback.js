import React from "react"

class Feedback extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      email: "",
      message: "",
    }

    this.showInConsole = this.showInConsole.bind(this)
    this.setField = this.setField.bind(this)
  }

  showInConsole (e) {
    e.preventDefault()
    console.log(this.state)
  }

  setField (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    const { username, email, message } = this.state

    return (
      <form style={styles.form} onSubmit={this.showInConsole}>
        <h3>Any questions?</h3>
        <input placeholder="Username" value={username} name="username" onChange={this.setField} />
        <input placeholder="Email" value={email} name="email" type="email" onChange={this.setField} />
        <textarea placeholder="Enter your message" value={message}  name="message" onChange={this.setField} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Feedback;

const styles = {
    form: {
      display: 'block',
      padding: '0 20px',
      width: '20%'
    }
  };