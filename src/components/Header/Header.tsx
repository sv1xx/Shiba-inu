const Header = () => {
  return (
    <>
      <header className="pt-4 relative">
        <img
          className="absolute -z-10 top-[25px] w-full"
          src="/src/assets/images/bdShiba.svg"
          alt="background"
        />
        <div className="max-w-[1170px] w-100 m-auto">
          <div className=" flex justify-between items-center">
            <div className="">
              <a href="#">
                <img
                  className="w-[133px]"
                  src="/src/assets/images/logo.svg"
                  alt="logo"
                />
              </a>
            </div>
            <nav>
              <ul className=" flex-row flex gap-[25px]">
                <li className="text-slate-800 text-lg font-semibold">
                  <a href="#instruction">Giveaway</a>
                </li>
                <li className="text-slate-800 text-lg font-semibold">
                  <a href="#about">About</a>
                </li>
                <li className="text-slate-800 text-lg font-semibold">
                  <a href="#сalculator">Calculator</a>
                </li>
                <li className="text-slate-800 text-lg font-semibold">
                  <a href="#instruction">Instruction</a>
                </li>
                <li className="text-slate-800 text-lg font-semibold">
                  <a href="#transactions">Transactions</a>
                </li>
              </ul>
            </nav>
            <div>
              <button className="transition duration-200 items-center gap-[5px] text-center text-amber-500 text-lg font-semibold bg-orange-50 rounded-[98px] px-[30px] py-3 flex">
                Participate
                <img src="/src/assets/images/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
