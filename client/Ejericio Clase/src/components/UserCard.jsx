// UserCard.jsx
import "../components/css/UserCard.css";

const UserCard = ({ name, email, age, isOnline }) => {
    return (
        <div className="user-card">
        <div className="user-header">
            <span className={isOnline ? "online" : "offline"}>●</span>
            <h3>{name}</h3>
        </div>
        <p>Email: {email}</p>
        <p>Edad: {age}</p>
        </div>
    );
};

export default UserCard;
