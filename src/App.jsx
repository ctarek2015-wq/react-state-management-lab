import { useState } from "react";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);
  const [isEnoughMoney, setIsEnoughMoney] = useState(true);
  let totalStrength = team.length
    ? team.reduce(
        (accumulator, fighter) => (accumulator += fighter.strength),
        0,
      )
    : 0;
  let totalAgility = team.length
    ? team.reduce((accumulator, fighter) => (accumulator += fighter.agility), 0)
    : 0;

  const handleAddFighter = (fighter) => {
    if (fighter.price <= money) {
      setTeam([...team, fighter]);
      setZombieFighters(
        zombieFighters.filter((member) => member.id !== fighter.id),
      );
      setMoney(money - fighter.price);
      setIsEnoughMoney(true);
    } else {
      setIsEnoughMoney(false);
      console.log("Not enough money");
    }
  };

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((member) => member.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
    setIsEnoughMoney(true);
  };

  return (
    <>
      <h1>Money: {money}</h1>
      {!isEnoughMoney && <h3>"Not enough money"</h3>}
      <h1>Zombie Fighters:</h1>
      <ul>
        {zombieFighters.map((fighter) => {
          return (
            <li key={fighter.id}>
              Name: {fighter.name}, Price: {fighter.price}, Strength:
              {fighter.strength}, Agility: {fighter.agility}
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          );
        })}
      </ul>
      <h1>Your Team:</h1>
      <h3>Total Strenght: {totalStrength}</h3>
      <h3>Total Agility: {totalAgility}</h3>
      {!team.length ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((fighter) => {
            return (
              <li key={fighter.id}>
                Name: {fighter.name}, Price: {fighter.price}, Strength:
                {fighter.strength}, Agility: {fighter.agility}
                <button onClick={() => handleRemoveFighter(fighter)}>
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default App;
