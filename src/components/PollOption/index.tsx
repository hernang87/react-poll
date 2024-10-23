import "./PollOption.css";

interface PropTypes {
  name: string;
}

export function PollOption({ name }: PropTypes) {
  return <div className="poll-option">{name}</div>;
}
