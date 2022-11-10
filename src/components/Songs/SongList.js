import Song from "./Song";

const SongList = () => {
    return (
        <div>
            <h1>Your favourite songs are:</h1>
            <ul>
                <Song title="Blank Space" artist="Taylor Swift" />
                <Song title="Believer" artist="Imagine Dragons" />
            </ul>
        </div>
    ); 
}

export default SongList;