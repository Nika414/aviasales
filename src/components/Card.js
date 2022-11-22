export default function Card({
  price,
  companyLogo,
  destination,
  timeStart,
  timeEnd,
  timingSum,
  transfer,
}) {
  return (
    <div className="card__container">
        <div className="card__flight-info-container">
          <div className="card__price">{price}</div>
          <img
            className="card__company-logo"
            src={companyLogo}
            alt="Лого компании"
          />
        </div>
        <div className="card__flight-info-container">
          <div className="card__flight-details">
            <div className="card__span_type_transparent">{destination}</div>
            <div className="card__span_type_bright">{timeStart}-{timeEnd}</div>
          </div>
          <div className="card__flight-details">
            <div className="card__span_type_transparent">В ПУТИ</div>
            <div className="card__span_type_bright">{timingSum}</div>
          </div>
          <div className="card__flight-details">
            <div className="card__span_type_transparent">{transfer}</div>
          </div>
        </div>
      </div>
  );
}
