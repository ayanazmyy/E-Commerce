import React from 'react';
import styles from './Header.module.css';


const Header = () => {
  return (
    <>
      <header id="home" className={`${styles.header}`} >
        <div className='container'>
          <div className='row'>
            <div className={`${styles.contentContainer}  col-md-6 d-flex justify-content-center align-items-center`}>
              <div>
                <h2 className={styles.firstHeading}>Great deals</h2>
                <h2 className={styles.secondHeading}>on all products</h2>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header