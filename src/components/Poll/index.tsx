import { PollOption } from "../PollOption";

import "./Poll.css";

interface PropTypes {
  title: string;
  values: string[];
}

export function Poll({ title, values }: PropTypes) {
  const options = values.map((value) => (
    <PollOption key={value} name={value} />
  ));
  return (
    <div>
      <div className="title">{title}</div>
      <div>{options}</div>
    </div>
  );
}
