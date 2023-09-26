"use client";
import { useState } from "react";
import BarChart from "../components/bar_chart";
import DoughnutChart from "../components/doughnut_chart";
import InfoCard from "../components/info_card";
import { LegendDoughnut } from "../components/legend";
import MenuItem from "../components/menu_item";
import { AddMemberModal } from "../components/add_member_modal";
import { AddMemberCard } from "../components/add_member_card";
import { NewUserCard } from "../components/new_user_card";
import { User } from "../model/user";

export default function DashboardScreen() {
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [user, setUser] = useState<User>();
  const [showSideBar, setShowSideBar] = useState(false);
  const handleOnClose = () => setShowAddMemberModal(false);
  const onSideBarMenuClicked = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className="flex bg-gray-100 w-full h-full md:p-2">
      {/* Side Menu */}
      <div
        className={`inset-y-0 left-0 
        ${showSideBar == true ? "hidden" : ""}  
        md:flex flex-col bg-blue-500 py-8 px-4 my-2 rounded-lg m-w-280`}
      >
        <div className="flex flex-col justify-start grow items-start">
          <h1 className="text-4xl font-bold mb-12 ml-4">Board.</h1>
          <MenuItem
            img="./dashboard_icon.png"
            title="Dashboard"
            isActive={true}
          />
          <MenuItem
            img="./transactions_icon.png"
            title="Transactions"
            isActive={false}
          />
          <MenuItem
            img="./schedule_icon.png"
            title="Schedules"
            isActive={false}
          />
          <MenuItem img="./user_icon.png" title="Users" isActive={false} />
          <MenuItem
            img="./setting_icon.png"
            title="Settings"
            isActive={false}
          />
        </div>
        <div className="flex flex-col items-start justify-end px-8">
          <a href="" className="text-md font-light">
            Help
          </a>
          <a href="" className="text-md font-light">
            Contact Us
          </a>
        </div>
      </div>

      <div className="flex flex-col md:ml-8 w-screen p-4 md:p-4 z-0 relative">
        {/* Top bar (Search and user profile) */}
        <div className="flex justify-center items-center space-between mb-4">
          <div className="flex grow">
            <button
              onClick={() => onSideBarMenuClicked()}
              className="md:hidden mr-2 hover:bg-blue-100 hover:rounded-full p-2"
            >
              <img className="w-5 h-5" src="./ic_side_menu.png" />
            </button>

            <h1 className="font-bold text-xl md:text-3xl text-black">
              Dashboard
            </h1>
          </div>
          <div className="flex justify-end items-center bg-white rounded-lg p-2">
            <input
              className="w-24 md:w-72"
              type="text"
              name="search"
              placeholder="Search..."
            />
            <img src="./ic_search.png" />
          </div>
          <button className="w-8 h-8 mx-4">
            <img src="./ic_notification.png" />
          </button>
          <div className="w-8 h-8 rounded-full">
            <img src="./ic_user.png" />
          </div>
        </div>
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <InfoCard
            imgBgColor="bg-[#7FCD93]"
            img="./ic_revenue.png"
            title="Total Revenue"
            value="$2, 129, 430"
            valuePercentage="+2.5%"
          />
          <InfoCard
            imgBgColor="bg-[#DEBF85]"
            img="./ic_transactions.png"
            title="Total Transactions"
            value="1,520"
            valuePercentage="+2.5%"
          />
          <InfoCard
            imgBgColor="bg-[#ECA4A4]"
            img="./ic_like.png"
            title="Total Likes"
            value="9,721"
            valuePercentage="+2.5%"
          />
          <InfoCard
            imgBgColor="bg-[#A9B0E5]"
            img="./ic_users.png"
            title="Total Users "
            value="9,721"
            valuePercentage="+2.5%"
          />
        </div>
        {/* Bar Chart */}
        <div className="bg-white my-4 p-8 rounded-3xl drop-shadow-md border-2 ">
          <h1 className="text-black text-xl font-black">Activities</h1>
          <div className="flex">
            <p className="text-light text-gray-500 grow">May - June 2021</p>
            <div className="grid grid-cols-2 gap-4">
              <LegendDoughnut value="" color="bg-[#EE8484]" title="Guest" />
              <LegendDoughnut value="" color="bg-[#98D89E]" title="User" />
            </div>
          </div>
          <BarChart />
        </div>
        {/* Doughnut chart and add member */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20">
          <div className="bg-white my-2 p-8 rounded-3xl drop-shadow-md border-2 grow mr-2">
            <div className="flex">
              <h1 className="text-black font-bold grow">Total Products</h1>
              <p className="text-light text-gray-500">May - June 2021</p>
            </div>
            <div className="flex mt-2">
              <div className="grow">
                <DoughnutChart />
              </div>
              <div className="grid grid-cols-1 gap-2 p-2">
                <LegendDoughnut
                  value="51%"
                  color="bg-[#98D89E]"
                  title="Basic Tees"
                />
                <LegendDoughnut
                  value="31%"
                  color="bg-[#F6DC7D]"
                  title="Custom Short Pants"
                />
                <LegendDoughnut
                  value="14%"
                  color="bg-[#EE8484]"
                  title="Super Hoodies"
                />
              </div>
            </div>
          </div>
          {user == null ? (
            <AddMemberCard
              setShowAddMemberModal={() => setShowAddMemberModal(true)}
            />
          ) : (
            <NewUserCard
              name={user.name}
              email={user.email}
              phone={user.phoneNumber}
              ytLink={user.youtubeLink}
              instaLink={user.instagramLink}
            />
          )}
        </div>
        <AddMemberModal
          setUser={setUser}
          onClose={() => handleOnClose()}
          visible={showAddMemberModal}
        />
      </div>
    </div>
  );
}
