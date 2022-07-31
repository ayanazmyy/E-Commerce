import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <main id="contact" className={styles.contact}>
      <div className="container">
        <div className={`${styles["bg-img"]} row`}>
          <div className="col-md-6 gy-5">
            <div>
              <h3>Sign Up For Our Newsletter</h3>
              <h6>Get email updates about our latest shop and <span>special offers</span></h6>
            </div>
          </div>
          <div className="col-md-6 gy-5">
            <div>
              <div className="input-group mb-3">
                <input placeholder='Enter your email...' type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                <span className={`${styles['signup-btn']} input-group-text`} id="inputGroup-sizing-lg">Sign up</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Contact