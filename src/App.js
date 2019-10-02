import React from 'react';
import List from './composition/List';
import store from './store';


function App() {
  const lists = store.lists.map(list => {
    const cards = list.cardIds.map(card => {
      return store.allCards[card]
    })
    return (
      <List cards={cards} header={list.header} />
    )
  })

  return (
    <main class="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        {lists}
      </div>
    </main>


  );
}

export default App;
