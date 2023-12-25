import React from 'react';

import { newsFeedSectionItemProps } from './interface';

import styles from './styles.module.scss'

const news = [
  {
    title: 'Corsair becomes the latest airline to pilot ICC AOKpass'
  },
  {
    title:
      'ICC warns EU vaccine export controls must be rolled back without delay'
  },
  {
    title:
      'Eduardo Silva Romero talks of advancing diversity, scope of ICC Institute as new Chair'
  },
  {
    title:
      'ICC/UNICEF: Funding shortfalls and supply chain challenges threaten equitable vaccine distribution'
  },
  {
    title:
      'Asdasda shortfalls and supply chain challenges threaten equitable vaccine distribution'
  },
  {
    title:
      'asdsaaklasdmnasd as d sad ls and supply chain challenges threaten equitable vaccine distribution'
  }
];

const NewsFeedSectionItem = (({title, link}: newsFeedSectionItemProps) => (
    <div className={styles.newsFeedSectionItem}>
        <h4>{title}</h4>
        <a href={link}>Read more</a>
    </div>
))

const NewsFeedSection = () => (
    <section className={styles.newsFeedSection}> 
        <h5>newsfeed</h5>
        <h3>ICC International Court of Arbitration News & Links</h3>
        <div className={styles.newsFeedSectionRowContainer}>
            <div className={styles.newsFeedSectionRow}>
                {
                news.map(({title}) => (
                    <NewsFeedSectionItem 
                        key={title}
                        title={title}
                        link='#'
                    />
                ))
            }
            </div>
        </div>
        <a href='#' className={styles.readAllNews}>read all news</a>
    </section>
);

export default NewsFeedSection;
