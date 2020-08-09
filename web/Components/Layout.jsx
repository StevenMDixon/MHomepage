import Title from "./Title";
import styles from "./Layout.module.scss";


const Layout = (props) => {
  return (
    <div className={styles.main}>
      <Title />
      {props.children}
    </div>
  )
  
}

export default Layout;