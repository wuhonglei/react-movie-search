import IndexCss from './index.module.css';

function Card({data}) {
    const {Title, Poster, Year} = data;
    return (
        <figure style={{'margin': '0'}}>
            <figcaption className={'ellipsis font-bold'}>{Title}</figcaption>
            <img width="200" className={`${IndexCss.poster} mt-4 mb-2`} src={Poster} alt="" />
            <footer>({Year})</footer>
        </figure>
    );
}

export default Card;