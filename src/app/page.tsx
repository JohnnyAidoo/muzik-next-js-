import MusicCard from "./components/card";
import SideBar from "./components/sidebar";

function Home() {
  return (
    <>
      <section className="p-10 float-right right-0">
        <h1 className="text-ctr">Artist</h1>
        <h1 className="text-white text-4xl font-bold">Popular</h1>
        <div className="grid grid-cols-3 lg:grid-cols-4 float-right">
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
        </div>
      </section>
    </>
  );
}

export default Home;
