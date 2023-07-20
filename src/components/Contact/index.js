import React from 'react';
import './contact.scss'

function Contact() {
  return (
    <section id="contact" className='contactSection'>
      <h2>Contact</h2>
      <div className="contactMe">
        {/*<i className="fa-sharp fa-regular fa-envelope"></i>*/}
        <p><em>Pour démarrer un projet ensemble, ou pour tout renseignement,</em></p> 
        <p><em>n'hésitez pas à me contacter via ce formulaire !</em></p>
      </div>
      <div className='contact'>
        <form 
        name="contact" 
        method="post" 
        className="form" 
        data-netlify="true"
        onSubmit="submit"
        netlify>
          <input type="hidden" name="form-name" value="contact" />
          <label for="name" className='formLabel'>Nom </label>
          <input type="text" className='formInput' name="name"/>
          <label for="email" className='formLabel'>email</label>
          <input type="email" className='formInput' name="email"/>
          <label for="message" className='formLabel'>Message </label>
          <textarea name="message" className='formTextarea'></textarea>
          <button type="submit" className='formBtn'>Envoyer</button>
        </form>
      </div>
      {/*<form onSubmit={handleSubmit} className='form' action='mailto:p2r3d@laposte.net' method="POST" encType="text/plain">
        <label className='formLabel'>Nom</label>
        <input
          className='formInput'
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required/>
        <label className='formLabel'>Email</label>
        <input
          type="email"
          className='formInput'
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>
        <label className='formLabel' >Message</label>
        <textarea
          id="message"
          className='formTextarea'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required>
        </textarea>
        <button type="submit" className='formBtn'>Envoyer</button>
      </form>*/}
    </section>
  )
}
export default Contact;