function UserCard({ name, role }) {
  return (
    <div className="user-card">
      <b>{name}</b> — {role}
    </div>
  );
}

export default UserCard;
