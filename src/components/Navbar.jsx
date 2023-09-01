const Navbar = () => {
  return (
    <nav className="bg-indigo-500 py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-xl">
          <a href="/">ShopByShop</a>
        </div>
        <ul className="flex space-x-7 items-center">
          <li>
            <a className="text-white hover:text-gray-400" href="/why">
              Why?
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-400" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-400" href="/OwnTheShop">
              Build Your Own Shop
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-400" href="/login">
              Log in
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-gray-400 border px-2 py-1 rounded-md"
              href="/signup"
            >
              Sign up
            </a>
          </li>
          <li>
            <strong className="text-white">|</strong>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              fill="#ffffff"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" />
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
