import css from './App.module.css';
import { FeedbackOpction } from './FeedbackOpction/FeedbackOpction';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  return (
    <div className={css.box}>
      <Section title="FeedbackOpction">
        <FeedbackOpction />
      </Section>
      <Section title="Statistics">
        <Notification />
        <Statistics />
      </Section>
    </div>
  );
};
