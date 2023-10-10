import './RessetButton.css'



const RessetButton = ({onClick}) => {
    const handleResset = () => {
        window.location.reload();
    };
    return (
        <button onClick={handleResset} className="resset-button">Empezar de nuevo</button>
    )
}

export default RessetButton;