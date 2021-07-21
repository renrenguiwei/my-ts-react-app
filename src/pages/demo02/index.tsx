import { observable, autorun } from './mobx';

function Index() {
  const store = observable({ a: 1, b: { c: 1 } });
  console.log('store', store)
  autorun(() => {
    if (store.a === 2) {
      console.log(store.b.c);
    }
  });
  store.a = 2
  store.b.c = 5;
  store.b.c = 6;

  return <div>Demo02</div>
}

export default Index