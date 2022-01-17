import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
          } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
          }
    }

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        setName('');
        setEmail('');
        setMessage('');
  };

  return (
    <section>
      <div className="container my-auto">
        <div className="row">
          <div >
            <h1 className="margin-top text-center">Contact Me: </h1>
            <hr className="mx-auto" />
            <p className="text-center">This contact form is a test with no backend currently in place.</p>
            <p className="text-center">To contact me directly, use LinkedIn or email links in the footer.</p>
            <p className="text-center">or email me at: mistergabriel105@gmail.com</p>
            <p className="text-center">Hello    {name}</p>
            <form className="form col-lg-10 mx-auto text-center ">
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
              />
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="name"
              />
              <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="Leave a Message"
                cols="49"
                rows="4"
              />
              <hr />
              <button type="button" className="btn-primary" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

    
