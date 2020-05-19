export type ButtonProps = {
  theme: "default" | "warning";
  children?: any;
  onClick?:
    | (((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) &
        ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void))
    | undefined;
};
