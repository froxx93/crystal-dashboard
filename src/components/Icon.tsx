const Icon: React.FC<{
  name: string;
  type?: "filled" | "outlined" | "round" | "sharp" | "two-tone";
  title?: string;
}> = ({ name, type = "outlined", title }) => {
  return (
    <span
      className={`material-icons${
        type === "filled" ? "" : `-${type}`
      } mi-${name}`}
      {...{ title }}
    />
  );
};

export default Icon;
