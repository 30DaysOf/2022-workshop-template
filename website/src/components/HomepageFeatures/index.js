import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Plan',
    Svg: require('@site/static/img/landing-plan.svg').default,
    description: (
      <>
        Define your 30-day roadmap with objectives structured in 4 weeks
      </>
    ),
  },
  {
    title: 'Execute',
    Svg: require('@site/static/img/landing-learn.svg').default,
    description: (
      <>
        Document your progress daily - what worked, what didn't
      </>
    ),
  },
  {
    title: 'Share',
    Svg: require('@site/static/img/landing-complete.svg').default,
    description: (
      <>
        Summarize your learnings and share insights to help others.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
