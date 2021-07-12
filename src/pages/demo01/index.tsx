import { observable, autorun } from './mobx';

function Index() {
  const store = observable({ a: 1, b: 2 });

  autorun(() => {
    console.log(store.a);
  });

  store.a = 5;
  store.a = 6;

  return <div>Demo01</div>
}

export default Index