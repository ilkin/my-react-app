import React, { useState } from 'react';
import { PeopleList } from '../PeopleList';


const people = [
    {
      name: "Adam",
      age: 10,
      hairColor: "brown"
    },
    {
      name: "Aisha",
      age: 10,
      hairColor: "black"
    },
    {
      name: "Nigar",
      age: 7,
      hairColor: "black"
    },
    {
      name: "Gulsum",
      age: 1,
      hairColor: "brown"
    }
  ]

export const PeopleListPage = () => (
    <>
        <h1>The People List Page</h1>
        <PeopleList people={people} />
    </>
  )
