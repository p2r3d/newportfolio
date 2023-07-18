import React,{useState} from 'react';
import './contact.scss'

function Contact() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Réinitialisation des champs du formulaire après envoi
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className='contactSection'>
      <h2>Contact</h2>
      <div className="contactMe">
        {/*<i className="fa-sharp fa-regular fa-envelope"></i>*/}
        <p>Pour démarrer un projet ensemble, ou pour tout renseignement, n'hésitez pas à me contacter via ce formulaire !</p>
      </div>
      <form onSubmit={handleSubmit} className='form' action='mailto:p2r3d@laposte.net' method="POST" encType="text/plain">
        <label formname="name" className='formLabel'>Nom</label>
        <input
          className='formInput'
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required/>
        <label formemail="email" className='formLabel'>Email</label>
        <input
          type="email"
          className='formInput'
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>
        <label formmsg="message" className='formLabel' >Message</label>
        <textarea
          id="message"
          className='formTextarea'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required>
        </textarea>
        <button type="submit" className='formBtn'>Envoyer</button>
      </form>
    </section>
  )
}
export default Contact;