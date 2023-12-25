import React from 'react';

import styles from './styles.module.scss';


const PartnershipSection = () => (
    <section className={styles.partnershipSection}>
        <h2 className={styles.title}>Why this partnership?</h2>
        <p className={styles.description}>Throughout its 100-year history, ICC has brought global business together to support an international rules-based order,
            including the promotion of global trade and commerce through the work of the ICC International Court of Arbitration.
        </p>
        <p className={styles.note}>
            ICC has partnered with Jus Mundi to provide full public access 
            to all publishable ICC International Court of Arbitration awards and related documents made as of 1 January 2019
        </p>
    </section>
);

export default PartnershipSection;
