import styles from './TileBar.module.scss'
import TileBarItem from './TileBarItem';
 
const TileBar = () => {


  return (
    <div className={styles.tilebar}>
        <TileBarItem text="Facials" items={["Classic", "Collegen", "Deep Pore", "Hydrating", "Teen",  "Vitamin C"]} image="/facial.jpg"/>
        <TileBarItem text="Make Up" items={["Bridal Party", "Prom", "Special Occasion", "Teen"]} image="/makeup.jpg"/>
        <TileBarItem text="Treatment" items={["MicroDerm", "MicroCurrent", "Body Wraps", "Reflexology", "Body Polish"]} image="/spa.jpg"/>
        <TileBarItem text="Tanning" items={["Bronze", "Face Only", "Legs Only",  "Orignal Airbrush"]} image="/tan.jpg"/>
        <TileBarItem text="Waxing" items={[ "Bikini", "Back", "Brow", "Leg", "Under Arm"]} image="/legs.jpg"/>
        <TileBarItem text="Book Now" items={["Tap Here"]} image="/spa_bg.jpg" isLink="true" linkTo="http://www.secure-booker.com/angelamichael/MakeAppointment/Search.aspx"/>
    </div>
  )
}

export default TileBar;