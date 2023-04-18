type AC<T = object> = React.FC<
  T & {
    margin?: string;
    position?: string;
  }
>;

export default AC;
