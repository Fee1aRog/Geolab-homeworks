const cars = ['Mercedes','BMW','Audi','Porsche'];
const iterator1 = cars.keys();

for (const key of iterator1) {
    console.log(key);
  }
  //ლოგავს ელემენტების ინდექსებს და შესაბამისად მათ რაოდენობას თუ რამდენი ელემნტია მასივში.
  
const iterator2 = cars.values();

for (const value of iterator2) {
  console.log(value);
}
//ლოგავს ელემენტებს ინდექსის მიხედვით
cars.sort();
console.log(cars);
//ლოგავს ანბანის მიხედვით სორტირებულ ელემენტებს