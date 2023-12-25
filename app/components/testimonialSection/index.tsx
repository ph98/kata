import React from 'react';

import styles from './styles.module.scss';

const TestimonialSection = () => (
    <section className={styles.testimonialSection}>
        <blockquote>
            Publicising  and  disseminating  information  about  arbitration  has  been  one  of  ICC’s 
            commitments  since  its  creation  and  an  instrumental  factor  in  facilitating  the  development  of trade worldwide.
        </blockquote>
        <p>
            Note to the Parties and the Arbitral Tribunals {'\n'}
            on the Conduct of Arbitration under the ICC Rules of Arbitration
        </p>
        <a href='#'>
            read the whole document
        </a>
    </section>
);

export default TestimonialSection;
