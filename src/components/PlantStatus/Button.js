const Button = ( {onClick, color, text} ) => {

  return (
    <button  
        onClick={onClick} 
        style={{ backgroundColor: color}}  
        className='btn'
        >
        {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'green',
    text: 'default'
}

export default Button