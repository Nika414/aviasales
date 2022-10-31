import FilterBarHorizontal from "./FilterBarHorizontal";
import Filters from "./Filters";
import Card from "./Card";
import S7Logo from "../images/S7Logo.png";
import XiamenAirLogo from "../images/XiamenAirLogo.png";

export default function Main() {
  return (
    <div className="main">
      <Filters />
      <div className="main__container">
        <FilterBarHorizontal />
        <Card
          price="13 400 Р"
          companyLogo={S7Logo}
          destination="MOW – HKT"
          timing="10:45 – 08:00"
          timingSum="21ч 15м"
          transfer="Без пересадок"
        />
        <Card
          price="13 400 Р"
          companyLogo={XiamenAirLogo}
          destination="MOW – HKT"
          timing="10:45 – 08:00"
          timingSum="21ч 15м"
          transfer="Без пересадок"
        />
        <Card
          price="13 400 Р"
          companyLogo={S7Logo}
          destination="HKG, JNB"
          timing="10:45 – 08:00"
          timingSum="21ч 15м"
          transfer="Без пересадок"
        />
        <Card
          price="13 400 Р"
          companyLogo={XiamenAirLogo}
          destination="MOW – HKT"
          timing="10:45 – 08:00"
          timingSum="21ч 15м"
          transfer="Без пересадок"
        />
      </div>
    </div>
  );
}
