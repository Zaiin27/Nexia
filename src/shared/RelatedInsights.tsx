import React from 'react';
import Image from 'next/image';
import { CARD_STYLES, SECTION_STYLES } from '../utils/constants';
import { InsightCardProps, RelatedInsightsProps } from '../utils/types';

const InsightCard: React.FC<InsightCardProps> = ({ 
  image, 
  title, 
  subtitle, 
  category 
}) => {
  return (
    <article className={CARD_STYLES.container}>
      <div className={CARD_STYLES.imageContainer}>
        <Image
          src={image}
          alt={title}
          fill
          className={CARD_STYLES.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className={CARD_STYLES.contentContainer}>
        <h3 className={CARD_STYLES.title}>
          {title}
        </h3>
        <p className={CARD_STYLES.subtitle}>
          {subtitle}
        </p>
      </div>
    </article>
  );
};

// Main related insights component
const RelatedInsights: React.FC<RelatedInsightsProps> = ({
  title = "Related Insights",
  buttonText = "View all Audit Insights",
  buttonHref = "#",
  insights
}) => {
  return (
    <section className={SECTION_STYLES.container}>
      <div className={SECTION_STYLES.wrapper}>
        <header className={SECTION_STYLES.header}>
          <h2 className={SECTION_STYLES.title}>
            {title}
          </h2>
          <button 
            className={SECTION_STYLES.button}
            onClick={() => window.open(buttonHref, '_blank')}
            aria-label={`${buttonText} - Opens in new tab`}
          >
            {buttonText}
          </button>
        </header>
        
        <div className={SECTION_STYLES.grid}>
          {insights.map((insight, index) => (
            <InsightCard
              key={`insight-${index}-${insight.title.replace(/\s+/g, '-').toLowerCase()}`}
              image={insight.image}
              title={insight.title}
              subtitle={insight.subtitle}
              category={insight.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedInsights;
