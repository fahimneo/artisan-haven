import UseAuth from "../../Hoocks/UseAuth";

const ProfileUpdate = () => {
  const { user } = UseAuth();
  return (
    <div>
      <h1>{user?.displayName}</h1>
      <img className="w-full" src={user?.photoURL} alt="" />
    </div>
  );
};

export default ProfileUpdate;
