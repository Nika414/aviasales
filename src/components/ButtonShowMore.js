export default function ButtonShowMore({tickets, onClick}) {
    return (
      <button className="button-show-more" onClick={onClick} type="button">
        {`Показать еще ${tickets} билетов`}
      </button>
    );
  }
  