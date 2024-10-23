import { PollOption } from "../PollOption";
import { Option } from "../../reducers/poll-options";

import "./Poll.css";

interface PropTypes {
  title: string;
  options: Option[];
}

export function Poll({ title, options }: PropTypes) {
  const totalVotes = options.reduce((acc, option) => acc + option.votes, 0);

  const pollOptions = options.slice().sort((a,b) => b.votes - a.votes).map((option) => (
    <PollOption key={option.name} option={option} totalVotes={totalVotes} />
  ));

  return (
    <div>
      <div className="title">{title}</div>
      <div>{pollOptions}</div>
    </div>
  );
}
