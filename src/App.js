import './App.css';
import { Card, Cardheader, Cardcontet, Cardfooter } from './Card2';
import { useEffect, useState } from 'react';
import CountryOrigin from './CountryOrigin';
import SearchText from './SearchByText';
import PriceSearch from './Search_by_price';
import Currency from './Currency';
import TotalSum from './TotalSum';


let country_list = ["cuba ", "vietnam ", "malaysia ", "costa rica"];
let total = 0;
let items = [{
  id: 'fdsfsd', img: 'https://img.rami-levy.co.il/product/132/33/medium.jpg',
  price: 10,
  name: 'hot peppers',
  vitamin: ["c", "b"],
  country: country_list[1]
}, {
  id: 'asd332', img: 'https://img.rami-levy.co.il/product/147/6344/medium.jpg',
  price: 40,
  name: 'grapes',
  vitamin: ["a", "b"],
  country: country_list[0]
}, {
  id: 'sadahg5', img: 'https://img.rami-levy.co.il/product/183/8722/medium.jpg',
  price: 35,
  name: 'peach',
  vitamin: ["c", "b"],
  country: country_list[3]
}, {
  id: 'ds21sad', img: 'https://img.rami-levy.co.il/product/134/35/medium.jpg',
  price: 8,
  name: 'banana',
  vitamin: ["b"],
  country: country_list[1]
}, {
  id: 'sdfsdf8767',
  img: 'https://previews.123rf.com/images/volff/volff1603/volff160300288/54522547-mango-cubes-and-mango-fruit-isolated-on-a-white-background-.jpg',
  price: 13,
  name: 'mango',
  vitamin: ["c"],
  country: country_list[2]
}];



function App() {
  const [list_fruit, setlist_fruit] = useState(items);
  const [spanrange, setSpanRange] = useState(35)
  const [totalloss, settotalloss] = useState(0)
  // const[filtered,setfiltered]=use



  const deleteCard = (id) => {
    setlist_fruit(list_fruit.filter(item => item.id !== id))

  }

  const filter_by_country = (target) => {
    if (target.checked == true) {
      setlist_fruit(items.filter(item => item.country == target.className))
    }
    if (target.checked == false) {
      setlist_fruit(items)

    }

  }

  const filter_by_name = (value) => {
    setlist_fruit(items.filter(item => item.name.includes(value)
    ))

  }
  const filter_by_price = (value) => {
    setlist_fruit(items.filter(item => item.price < value))
    console.log(value);
    setSpanRange(value)

  }
  const show_all = () => {
    setlist_fruit(items)

  }


  useEffect(() => {
    total = 0;
    list_fruit.forEach((v) => {
      total += v.price
    })
    settotalloss(total)
  }, [list_fruit])


  return (
    <div className="App">
      <h1>the house of pistachio</h1>
      <div className='filters'>
        <Currency >
          
        </Currency>
        <PriceSearch>
          <label id='priceSearch' htmlFor="price_search" ><input id='price_search' type="range" min="0" max="70" onChange={() => filter_by_price(window.event.target.value)}></input>
            search from { }
          </label>
          <span>{spanrange}</span>
        </PriceSearch>
        <SearchText>
          <p>
            <input className='searchByName' placeholder='search item by name' onChange={() => filter_by_name(window.event.target.value)}>
            </input>
          </p>
        </SearchText>
        <CountryOrigin><div className='origin_search'>
          {country_list.map(v => {
            return (<><p> <input id='country filter' className={v} type="checkbox" onClick={() => filter_by_country(window.event.target)}></input >
              <label htmlFor='country filter' className={v}>{v}</label>
            </p></>)
          })}
          <button onClick={() => show_all()}>all countries</button>
        </div>
        </CountryOrigin>
      </div>
      <div className="items">
        {list_fruit.map(item => {
          return (
            <div key={item.name} >
              <Card >
                <Cardheader>
                  <img src={item.img} alt='' />
                </Cardheader>
                <Cardcontet>
                  <div className="cardcontent"><h4>
                    {item.name}
                  </h4> </div>
                </Cardcontet>
                <Cardfooter>
                  <h4>{item.price}</h4>
                  <h5>{item.country}</h5>
                  <button onClick={() => deleteCard(item.id)}>remove me!!!</button>
                </Cardfooter>
              </Card>
            </div>
          )
        })}
      </div>
      <TotalSum>
        <>
          <h4>total price:
            {totalloss}
          </h4>
        </>
      </TotalSum>

    </div>
  );
}

export default App;

// this is a test
