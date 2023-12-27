import React from 'react';
import Image from 'next/image';

import { logos } from './constants';
import { logoSectionItemProps } from './interface';

import styles from './styles.module.scss'

const LogoSectionItem = ({image} : logoSectionItemProps) => (
    <Image className={styles.logoItem} alt={ ' Logo'} src={image} height={67} width={114} />
);

const LogoSection = () => (
    <section className={styles.logoSection}> 
        <h5>Trusted by the Best Arbitration Teams Worldwide</h5>
        <div className={styles.logoItems} >
            {
            logos.map(({image, id})=>(
                <LogoSectionItem 
                    key={id}
                    image={image}
                />
            ))
        }

        </div>
       
    </section>
);

export default LogoSection;
