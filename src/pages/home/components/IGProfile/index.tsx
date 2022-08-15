import IGUser from "components/IGUser";
import { useAppSelector } from "../../../../hooks";

const IGProfile: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends.slice(0, 4);

  return (
    <div className="box-border p-2 mt-8 ml-8 shadow-lg">
      <IGUser
        account="bruce_fe"
        location="bruce_IG頁面仿刻 ft.ts,react"
        avatar="/images/cat.jpeg"
        size="medium"
      />
      <p className="mx-4 mt-4 mb-3 text-sm font-bold text-gray-400">
        You are following
      </p>
      {friends.map((item) => {
        const { id, account, avatar, isFollowing, location } = item;
        return (
          <div className="-mt-3" key={id}>
            <IGUser
              id={id}
              account={account}
              avatar={avatar}
              location={location}
              isFollowing={isFollowing}
              showFollow
            />
          </div>
        );
      })}
    </div>
  );
};

export default IGProfile;