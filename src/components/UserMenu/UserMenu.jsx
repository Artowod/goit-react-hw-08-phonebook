import s from './UserMenu.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserMenu = () => {
  return (
    <div className={s.wrapper}>
      <span className={s.email}> sereega@ukr.net </span>
      <ul className={s.buttonsBlock}>
        <li className={s.loginSection}>
          <Button variant="primary">Logout</Button>
        </li>
        <li>
          <Button variant="info" disabled>
            Register
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
