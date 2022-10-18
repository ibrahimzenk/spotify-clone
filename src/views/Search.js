import categories from "../data/categories";
import favoriteCategories from "../data/favorite-categories";
import Title from "../components/Title";
import ScrollContainer from "react-indiana-drag-scroll";
import { useEffect, useRef, useState } from "react";
import { Icon } from "../Icons";
import Category from "../components/CategoryItem";
import WideCategory from "../components/WideCategoryItem";

function Search() {
  const favoritesRef = useRef();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    const refFavorites = favoritesRef.current;

    if (refFavorites) {
      const scrollHandle = () => {
        const isEnd = Math.round(refFavorites.scrollLeft + refFavorites.offsetWidth) === refFavorites.scrollWidth;
        const isBegin = refFavorites.scrollLeft === 0;
        setPrev(!isBegin);
        setNext(!isEnd);
      };

      scrollHandle();
      refFavorites.addEventListener("scroll", scrollHandle);

      return () => {
        refFavorites?.removeEventListener("scroll", scrollHandle);
      };
    }
  }, [favoritesRef]);

  const slideFavoritesPrev = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 200;
  };

  const slideFavoritesNext = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 200;
  };

  return (
    <>
      <section className="mb-8">
        <Title title={"En çok dinlediğin türler"} />

        <div className="relative">
          {prev && (
            <button
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center absolute top-1/2 -translate-y-1/2 -left-6 z-10 hover:scale-[1.06]"
              onClick={slideFavoritesPrev}
            >
              <Icon size={24} name="prev" />
            </button>
          )}

          {next && (
            <button
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center absolute top-1/2 -translate-y-1/2 -right-6 z-10 hover:scale-[1.06]"
              onClick={slideFavoritesNext}
            >
              <Icon size={24} name="next" />
            </button>
          )}

          <ScrollContainer innerRef={favoritesRef} className="flex overflow-x gap-x-6">
            {favoriteCategories.map((category) => (
              <WideCategory category={category} key={category.id} />
            ))}
          </ScrollContainer>
        </div>
      </section>

      <section>
        <Title title={"Hepsine göz at"} />

        <div className="grid grid-cols-5 gap-6">
          {categories.map((category) => (
            <Category category={category} key={category.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Search;
