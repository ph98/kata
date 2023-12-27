import React from 'react';

import { newsFeedSectionItemProps } from './interface';

import styles from './styles.module.scss'
import { news } from './constants';




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
                news.map(({title, id}) => (
                    <NewsFeedSectionItem 
                        key={id}
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
