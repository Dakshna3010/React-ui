import React, { ReactElement } from "react";

const Description = ({
  description,
}: {
  description: string;
}): ReactElement => {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};
export default Description;
