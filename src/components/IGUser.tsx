import { useAppDispatch } from "../hooks";
import { follow, unFollow } from "../slices/friendSlice";
import { memo } from "react";

// Partial<T> 可以把一個實例的屬性都當成可選的
type IGUserProps = {
  size?: "medium" | "small" | "avator";
  showFollow?: boolean;
  isFollowing?: boolean;
  account?: string;
  location?: string;
  avatar?: string;
  id?: number;
};

const IGUser: React.FC<IGUserProps> =  memo(({
  size = "small",
  showFollow = false,
  isFollowing = false,
  location,
  account,
  avatar,
  id,
}) => {

  const dispatch = useAppDispatch();

    function followClickHandler() {
      if (id === undefined) return;
      if (isFollowing) {
        dispatch(unFollow(id));
      } else {
        dispatch(follow(id));
      }
    }

  return (
    <div className="flex h-[70px] items-center box-border px-4">
      <div
        className={`${
          size === "small" 
            ? "w-[40px] h-[40px]"
            : size === 'medium'
            ? "w-[60px] h-[60px]"
            : "w-[24px] h-[24px]"
        } overflow-hidden rounded-full`}
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="ml-4">
        <p className="text-sm font-bold">{account}</p>
        <p className="text-xs text-gray-400">{location}</p>
      </div>
      {showFollow && (
        <p
          className={`${
            isFollowing ? "text-gray-700" : "text-blue-400"
          } ml-auto text-xs font-bold cursor-pointer`}
          onClick={followClickHandler}
        >
          {isFollowing ? "FOLLOWING" : "FOLLOW"}
        </p>
      )}
    </div>
  );
});

export default IGUser;