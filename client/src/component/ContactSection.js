import React, { Component } from 'react';
// import AlertMessage from './AlertMessage';

class ContactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields : {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      isSend: false,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event){
    let formFields = {...this.state.formFields};
    formFields[event.target.name] = event.target.value;
    this.setState({
      formFields
    });
  }


  handleOnSubmit(event){
    event.preventDefault();
    // const fData = new FormData(event.target);
    // let data = {};
    // fData.forEach((value, key)=>{
    //   data[key] = value;
    // })

    //prevent duplicated click button
    if(this.state.isSend){
      return;
    }

    this.setState({isSend: true});

    let fetchOption = {
      method: 'POST',
      body: JSON.stringify(this.state.formFields),
      headers: new Headers({
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
        'charset' : 'UTF-8',
      })
    }

    fetch(`/api/email`, fetchOption).then((response)=>{
      alert("Thank you for send Contact mail, Soon reply mail")
    }).catch(e=>{
      console.log(e);
    })


    this.refs.submitBtn.setAttribute('disabled', 'disabled');
  }

  render() {
    // const styles = {
    //   section: {
    //     paddingTop: '75px',
    //     paddingBottom: '3em',
    //   },
    //   loaderStyle: {
    //     zIndex: '999',
    //     height: '20em',
    //     width: '2em',
    //     overflow: 'show',
    //     margin: '12em auto auto auto',
    //     top: 0,
    //     left: 0,
    //     bottom: 0,
    //     right: 0,
    //   },
    // };
    return (
        ///*<div style={styles.section}>*/
        ///* <div style={styles.loaderStyle} /> */
        ///*  Contact Section  */
        <section className="w3-padding-64 w3-content w3-text-grey" id="contact">
          <h2 className="w3-text-light-grey">Contact Me</h2>
          <hr style={{width:"200px"}} className="w3-opacity" />

          <div className="w3-section">
            <p>
              <i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right" />
              Chicago, US
            </p>
            <p>
              <i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right" />
              Phone: +00 151515
            </p>
            <p>
              <i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right" />
              Email: mail@mail.com
            </p>
          </div>
          <br />
          <p>Lets get in touch. Send me a message:</p>

          <form onSubmit={this.handleOnSubmit} >
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Name"
                required
                name="name"
                id="name"
                onChange={this.handleOnChange}
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="email"
                placeholder="Email"
                required
                name="email"
                id="email"
                onChange={this.handleOnChange}
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Subject"
                required
                name="subject"
                id="subject"
                onChange={this.handleOnChange}
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Message"
                required
                name="message"
                id="message"
                onChange={this.handleOnChange}
              />
            </p>
            <p>
              <button
                ref="submitBtn" 
                className="w3-button w3-light-grey w3-padding-large"
                type="submit">
                <i className="fa fa-paper-plane"> SEND MESSAGE</i>
              </button>
            </p>
          </form>
          {/* <AlertMessage message={contact.message} errMessage={contact.errMessage} /> */}
        </section>
      //<!--</div>-->
      /* <!-- End Contact Section --> */
    );
  }
}
export default ContactSection;
