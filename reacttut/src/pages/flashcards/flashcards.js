import '../../main.css'
import ListSelect from './listselect';
import StudyMode from './studymode';
import { React, useState } from 'react'

function getCards() {
  return [
    {
      "title": "Math",
      "cards": [
        {
          "front": "Math 1 front",
          "back": "Math 1 back",
          "last": 1703041016865,
          "starred": false
        },
        {
          "front": "Math 2 front",
          "back": "Math 2 back",
          "last": 1703041016865,
          "starred": false
        },
        {
          "front": "Math 3 front",
          "back": "Math 3 back",
          "last": 1703041016865,
          "starred": false
        }
      ]
    },
    {
      "title": "C++",
      "cards": [
        {
          "front": "C++ 1 front",
          "back": "C++ 1 back",
          "last": 1703041016865,
          "starred": false
        },
        {
          "front": "C++ 2 front",
          "back": "C++ 2 back",
          "last": 1703041016865,
          "starred": false
        },
        {
          "front": "C++ 3 front",
          "back": "C++ 3 back",
          "last": 1703041016865,
          "starred": false
        }
      ]
    },
    {
      "title": "English",
      "cards": [
        {
          "front": "English 1 front",
          "back": "English 1 back",
          "last": 1703041016865,
          "starred": false
        },
        {
          "front": "English 2 front",
          "back": "English 2 back",
          "last": 1703041016865,
          "starred": false
        },
        {
          "front": "English 3 front",
          "back": "English 3 back",
          "last": 1703041016865,
          "starred": false
        }
      ]
    }
  ];
}

function Flashcards() {
  const cards = getCards();

  const [isFlash, flipState] = useState(false);

  const toggle = (thing) => {
    console.log(thing);
    flipState(isFlash => !isFlash);
  };
  
  return (
    <>
      <div className='lefty-righty'></div>
      {isFlash ? <ListSelect decks={cards} /> : <StudyMode deck={cards[0]} />}
      {
        cards.map(
          card => (
            (<button key={card.title} onClick={() => {toggle("oi vey");}}>{card.title}</button>)
          )
        )
      }
    </>
  );
}
  
export default Flashcards;