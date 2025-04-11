import styles from "../CustomStyling.module.css";
interface TenantContactProp {
  phoneNum: string;
  email: string;
  websiteLink?: string;
}
function TenantContact({ phoneNum, email, websiteLink }: TenantContactProp) {
  return (
    <div>
      <h1 className={styles.display_1}>Contact</h1>
      <p>Phone: {phoneNum}</p>
      <p>Email: {email}</p>
      {websiteLink ? (
        <p>
          Website:{" "}
          <a
            target="_blank"
            href={/^https?:\/\/www\./.test(websiteLink) ? websiteLink : ""}
          >
            {websiteLink.replace(/^https?:\/\//, "")}
          </a>
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
export default TenantContact;
