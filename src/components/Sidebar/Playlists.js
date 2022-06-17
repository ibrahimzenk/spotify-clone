function Playlists() {
  return (
    <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-10 overflow-auto">
      <ul>
        {new Array(30).fill(
          <li>
            <a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
              36. Çalma Listem
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Playlists;
