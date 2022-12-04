export default function HorizontalFilterButton({onClick, activeTub, text, type}) {
 

    return(
        <button type='button'
        onClick={onClick}
        className={`filter-bar-horizontal__button filter-bar-horizontal__button_type_${type} ${
          activeTub === type ? 'filter-bar-horizontal__button_active' : ''
        }`}
      >
        {text}
      </button>
    )
}