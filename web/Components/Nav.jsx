import styles from "./Nav.module.scss";

const Nav = (props) => {
  const {current} = props;
  return(
  <div className= {styles.nav} >
    <div className={styles.nav_wrapper}>
    <button  className={styles.nav_button }><a className = {styles.nav_link} href='http://www.secure-booker.com/angelamichael/MakeAppointment/Search.aspx'>Book</a></button>
    <button className={styles.nav_button}>
      <a className={`${styles.nav_link} ${current == 'home' ? styles.current: ''}`} href='/'>Home</a></button>
    <button className={styles.nav_button}>
      <a className={`${styles.nav_link} ${current == 'blog' ? styles.current: ''}`} href='/posts'>Blog</a>
      </button>
    </div>
  </div>
  )
};

export default Nav;