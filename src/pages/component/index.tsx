import './card.scss'
type Props = any
const CardDiv = (props: Props) => {
    return (
        <div className='card'>
            {props.children}
        </div>
    )
}

export default CardDiv