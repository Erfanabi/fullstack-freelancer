import toPersionNumberWithComma from "../utils/toPersionNumberWithComma";

const colors = {
  primary: "bg-primary-100 text-primary-700",
  yellow: "bg-yellow-100 text-yellow-700",
  green: "bg-green-100 text-green-700",
};

function Stats({ icon, value = 0, title, color }) {
  console.log(value);
  return (
    <div>
      <div className="stat-card !bg-secondary-0 shadow-lg">
        <div className={`bac-icon ${colors[color]}`}>{icon}</div>
        <div className="stat-content">
          <p className="font-bold text-secondary-500 text-lg self-center">
            {title}
          </p>
          <span className="text-3xl font-bold text-secondary-900">
            {toPersionNumberWithComma(value)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Stats;
