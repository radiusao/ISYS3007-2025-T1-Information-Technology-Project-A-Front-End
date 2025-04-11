import styles from "../CustomStyling.module.css";
interface TenantBusinessHoursProp {
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
  sun: string;
  publicHoldiy: string;
}
function TenantBusinessHours({
  mon,
  tue,
  wed,
  thu,
  fri,
  sat,
  sun,
  publicHoldiy,
}: TenantBusinessHoursProp) {
  return (
    <div>
      <h1 className={styles.display_1}>Business Hours</h1>
      <ul style={{ listStyle: "none", paddingLeft: "5px" }}>
        <li>Mon: {mon}</li>
        <li>Tue: {tue}</li>
        <li>Wed: {wed}</li>
        <li>Thu: {thu}</li>
        <li>Fri: {fri}</li>
        <li>Sat: {sat}</li>
        <li>Sun: {sun}</li>
        {publicHoldiy ? <li>Public Holiday: {publicHoldiy}</li> : ""}
      </ul>
    </div>
  );
}
export default TenantBusinessHours;
