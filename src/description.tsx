import { FC, ReactElement } from "react";

type DescriptionProps = {
  value: string;
};

const Description: FC<DescriptionProps> = ({ value }): ReactElement => {
  return <p>{value}</p>;
};
export default Description;
