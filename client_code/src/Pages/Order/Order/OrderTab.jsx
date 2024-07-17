import Card from "../../Shared/Card/Card";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default OrderTab;
