import Card from './card.js';
import IndexCss from './index.module.css';

function List({data}) {
  const Cards = data.map(item => <Card key={item.imdbID} data={item} />);
  return (
    <main className={`${IndexCss.container} mt-8`}>
      {Cards}
    </main>
  );
}

export default List;