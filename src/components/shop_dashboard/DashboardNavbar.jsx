const DashboardNavbar = () => {
  return (
    <nav className="bg-blue-900 py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-xl">DASHBOARD</div>
        <ul className="flex space-x-7 items-center">
          <li>
            <a
              className="text-white hover:text-gray-400 border px-2 py-1 rounded-md"
              href="/"
            >
              Log out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
