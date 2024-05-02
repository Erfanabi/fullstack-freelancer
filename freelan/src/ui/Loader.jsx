import { ThreeDots } from "react-loader-spinner";

function Loader({
  width = "75",
  height = "40",
  color = "rgb(var(--color-primary-900))",
}) {
  return (
    <div>
      <ThreeDots
        height={height}
        width={width}
        radius={9}
        color={color}
        wrapperStyle={{ display: "flex", justifyContent: "center" }}
        visible={true}
      />
    </div>
  );
}

export default Loader;
