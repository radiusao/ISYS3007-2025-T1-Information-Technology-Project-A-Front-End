import MenuLeafItem from "./MenuLeafItem";
import styles from "../CustomStyling.module.css";

function MenuLeaf() {
  return (
    <div id="menu" style={{ height: "100vh" }}>
      <div
        className="row"
        ref={(node) => {
          if (node) {
            node.style.setProperty("margin", "0", "important");
          } //the code above is copied from stack overflow
          //!important to override bootstrap margin
        }}
      >
        <MenuLeafItem
          backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1647229260544-E9VCKG3M6CR8P5MKRSYY/The%2BFarm_Melissa%2BButters_DSC_4219.jpg?format=750w"
          redirectUrl="/explore"
          viewHeight="35vh"
        >
          <span className={styles.display_1}>Explore</span>
          <br /> <span className={styles.subheading}>Map & Information </span>
        </MenuLeafItem>
        <div className="col-6 p-0">
          <MenuLeafItem
            backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1647228844304-ORF9IWG0J0WZXJL3WD0I/greens_from_the_farm_02.jpg?format=1500w"
            redirectUrl="/event"
            viewHeight="35vh"
          >
            Upcoming Events
          </MenuLeafItem>
        </div>
        <div className="col-6 p-0">
          <MenuLeafItem
            backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1524541674896-5R0COGPS8JV0OGGZHN17/the+farm+byron+bay+33.jpg?format=2500w"
            redirectUrl="/tenant"
            viewHeight="35vh"
          >
            Tenants
          </MenuLeafItem>
        </div>
        <div className="col-6 p-0">
          <MenuLeafItem
            backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1524538014129-ZSK8NZOWU9ELPT63CCUO/image-asset.jpeg"
            redirectUrl="/tour"
            viewHeight="35vh"
          >
            Guided <br /> Tours
          </MenuLeafItem>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-12 p-0">
              <MenuLeafItem
                backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/3337f402-8871-48dc-b639-097c9949668f/3.jpg?format=2500w"
                redirectUrl="/review"
                viewHeight="17.5vh"
              >
                Reviews
              </MenuLeafItem>
            </div>
            <div className="col-12 p-0">
              <MenuLeafItem
                backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1541546108515-0U6GE4G62F3JFNXB6VMW/IMG_3944+copy.jpg"
                redirectUrl="/about"
                viewHeight="17.5vh"
              >
                About us
              </MenuLeafItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuLeaf;
