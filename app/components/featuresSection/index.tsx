import React from 'react';

import { features } from './constants';
import { featuresSectionItemProps } from './interface';

import styles from './styles.module.scss';

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


const FeaturesSection = () => (
    <div className={styles.featuresSection}>
        {
          features.map(({ icon, title, description, id }) => (
              <FeaturesSectionItem
                  key={id}
                  icon={icon}
                  title={title}
                  description={description}
              />
          ))
        }
    </div>
);

export default FeaturesSection;
