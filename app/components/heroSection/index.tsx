import React from 'react';
import Image from 'next/image';

import smallLogo from '@/app/resources/images/logo.svg';
import bigLogo from '@/app/resources/images/logo-icc.svg';
import movingArticles from '@/app/resources/images/moving-articles.gif';

import styles from './styles.module.scss';

const HeroSection = () => (
    <section className={styles.heroSection}>
        <div className={styles.logoContainer} >
            <div>
                <Image alt='ICC' width={323} height={165} src={bigLogo} />
                <Image alt='Jus Mundi' width={107} height={38} src={smallLogo} />
                <Image alt='articles' width={479} height={497} src={movingArticles} />
            </div>
        </div>

        <div className={styles.textContainer}>
            <h1>
                A Unique Partnership for the Publication of ICC Arbitration Awards
            </h1>
            <p className={styles.description}>
                The International Chamber of Commerce (ICC) & Jus Mundi have joined forces to make ICC Arbitration Awards
                and related materials freely available to the global legal community.
            </p>
            <button className={styles.button}>
                Access ICC Awards
            </button>
        </div>

        
    </section>
);

export default HeroSection;
