import Jumbotron from "../components/ui/Jumbotron";
import TenantBox from "../components/ui/TenantBox";
import Navbar from "../components/navbar/Navbar";
function ExplorePage() {
  return (
    <>
      <Navbar />

      <Jumbotron
        title="Tenants"
        height="20vh"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1524541674896-5R0COGPS8JV0OGGZHN17/the+farm+byron+bay+33.jpg?format=2500w"
      />
      <div className="container mt-4 mb-4">
        <TenantBox
          tenantName="Three Blue Ducks"
          tenantLogo="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1524542591681-4UA4D6QJ4FMCVF1G7E1X/TBD-primary-CMYK-black.png?format=500w"
          catagory="Restaurant"
          location="Near shop"
          url=""
          businessHours="Open today,  7am - 4pm"
          backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1524553862158-KY9XBQV76YZ8V95NMUX6/Page+7.jpg?format=2500w"
        />
        <TenantBox
          tenantName="The Bread Social"
          tenantLogo="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1524542416677-Y3CHNPVY73NFT71K0AUB/TheBreadSocial_Logo_Black_RGB.png?format=500w"
          catagory="Bakery"
          location="Near shop"
          url=""
          businessHours="Open today,  7am - 4pm"
          backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1524542249429-ANCDSSZOU7C1WFPUUZRG/TheFarm-3245.jpg?format=2500w"
        />
        <TenantBox
          tenantName="Baylato"
          tenantLogo="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1550467147806-NJCU8PMKH90Z2X0A97O0/Black+logo-01.png?format=1000w"
          catagory="Gelato & more"
          location="Near shop"
          url=""
          businessHours="Open today,  7am - 4pm"
          backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1550464721867-FS9RLGJVRHN4BCH62P2F/IMG-4962.jpg?format=2500w"
        />
      </div>
    </>
  );
}
export default ExplorePage;
