import PropTypes from 'prop-types';
import styles from './Profile.module.css';
export const Profile = props => {
  const { followers, views, likes } = props.stats;
  return (
    <div className={styles.profile}>
      <div className="description">
        <img
          src={props.avatar}
          alt="User avatar"
          className="avatar"
          width="200"
        />
        <p className={styles.name}>{props.username}</p>
        <p className={styles.tag}>@{props.tag}</p>
        <p className={styles.tag}>{props.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className="label">Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className="label">Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className="label">Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
