import Section from "../components/Section";
import songs from "../data/songs";

function Home() {
  return (
    <div className="grid gap-y-8">
      <Section title="Yakınlarda Çalınanlar" more="/" items={songs} />
      <Section title="ibrahimzenk için derlendi" more="/" items={songs} />
      <Section title="Günlük müzik ihtiyacın" more="/" items={songs} />
      <Section title="Yeni bir şey keşfet" more="/" items={songs} />
    </div>
  );
}

export default Home;
