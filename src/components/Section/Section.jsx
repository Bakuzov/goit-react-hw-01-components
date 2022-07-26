import PropTypes from 'prop-types';
import styles from './Section.module.css';
export const Section = ({ title, children }) => {
  console.dir(children);

  return (
    <section className={styles.section}>
      {title && <h2 className={styles.statistics}>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
