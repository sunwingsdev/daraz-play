import { useState } from "react";

const MenuBar = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab List */}
      <div className="flex p-2 bg-yellow-400 overflow-x-auto">
        {/* Single Tab List স্পোর্ট */}
        <div
          onClick={() => setActiveTab(0)}
          className={`w-[90px] text-center py-1 md:py-1.5 text-xs font-semibold cursor-pointer ${
            activeTab === 0
              ? "bg-[#333] text-yellow-300 rounded-md"
              : "bg-yellow-400 text-black"
          }`}
        >
          <div className="tab-content">
            <img
              className={`w-6 m-auto tab-image ${
                activeTab === 0 ? "filter-yellow" : ""
              }`}
              src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/theme-icon/active/icon-sport.svg?v=1730260800861"
              alt="Sport Icon"
            />
            <p className={`mt-1 ${activeTab === 0 ? "text-yellow-300" : ""}`}>
              স্পোর্ট
            </p>
          </div>
        </div>
        {/* Single Tab List ক্যাসিনো */}
        <div
          onClick={() => setActiveTab(1)}
          className={`w-[90px] text-center py-1 md:py-1.5 text-xs font-semibold cursor-pointer ${
            activeTab === 1
              ? "bg-[#333] text-yellow-300 rounded-md"
              : "bg-yellow-400 text-black"
          }`}
        >
          <div className="tab-content">
            <img
              className={`w-6 m-auto tab-image ${
                activeTab === 1 ? "filter-yellow" : ""
              }`}
              src="https://img.m156b.com/mb/h5/assets/images/icon-set/theme-icon/normal/icon-casino.svg?v=1730799973372"
              alt="Sport Icon"
            />
            <p
              className={`mt-1 ${
                activeTab === 1 ? "text-yellow-300" : "text-black"
              }`}
            >
              ক্যাসিনো
            </p>
          </div>
        </div>
        {/* Single Tab List স্লট */}
        <div
          onClick={() => setActiveTab(2)}
          className={`w-[90px] text-center py-1 md:py-1.5 text-xs font-semibold cursor-pointer ${
            activeTab === 2
              ? "bg-[#333] text-yellow-300 rounded-md"
              : "bg-yellow-400 text-black"
          }`}
        >
          <div className="tab-content">
            <img
              className={`w-6 m-auto tab-image ${
                activeTab === 2 ? "filter-yellow" : ""
              }`}
              src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/theme-icon/active/icon-slot.svg?v=1730799973372"
              alt="Sport Icon"
            />
            <p
              className={`mt-1 ${
                activeTab === 2 ? "text-yellow-300" : "text-black"
              }`}
            >
              স্লট
            </p>
          </div>
        </div>
        {/* Single Tab List টেবিল */}
        <div
          onClick={() => setActiveTab(3)}
          className={`w-[90px] text-center py-1 md:py-1.5 text-xs font-semibold cursor-pointer ${
            activeTab === 3
              ? "bg-[#333] text-yellow-300 rounded-md"
              : "bg-yellow-400 text-black"
          }`}
        >
          <div className="tab-content">
            <img
              className={`w-6 m-auto tab-image ${
                activeTab === 3 ? "filter-yellow" : ""
              }`}
              src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/theme-icon/active/icon-table.svg?v=1730799973372"
              alt="Sport Icon"
            />
            <p
              className={`mt-1 ${
                activeTab === 3 ? "text-yellow-300" : "text-black"
              }`}
            >
              টেবিল
            </p>
          </div>
        </div>
        {/* Single Tab List ক্রাশ */}
        <div
          onClick={() => setActiveTab(4)}
          className={`w-[90px] text-center py-1 md:py-1.5 text-xs font-semibold cursor-pointer ${
            activeTab === 4
              ? "bg-[#333] text-yellow-300 rounded-md"
              : "bg-yellow-400 text-black"
          }`}
        >
          <div className="tab-content">
            <img
              className={`w-6 m-auto tab-image ${
                activeTab === 4 ? "filter-yellow" : ""
              }`}
              src="https://img.m156b.com/mb/h5/assets/images/icon-set/theme-icon/normal/icon-crash.svg?v=1730799973372"
            />
            <p
              className={`mt-1 ${
                activeTab === 4 ? "text-yellow-300" : "text-black"
              }`}
            >
              ক্রাশ
            </p>
          </div>
        </div>
        {/* Single Tab List লটারী */}
        <div
          onClick={() => setActiveTab(5)}
          className={`w-[90px] text-center py-1 md:py-1.5 text-xs font-semibold cursor-pointer ${
            activeTab === 5
              ? "bg-[#333] text-yellow-300 rounded-md"
              : "bg-yellow-400 text-black"
          }`}
        >
          <div className="tab-content">
            <img
              className={`w-6 m-auto tab-image ${
                activeTab === 5 ? "filter-yellow" : ""
              }`}
              src="https://img.m156b.com/mb/h5/assets/images/icon-set/theme-icon/normal/icon-lottery.svg?v=1730799973372"
              alt="Sport Icon"
            />
            <p
              className={`mt-1 ${
                activeTab === 5 ? "text-yellow-300" : "text-black"
              }`}
            >
              লটারী
            </p>
          </div>
        </div>
        {/* Single Tab List ফিসিং */}
        <div
          onClick={() => setActiveTab(6)}
          className={`w-[90px] text-center py-1 md:py-1.5 text-xs font-semibold cursor-pointer ${
            activeTab === 6
              ? "bg-[#333] text-yellow-300 rounded-md"
              : "bg-yellow-400 text-black"
          }`}
        >
          <div className="tab-content">
            <img
              className={`w-6 m-auto tab-image ${
                activeTab === 6 ? "filter-yellow" : ""
              }`}
              src="https://img.m156b.com/mb/h5/assets/images/icon-set/theme-icon/normal/icon-fish.svg?v=1730799973372"
              alt="Sport Icon"
            />
            <p
              className={`mt-1 ${
                activeTab === 6 ? "text-yellow-300" : "text-black"
              }`}
            >
              ফিসিং
            </p>
          </div>
        </div>
        {/* Single Tab List আর্কেড */}
        <div
          onClick={() => setActiveTab(7)}
          className={`w-[90px] text-center py-1 md:py-1.5 text-xs font-semibold cursor-pointer ${
            activeTab === 7
              ? "bg-[#333] text-yellow-300 rounded-md"
              : "bg-yellow-400 text-black"
          }`}
        >
          <div className="tab-content">
            <img
              className={`w-6 m-auto tab-image ${
                activeTab === 7 ? "filter-yellow" : ""
              }`}
              src="https://img.m156b.com/mb/h5/assets/images/icon-set/theme-icon/normal/icon-arcade.svg?v=1730799973372"
              alt="Sport Icon"
            />
            <p
              className={`mt-1 ${
                activeTab === 7 ? "text-yellow-300" : "text-black"
              }`}
            >
              আর্কেড
            </p>
          </div>
        </div>
        {/* Single Tab List মোরগ লড়াই */}
        <div
          onClick={() => setActiveTab(8)}
          className={`w-[90px] text-center py-1 md:py-1.5 text-xs font-semibold cursor-pointer ${
            activeTab === 8
              ? "bg-[#333] text-yellow-300 rounded-md"
              : "bg-yellow-400 text-black"
          }`}
        >
          <div className="tab-content">
            <img
              className={`w-6 m-auto tab-image ${
                activeTab === 8 ? "filter-yellow" : ""
              }`}
              src="https://img.m156b.com/mb/h5/assets/images/icon-set/theme-icon/normal/icon-cockfighting.svg?v=1730799973372"
              alt="Sport Icon"
            />
            <p
              className={`mt-1 ${
                activeTab === 8 ? "text-yellow-300" : "text-black"
              }`}
            >
              মোরগ লড়াই
            </p>
          </div>
        </div>
      </div>

      {/* Tab Panels স্পোর্ট */}
      {activeTab === 0 && (
        <div className="grid grid-cols-3 md:grid-cols-8 justify-between items-center gap-2 py-2">
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/icon-set/sports-icon/icon-exchange.svg?v=1730260800861"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">CRICKET</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/icon-set/sports-icon/icon-sbov2.svg?v=1730799973372"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">SBO</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/icon-set/sports-icon/icon-sportbook.svg?v=1730799973372"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">Sportsbook</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/icon-set/sports-icon/icon-horsebook.svg?v=1730799973372"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">Horse</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-cmd.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">CMD</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-sbtech.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">BTi</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/icon-set/sports-icon/icon-kabaddi.svg"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">Kabaddi</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
        </div>
      )}

      {/* Tab Panels ক্যাসিনো */}
      {activeTab === 1 && (
        <div className="grid grid-cols-3 md:grid-cols-8 justify-between items-center gap-2 py-2">
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-all-provider.svg?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">অল প্রোভাইডার</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-evo.png?v=1730799973372&source=mcdsrc"
              />
              <p className="md:mt-1">EVO</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmsexy.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">SEXY</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmpp.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">PP</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmhotroad.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">HotRoad</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmpt.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">PT</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
        </div>
      )}

      {/* Tab Panels স্লট */}
      {activeTab === 2 && (
        <div className="grid grid-cols-3 md:grid-cols-8 justify-between items-center gap-2 py-2">
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-all-provider.svg?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">অল প্রোভাইডার</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmjili.png?v=1730799973372&source=mcdsrc"
              />
              <p className="md:mt-1">JILI</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-pg.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">PG</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmpp.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">PP</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmsg.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">SG</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-cq9.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">CQ9</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-jdb.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">JDB</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmp8.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">P8</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmfc.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">PC</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-rich88.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">RICH88</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmyesbingo.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">Yellowbat</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-netent.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">NETENT</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-worldmatch.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">WorldMatch</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-ka.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">KA</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-nextspin.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">NextSpin</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmrt.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">RT</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmpt.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">PT</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-joker.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">Joker</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-playngo.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">PNG</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmfastspin.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">FASTSPIN</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
        </div>
      )}

      {/* Tab Panels টেবিল */}
      {activeTab === 3 && (
        <div className="grid grid-cols-3 md:grid-cols-8 justify-between items-center gap-2 py-2">
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-all-provider.svg?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">অল প্রোভাইডার</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-jdbaspribe.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">SPRIBE</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-monopoly.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">MONOPOLY</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmjili.png?v=1730799973372&source=mcdsrc"
              />
              <p className="md:mt-1">JILI</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>

          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-worldmatch.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">WorldMatch</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-pg.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">PG</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmkm.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">KM</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-ka.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">KA</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-playngo.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">PNG</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-rich88.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">RICH88</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
        </div>
      )}

      {/* Tab Panels ক্রাশ */}
      {activeTab === 4 && (
        <div className="grid grid-cols-3 md:grid-cols-8 justify-between items-center gap-2 py-2">
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-all-provider.svg?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">অল প্রোভাইডার</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-jdbaspribe.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">SPRIBE</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmkm.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">KM</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmjili.png?v=1730799973372&source=mcdsrc"
              />
              <p className="md:mt-1">JILI</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmpp.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">PP</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
        </div>
      )}

      {/* Tab Panels */}
      {activeTab === 5 && (
        <div className="grid grid-cols-3 md:grid-cols-8 justify-between items-center gap-2 py-2">
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-all-provider.svg?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">অল প্রোভাইডার</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-monopoly.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">MONOPOLY</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmjili.png?v=1730799973372&source=mcdsrc"
              />
              <p className="md:mt-1">JILI</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-saba.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">SABA</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-joker.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">Joker</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmkm.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">KM</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmyesbingo.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">Yellowbat</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
        </div>
      )}

      {/* Tab Panels */}
      {activeTab === 6 && (
        <div className="grid grid-cols-3 md:grid-cols-8 justify-between items-center gap-2 py-2">
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-all-provider.svg?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">অল প্রোভাইডার</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-jdbaspribe.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">SPRIBE</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-monopoly.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">MONOPOLY</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmjili.png?v=1730799973372&source=mcdsrc"
              />
              <p className="md:mt-1">JILI</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-worldmatch.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">WorldMatch</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-pg.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">PG</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmkm.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">KM</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-ka.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">KA</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-playngo.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">PNG</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-rich88.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">RICH88</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
        </div>
      )}

      {/* Tab Panels */}
      {activeTab === 7 && (
        <div className="grid grid-cols-3 md:grid-cols-8 justify-between items-center gap-2 py-2">
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-all-provider.svg?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">অল প্রোভাইডার</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-monopoly.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">MONOPOLY</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmjili.png?v=1730799973372&source=mcdsrc"
              />
              <p className="md:mt-1">JILI</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-saba.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">SABA</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-joker.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">Joker</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmkm.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">KM</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/brand/white/provider-awcmyesbingo.png?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">Yellowbat</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
        </div>
      )}

      {/* Tab Panels */}
      {activeTab === 8 && (
        <div className="grid grid-cols-3 md:grid-cols-8 justify-between items-center gap-2 py-2">
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-all-provider.svg?v=1730799973372&source=mcdsrc"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">অল প্রোভাইডার</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
          {/* Single Card */}
          <div className="w-full">
            <div className="py-7 md:py-8 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
