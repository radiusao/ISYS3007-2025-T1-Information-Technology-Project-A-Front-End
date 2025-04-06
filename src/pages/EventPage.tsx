import Navbar from "../components/navbar/Navbar";
import Jumbotron from "../components/ui/Jumbotron";
import EventBox from "../components/ui/EventBox";

function EventPage() {
  return (
    <>
      <Navbar />
      <Jumbotron
        title="Upcoming Events"
        height="20vh"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1647228844304-ORF9IWG0J0WZXJL3WD0I/greens_from_the_farm_02.jpg?format=1500w"
      />
      <div className="container mt-4 mb-4">
        <EventBox
          title="Easter Hunt"
          date="Sunday, 20/04"
          hourStart="12:00 PM"
          hourEnd="02:00 PM"
          emoji="😀 🧒 🏃"
          img="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1555384495092-GGYAKB182TZZKA3T1WQY/Easter+Egg+Hunt.jpg?format=1000w"
        />
        <EventBox
          title="Festival of The Farm"
          date="Saturday 03/05"
          hourStart="10:00 AM"
          hourEnd="02:30 PM"
          emoji="🔟 🥳 🐮"
          img="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/e40812e1-6227-495d-b9df-38603138ff06/Farm_Fest_EB_Banner_POSTPONED.jpg?format=2500w"
        />
      </div>
    </>
  );
}
export default EventPage;
