import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./OrderStyle.css";
import Card from "../../Shared/Card/Card";
import { useMenu } from "../../../hooks/useMenu";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

  const drinks = menu.filter((item) => item.category === "drinks");
  const soups = menu.filter((item) => item.category === "soup");
  const desserets = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Cover
        img={orderCover}
        title={"Order Food"}
        subTitle={"Would you like to try a dish?"}
      />
      <div className="flex justify-center">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="bg-gray-500 p-2 rounded flex justify-center space-x-8 ">
            <Tab className="px-4 py-2 rounded cursor-pointer">salad</Tab>
            <Tab className="px-4 py-2 rounded cursor-pointer">pizza</Tab>
            <Tab className="px-4 py-2 rounded cursor-pointer">soups</Tab>
            <Tab className="px-4 py-2 rounded cursor-pointer">Desserts</Tab>
            <Tab className="px-4 py-2 rounded cursor-pointer">Drinks</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10">
              {salad.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-3 gap-10">
              {pizza.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-3 gap-10">
              {soups.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10">
              {desserets.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10">
              {drinks.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
