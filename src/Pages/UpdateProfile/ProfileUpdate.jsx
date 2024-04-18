import UseAuth from "../../Hoocks/UseAuth";

const ProfileUpdate = () => {
  const { user } = UseAuth();
  return (
    <div className=" mt-28">
      <h1>{user?.displayName}</h1>
      <img className="w-full" src={user?.photoURL} alt="" />
    </div>
  );
};

export default ProfileUpdate;
