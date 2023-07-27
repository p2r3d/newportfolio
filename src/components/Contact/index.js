import React from 'react';
import './contact.scss'

function Contact() {
  return (
    <section id="contact" className='contactSection'>
      <h2>Contact</h2>
      <div className="contactMe">
      {/* contact via email envoyé avec le navigateur */}
       <div>
          <p><em>Pour démarrer un projet ensemble, ou pour tout renseignement,</em></p> 
          <p><em>merci de me contacter par email </em></p>
        </div>
        <div>
            <a href="mailto:pascale.pierrard@laposte.net" className='contactEmail'>
            <i className="fa-sharp fa-regular fa-envelope"></i>
            <span><strong>pascale.pierrard@laposte.net</strong></span>
            </a>
        </div>
       </div>
      {/* contact via formulaire emailjs géré par netlify (code fourni par netlify)*/}
      <div className='contact'>
        <p><em>ou via le formulaire suivant :</em></p>
        <form 
        name="contact" 
        method="post" 
        className="form" 
        data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name" className='formLabel' id="name">Nom </label>
          <input type="text" className='formInput' name="name" required/>
          <label htmlFor="email" className='formLabel'>email</label>
          <input type="email" className='formInput' name="email" required/>
          <label htmlFor="message" className='formLabel'>Message </label>
          <textarea name="message" className='formTextarea' required></textarea>
          <button type="submit" className='formBtn'>Envoyer</button>
        </form>
      </div>
    </section>
  )
}
export default Contact;