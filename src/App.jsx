import { useEffect, useState } from 'react';
import Creature from './components/creatures/Creature';
import Equipment from './components/equipment/Equipment';
import Material from './components/materials/Material';

import { getAll, getByCategory } from './helpers/apiRequests';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState('all');
  const [maxItems, setMaxItems] = useState(10);

  const handleChangeMaxItems = (newMax) => {
    setMaxItems(newMax);
  };

  useEffect(() => {
    setIsLoading(true);
    if (active !== 'all') {
      getByCategory(active)
        .then((data) => {
          setData(data);
        })
        .then(() => setIsLoading(false));
    } else {
      getAll()
        .then((data) => {
          setData(data);
        })
        .then(() => setIsLoading(false));
    }
  }, [active]);

  return (
    <>
      <header className="w-full">
        <span className="text-2xl">Encyclopaedia</span>
        <h1 className="font-bold">Breath of the wild</h1>
      </header>
      <section className="w-full flex justify-start items-end gap-2">
        <button
          className={active === 'all' ? 'active' : ''}
          onClick={() => setActive('all')}
        >
          All
        </button>
        <button
          className={active === 'creatures' ? 'active' : ''}
          onClick={() => setActive('creatures')}
        >
          Creatures
        </button>
        <button
          className={active === 'monsters' ? 'active' : ''}
          onClick={() => setActive('monsters')}
        >
         Monsters
        </button>
        <button
          className={active === 'materials' ? 'active' : ''}
          onClick={() => setActive('materials')}
        >
          Materials
        </button>
        <button
          className={active === 'equipment' ? 'active' : ''}
          onClick={() => setActive('equipment')}
        >
          Equipment
        </button>
        <div className='flex items-center gap-2 ml-10'>
          <label htmlFor="max-items">Max items:</label>
          <input
          id='max-items'
            type="number"
            value={maxItems}
            onChange={(event) => handleChangeMaxItems(event.target.value)}
          />
        </div>
      </section>
      <section className="w-full flex justify-start items-stretch gap-6 flex-wrap">
        {isLoading
          ? 'Loading'
          : data?.map((dataItem, index) => {
              if (index >= maxItems) return;
              switch (dataItem.category) {
                case 'equipment':
                  return (
                    <Equipment
                      key={index}
                      imgSrc={dataItem.image}
                      name={dataItem.name}
                      locations={dataItem['common_locations']}
                      properties={dataItem.properties}
                    />
                  );
                case 'creatures':
                  return (
                    <Creature
                      key={index}
                      imgSrc={dataItem.image}
                      name={dataItem.name}
                      drops={dataItem.drops}
                    />
                  );
                case 'monsters':
                  return (
                    <Creature
                      key={index}
                      imgSrc={dataItem.image}
                      name={dataItem.name}
                      drops={dataItem.drops}
                    />
                  );
                case 'materials':
                  return (
                    <Material
                      key={index}
                      imgSrc={dataItem.image}
                      name={dataItem.name}
                      locations={dataItem.locations}
                      cookingEffect={dataItem['cooking_effect']}
                    />
                  );
              }
            })}
      </section>
    </>
  );
}

export default App;
