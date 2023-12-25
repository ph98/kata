import React from 'react';
import Image from 'next/image';

import burfordLogo from '../../resources/images/logos/burford.svg'
import curtisLogo from '../../resources/images/logos/curtis.svg'
import dentonLogo from '../../resources/images/logos/denton.svg'
import dlaPiperLogo from '../../resources/images/logos/dla-piper.svg'
import evershedsLogo from '../../resources/images/logos/eversheds.svg'
import fcdoLogo from '../../resources/images/logos/fcdo.svg'
import foleyLogo from '../../resources/images/logos/foley.svg'
import freshfieldsLogo from '../../resources/images/logos/freshfields.svg'
import gibsonDuneLogo from '../../resources/images/logos/gibson-dune.svg'
import mofaLogo from '../../resources/images/logos/mofa.svg'
import shermanLogo from '../../resources/images/logos/sherman.svg'
import threecrownLogo from '../../resources/images/logos/threecrown.svg'

import { logoSectionItemProps } from './interface';

import styles from './styles.module.scss'

const logos = [
    {
        image: burfordLogo
    },
    {
        image: curtisLogo
    },
    {
        image: dentonLogo
    },
    {
        image: dlaPiperLogo
    },
    {
        image: evershedsLogo
    },
    {
        image: fcdoLogo
    },
    {
        image: foleyLogo
    },
    {
        image: freshfieldsLogo
    },
    {
        image: gibsonDuneLogo
    },
    {
        image: mofaLogo
    },
    {
        image: shermanLogo
    },
    {
        image: threecrownLogo
    }
]

const LogoSectionItem = ({image} : logoSectionItemProps) => (
    <Image className={styles.logoItem} alt={ ' Logo'} src={image} height={67} width={114} />
);

const LogoSection = () => (
    <section className={styles.logoSection}> 
        <h5>Trusted by the Best Arbitration Teams Worldwide</h5>
        <div className={styles.logoItems} >
            {
            logos.map(({image})=>(
                <LogoSectionItem 
                    key={image}
                    image={image}
                />
            ))
        }

        </div>
       
    </section>
);

export default LogoSection;
