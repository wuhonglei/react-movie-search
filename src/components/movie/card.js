function Card({data}) {
    const {Title, Poster, Year} = data;
    return (
        <figure>
            <figcaption className={' font-bold'}>{Title}</figcaption>
            <img width="200" className={' mt-4 mb-2'} src={Poster} alt="" />
            <footer>({Year})</footer>
        </figure>
    );
}

export default Card;