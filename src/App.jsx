import { useState } from 'react';
import Creature from './components/creatures/Creature';
import Equipment from './components/equipment/Equipment';
import Material from './components/materials/Material';

function App() {
  const [allElements, setAllElements] = useState([])
  const [creatures, setCreatures] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [equipment, setEquipment] = useState([]);

  return (
    <>
      <header className="w-full">
        <h1>Breath of the wild Encyclopaedia</h1>
      </header>
      <section className="w-full flex justify-start gap-2">
        <button className='active'>All</button>
        <button>Creatures</button>
        <button>Materials</button>
        <button>Equipment</button>
      </section>
      <section className="w-full flex justify-start items-start gap-6 flex-wrap">
        <Creature
          imgSrc={
            'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/moblin/image'
          }
          name={'Moblin'}
          drops={['Moblin Horn', 'Moblin Fang']}
        />
        <Equipment
          imgSrc={
            'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/wooden_shield/image'
          }
          name={'wooden shield'}
          locations={['Hyrule Field', 'East Necluda']}
          properties={{
            attack: 0,
            defense: 2,
          }}
        />
        <Material
          imgSrc={
            'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/voltfruit/image'
          }
          name={'voltfruit'}
          locations={['Gerudo Desert', 'Gerudo Highlands']}
          cookingEffect={'shock resistance'}
        />
      </section>
    </>
  );
}

export default App;
