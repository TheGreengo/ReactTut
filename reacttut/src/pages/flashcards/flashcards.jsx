import '../../main.css'
import ListSelect from './listselect';
import StudyMode from './studymode';
import { React, useState } from 'react'

function getCards() {
  return [
    {
      "id": 1,
      "title": "Math",
      "cards": [
        {
          "id": 11,
          "front": "Math 1 front is a very very important card to learn and to memorize",
          "back": "Math 1 back",
          "last": 1703041016865,
          "starred": true
        },
        {
          "id": 12,
          "front": "Math 2 front",
          "back": "Math 2 back",
          "last": 1703041016865,
          "starred": false
        },
        {
          "id": 13,
          "front": "Math 3 front",
          "back": "Math 3 back",
          "last": 1703041016865,
          "starred": false
        }
      ]
    },
    {
      "id": 2,
      "title": "C++",
      "cards": [
        {
          "id": 14,
          "front": "C++ 1 front",
          "back": "C++ 1 back",
          "last": 1703041016865,
          "starred": false
        },
        {
          "id": 15,
          "front": "C++ 2 front",
          "back": "C++ 2 back",
          "last": 1703041016865,
          "starred": true
        },
        {
          "id": 16,
          "front": "C++ 3 front",
          "back": "C++ 3 back",
          "last": 1703041016865,
          "starred": false
        }
      ]
    },
    {
      "id": 3,
      "title": "English",
      "cards": [
        {
          "id": 17,
          "front": "English 1 front",
          "back": "English 1 back",
          "last": 1703041016865,
          "starred": false
        },
        {
          "id": 18,
          "front": "English 2 front",
          "back": "English 2 back",
          "last": 1703041016865,
          "starred": false
        },
        {
          "id": 19,
          "front": "English 3 front",
          "back": "English 3 back",
          "last": 1703041016865,
          "starred": true
        }
      ]
    }
  ];
}

function Flashcards() {
  const cards = getCards();

  let [isFlash, flipState] = useState(false);
  let [curr, setCurr] = useState(-1);

  const toggle = () => {
    flipState(isFlash = !isFlash);
  };

  const setDeck = (thing) => {
    setCurr(curr = thing);
  };
  
  return (
    <>
      { !isFlash ? <ListSelect decks={cards} thing={setDeck} thang={curr} theng={toggle}/> : <StudyMode deck={cards[curr]} thing={toggle} />}
    </>
  );
}
  
export default Flashcards;