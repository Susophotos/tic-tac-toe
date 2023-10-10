import './ScoreBoard.css';

const ScoreBoard = ({scoreX, scoreO}) => {

    return (
        <div className="score-board">
        <div>{scoreX}</div>
        <div>{scoreO}</div>
    </div>
    )
    
}

export default ScoreBoard; 
//aqui otra forma de llamar a la funcion sin necesidad de escribir el retunr:

/* import './ScoreBoard.css';

const ScoreBoard = ({scoreX, scoreO}) => (
    <div className="score-board">
        <div>{scoreX}</div>
        <div>{scoreO}</div>
    </div>
)

export default ScoreBoard; */