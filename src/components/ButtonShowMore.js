export default function ButtonShowMore({tickets}) {
    return (
      <button className="button-show-more" type="button">
        {`Показать еще ${tickets} билетов`}
      </button>
    );
  }
  