import IndexCss from './index.module.css';

function search({value, onChange, onClick}) {
  return (
    <section className={'mt-2'}>
      <div>
        <input className={'w-48'} type="text" value={value} onChange={onChange} />
        <button className={'ml-1'} onClick={onClick}>SEARCH</button>
      </div>
      <div className={'mt-4'}>
        Sharing a few of our favorite movies
      </div>
    </section>
  );
}

export default search;