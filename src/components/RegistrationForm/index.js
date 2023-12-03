import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    fName: '',
    lName: '',
    isSubmitted: false,
    fnameEmpty: false,
    lnameEmpty: false,
  }

  onChangeFirstname = event => {
    this.setState({fName: event.target.value})
  }

  onChangeLastname = event => {
    this.setState({lName: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {fName, lName} = this.state
    if (fName !== '' && lName !== '') {
      this.setState({isSubmitted: true})
    } else if (fName === '' && lName !== '') {
      this.setState({fnameEmpty: true})
    } else if (lName === '' && fName !== '') {
      this.setState({lnameEmpty: true})
    } else {
      this.setState({lnameEmpty: true, fnameEmpty: true})
    }
  }

  anotherForm = () => {
    this.setState({
      isSubmitted: false,
      fName: '',
      lName: '',
      fnameEmpty: false,
      lnameEmpty: false,
    })
  }

  isFnameEmpty = event => {
    if (event.target.value === '') {
      this.setState({fnameEmpty: true})
    } else {
      this.setState({fnameEmpty: false})
    }
  }

  isLnameEmpty = event => {
    if (event.target.value === '') {
      this.setState({lnameEmpty: true})
    } else {
      this.setState({lnameEmpty: false})
    }
  }

  render() {
    const {fName, lName, isSubmitted, fnameEmpty, lnameEmpty} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        {isSubmitted ? (
          <div className="submitted-form">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="image"
            />
            <p className="successful-msg">Submitted Successfully</p>
            <button type="button" onClick={this.anotherForm}>
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="input-container">
              <label htmlFor="fname">FIRST NAME</label>
              <input
                type="text"
                id="fname"
                value={fName}
                placeholder="First Name"
                onChange={this.onChangeFirstname}
                onBlur={this.isFnameEmpty}
              />
              {fnameEmpty ? <p className="error">Required</p> : null}
            </div>
            <div className="input-container">
              <label htmlFor="lname">LAST NAME</label>
              <input
                type="text"
                id="lname"
                value={lName}
                placeholder="Last Name"
                onChange={this.onChangeLastname}
                onBlur={this.isLnameEmpty}
              />
              {lnameEmpty ? <p className="error">Required</p> : null}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
