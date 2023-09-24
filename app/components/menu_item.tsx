interface MenuItemProps {
  img: string;
  title: string;
  isActive: boolean;
}

const MenuItem = ({ img, title, isActive }: MenuItemProps) => {
  return (
    <div className="flex hover:bg-blue-400 px-8 rounded-lg py-2 items-start justify-start mb-4">
      <img className="w-5 h-5 mr-4" src={img} />
      {isActive ? (
        <p className="text-xl font-bold">{title}</p>
      ) : (
        <p className="text-xl font-thin">{title}</p>
      )}
    </div>
  );
};

export default MenuItem;
