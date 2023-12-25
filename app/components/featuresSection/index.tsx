import React from 'react';

import { featuresSectionItemProps } from './interface';

import styles from './styles.module.scss'

const FeaturesSectionItem = ({
  icon,
  title,
  description
}: featuresSectionItemProps) => (
    <div className={styles.featuresSectionItem}>
        <span className={`icon ${icon}`}></span>
        <h5>{title}</h5>
        <p>{description}</p>
    </div>
);

const features = [
  {
    icon: 'icon-more-content',
    title: 'More key arbitration content',
    description:
      'This unique partnership means you will have access to more key arbitration content to level up your arbitration research. '
  },
  {
    icon: 'icon-transparency',
    title: 'More transparency',
    description:
      'You will appreciate the increase in transparency in arbitration!'
  },
  {
    icon: 'icon-efficiency',
    title: 'More efficiency',
    description:
      'Jus Mundi’s AI-powered technology efficiently delivers thorough legal research and due diligence with full confidence.'
  }
];

const FeaturesSection = () => (
    <div className={styles.featuresSection}>
        {features.map(({ icon, title, description }) => (
            <FeaturesSectionItem
                key={title}
                icon={icon}
                title={title}
                description={description}
      />
    ))}
    </div>
);

export default FeaturesSection;
