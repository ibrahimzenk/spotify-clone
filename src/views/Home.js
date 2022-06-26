import Section from "../components/Section";

function Home() {
  const items = [
    {
      id: 1,
      title: "Daily Mix 1",
      description: "Rota, Ceza, Aspova ve daha fazlası",
      image: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6a31225dbfce12f277836158/1/tr/default",
      type: "Album",
    },
    {
      id: 2,
      title: "Hemsaya",
      description: "Sanatçı",
      image: "https://i.scdn.co/image/ab676161000051744aae75d907ca4b2cfcc20ec9",
      type: "Artist",
    },
    {
      id: 3,
      title: "Daily Mix 3",
      description: "Tuğkan, Kahraman Deniz, Edip Akbayram ve daha fazlası",
      image: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb69993394431255c46cf51c90/3/tr/default",
      type: "Album",
    },
    {
      id: 4,
      title: "Daily Mix 4",
      description: "Onur Can Özcan, Rope, Can Koç ve daha fazlası",
      image: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb006d614155ba29bf9fcab012/4/tr/default",
      type: "Album",
    },
    {
      id: 5,
      title: "Felsefi Podcastler",
      description: "Portal",
      image: "https://i.scdn.co/image/ab67656300005f1f50be23d30680233b094a672f",
      type: "Podcast",
    },
  ];

  return (
    <div className="grid gap-y-8">
      <Section title="Yakınlarda Çalınanlar" more="/" items={items} />
      <Section title="ibrahimzenk için derlendi" more="/" items={items} />
      <Section title="Günlük müzik ihtiyacın" more="/" items={items} />
      <Section title="Yeni bir şey keşfet" more="/" items={items} />
    </div>
  );
}

export default Home;
