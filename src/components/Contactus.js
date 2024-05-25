import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const ContactUs = (props) => {
  const {currrollno}=props;
  const history = useNavigate();
  useEffect(() => {
    if (!currrollno) {
      // Redirect to sign-in if currrollno is null
      history('/');
    }
  }, [currrollno]);
  const [name, setName] = useState('')
  const [rollno, setRollno] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // send the form data to the server
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Message: ${message}`)
  }

  return (
    <div className='contactus-container' >
      <h2 style={{paddingTop:"10px", alignSelf:"center"}}>Contact Us</h2>
      <form onSubmit={handleSubmit} className='contactus-form'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
         <label htmlFor="rollno">RollNo:</label>
        <input
          type="text"
          id="rollno"
          name="rollno"
          value={rollno}
          onChange={(event) => setRollno(event.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <style>
        {`
         .contactus-container {
          display : flex;
          flex-direction: column;
          justify-content : center;
          align-items: center;
          width : 50%;
          margin-left:25%;
          background:#FFFF;
          border-radius: 1.2em;
          padding-top : 20px;
         }
         .contactus-form {
          width : 80%;
          display : flex;
          flex-direction:column;
           justify-content : center;
         }
          @media (max-width: 768px) {
            .contactus-container {
              display : flex;
              flex-direction: column;
              justify-content : flex-start;
              align-items: flex-start;
              width : 95%;
              margin-left:2%;
              background:#FFFF;
              border-radius : 1.2em;
              padding-top : 20px;
          }
          .contactus-form {
            width : 80%;
            display : flex;
            flex-direction:column;
             justify-content : flex-start;
             align-items: flex-start;
           }
        `}
      </style>
    </div>
  )
}

export default ContactUs