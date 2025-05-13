import { useEffect, useState } from 'react';
import Creature from './components/creatures/Creature';
import Equipment from './components/equipment/Equipment';
import Material from './components/materials/Material';
import { getByCategory } from './helpers/apiRequests';

function App() {
  const [allElements, setAllElements] = useState([]);
  const [creatures, setCreatures] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    getByCategory('equipment').then(data => {
      setEquipment(data)
    }) 
  }, []);

  return (
    <>
      <header className="w-full">
        <span className="text-2xl">Encyclopaedia</span>
        <h1 className="font-bold">Breath of the wild</h1>
      </header>
      <section className="w-full flex justify-start gap-2">
        <button className="active" onClick={() => setActive('all')}>All</button>
        <button onClick={() => setActive('creatures')}>Creatures</button>
        <button onClick={() => setActive('materials')}>Materials</button>
        <button onClick={() => setActive('equipment')}>Equipment</button>
      </section>
      <section className="w-full flex justify-start items-start gap-6 flex-wrap">
        {equipment?.map((equipment, index) => {
          return (
            <Equipment
              key={index}
              imgSrc={equipment.image}
              name={equipment.name}
              locations={equipment['common_locations']}
              properties={equipment.properties}
            />
          );
        })}
        {/* <Equipment
          imgSrc={
            'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/wooden_shield/image'
          }
          name={'wooden shield'}
          locations={['Hyrule Field', 'East Necluda']}
          properties={{
            attack: 0,
            defense: 2,
          }}
        /> */}
        {/* <Creature
          imgSrc={
            'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/moblin/image'
          }
          name={'Moblin'}
          drops={['Moblin Horn', 'Moblin Fang']}
        /> */}
        {/* <Material
          imgSrc={
            'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/voltfruit/image'
          }
          name={'voltfruit'}
          locations={['Gerudo Desert', 'Gerudo Highlands']}
          cookingEffect={'shock resistance'}
        /> */}
      </section>
    </>
  );
}

export default App;
