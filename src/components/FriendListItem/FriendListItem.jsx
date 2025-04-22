import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p
        className={`${css.status} ${
          isOnline ? css.statusOnline : css.statusOffline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
