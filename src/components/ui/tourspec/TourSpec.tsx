import TourSpecList from "./TourSpecList";

interface TourSpecProp {
  tourType: string;
  tourLength: string;
  tourTime: string;
  tourRating: string;
}

function TourSpec({
  tourType,
  tourLength,
  tourTime,
  tourRating,
}: TourSpecProp) {
  return (
    <>
      <h1 className={`mt-3`}>Overview</h1>
      <TourSpecList
        title="Type"
        icon="bi-person-walking"
        specDetail={tourType}
      />
      <TourSpecList title="Length" icon="bi-pin-map" specDetail={tourLength} />
      <TourSpecList title="Time" icon="bi-clock" specDetail={tourTime} />
      <TourSpecList
        title="Rating"
        icon="bi-emoji-laughing"
        specDetail={`${tourRating}/5`}
      />
    </>
  );
}
export default TourSpec;
