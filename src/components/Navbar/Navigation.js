import { Icon } from "../../Icons";
import { createBrowserHistory } from "history";

function Navigation() {
  const history = createBrowserHistory();

  return (
    <nav className="flex items-center gap-x-4">
      <button onClick={() => history.back()} className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
        <Icon name="prev" size={22} />
      </button>
      <button onClick={() => history.forward()} className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
        <Icon name="next" size={22} />
      </button>
    </nav>
  );
}

export default Navigation;
