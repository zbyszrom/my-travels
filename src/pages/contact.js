import React from 'react'
import Layout from '../components/layout'
const Contact = () => {
    return (
        <Layout>
            <section>
                <form 
                 action="https://formspree.io/youremail@email.com"
                 method="POST">
           <h4>Kontact</h4> 
           <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"      
            />
          </div>
          <div>
            <label htmlFor="message">wiadomość</label>
            <textarea
              name="message"
              id="message"
              rows="10"    
            />
          </div>
          <div>
            <input
              type="submit"
              value="wyślij"        
            />
          </div>
                </form >
           </section>
        </Layout>
    )
}

export default Contact
