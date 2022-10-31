export default function FilterBarVertical({ text, children }) {
  return (
    <div className="filter-bar-vertical__container">
      <h3 className="filter-bar-vertical__title">{text}</h3>
      <form className="filter-bar-vertical__form">{children}</form>
    </div>
  );
}
