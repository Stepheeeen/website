import { CustomCard } from "./CustomCard";

export const ProfilePage = () => {
  return (
    <>
      <div className="font-semibold m-6 text-xl">Your NFTs</div>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="p-1">
            <CustomCard index={index + 1} />
          </div>
        ))}
      </div>
    </>
  );
};
