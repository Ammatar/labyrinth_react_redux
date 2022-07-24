import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { init, steps } from '../store/gameSlice';

const GameBoard = () => {
  // Visual logic
  const [playable, setPlayable] = useState(true);
  const [message, setMessage] = useState();
  //   Game logic
  const game = useSelector((state) => state.game.value);
  const start = useSelector((state) => state.game.start);
  const step = useSelector((state) => state.game.steps);
  const end = useSelector((state) => state.game.end);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(init());
    dispatch(steps());
  }, []);
  return (
    <div>
      <h2>Labirynth game</h2>
      <div className='gameBoard__container'>
        <div className='gameBoard__board__vertical_header'>
          <div>A</div>
          <div>B</div>
          <div>C</div>
        </div>
        <div className='gameBoard__board__column_header'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className='gameBoard__board__container'>
          {game.map((el, index) => {
            return (
              <div
                className='gameBoard__board__item'
                key={el + index}
                onClick={() => {
                  if (playable) {
                    if (index === end) {
                      setMessage('Win');
                      //   console.log(index + ' WIN!');
                    } else {
                      setMessage('Loose!');
                      //   console.log(index + ' Loose!');
                    }
                    setPlayable(false);
                  }
                }}
              >
                {index === start ? 'Start' : ''}
                {!playable && index === end ? 'End' : ''}
              </div>
            );
          })}
          {/* -------------testing purpose only----------------- */}
          {/* {console.log('start: ', start)}
          {console.log('end: ', end)}
          {console.log('steps: ', step)} */}
          {/* -------------testing purpose only----------------- */}
        </div>
      </div>
      {message ? <div>{message}</div> : null}
      <div className='steps__container'>
        {step && step !== []
          ? step.map((el, index) => {
              return (
                <div className='steps__item' key={index + '' + el}>
                  {el}
                </div>
              );
            })
          : null}
      </div>
      <div className='controls__container'>
        <button
          onClick={() => {
            if (!playable) {
              dispatch(init());
              dispatch(steps());
              setPlayable(true);
              setMessage();
            }
          }}
          disabled={playable}
        >
          New game
        </button>
      </div>
    </div>
  );
};

export default memo(GameBoard);
