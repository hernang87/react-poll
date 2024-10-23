import { PollOption } from "../PollOption";
import { Option } from '../../reducers/poll-options';

import "./Poll.css";

interface PropTypes {
  title: string;
  options: Option[];
}

export function Poll({ title, options }: PropTypes) {
  const pollOptions = options.map((option) => (
    <PollOption key={option.name} option={option} />
  ));
  return (
    <div>
      <div className="title">{title}</div>
      <div>{pollOptions}</div>
    </div>
  );
}
