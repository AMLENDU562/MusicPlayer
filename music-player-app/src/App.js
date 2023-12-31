
import './App.css';
import MusicCard from "./MusicCard"
import {Music} from "./Music"
function App() {
  return (
    <div className=' m-0 p-0'>
    <section className="bg-[url(https://c4.wallpaperflare.com/wallpaper/288/330/391/verbal-jint-love-music-wallpaper-preview.jpg)] w-full h-96 bg-cover bg-no-repeat">
      <h1 className="text-red-200 text-center text-5xl">MyMusic</h1>
      <h1 className=" my-24 text-5xl text-purple-600 font-serif">❤️ I LOVE MUSIC 🎶</h1>
    </section>
 <header className="flex flex-wrap  items-center   ">
    
{Music.map((props)=><MusicCard title={props.name} img={props.imgURL} audio={props.audio}  />)}

      </header>
    </div>
  );
}

export default App;
