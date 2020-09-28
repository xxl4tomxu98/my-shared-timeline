import React from 'react';
import Clock from './Clock';
import Folder from './Folder';
import Weather from './Weather'
import Auto from './Auto';

const folders = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second folder here'},
  {title: 'three', content: 'Third folder here'}
];


const names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];



function Root() {
  return (
    <div>
      <Clock />
      <Folder folders={folders} />
      <Weather />
      <Auto names={names}/>
    </div>
  );
}

export default Root;
