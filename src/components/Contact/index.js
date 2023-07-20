import React from 'react';
import './contact.scss'

function Contact() {
  
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log('Le formulaire a été soumis !');
    // Autres actions que vous souhaitez effectuer lors de la soumission du formulaire
  }
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
        onSubmit={handleFormSubmit}
        netlify >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name" className='formLabel'>Nom </label>
          <input type="text" className='formInput' name="name"/>
          <label htmlFor="email" className='formLabel'>email</label>
          <input type="email" className='formInput' name="email"/>
          <label htmlFor="message" className='formLabel'>Message </label>
          <textarea name="message" className='formTextarea'></textarea>
          <button type="submit" className='formBtn'>Envoyer</button>
        </form>
      </div>
    </section>
  )
}
export default Contact;