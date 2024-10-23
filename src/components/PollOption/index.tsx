import { Option, vote } from "../../reducers/poll-options";
import { useAppDispatch } from "../../store";
import "./PollOption.css";

interface PropTypes {
  option: Option;
  totalVotes: number;
}

export function PollOption({ option, totalVotes }: PropTypes) {
  const dispatch = useAppDispatch();
  const addVote = () => {
    dispatch(vote({ name: option.name }));
  };

  const percentage = totalVotes === 0 ? 0 : Math.round(option.votes / totalVotes * 100);

  return (
    <>
      <button type="button" onClick={addVote} className="poll-option">
        <div
          className="bar"
          style={{ width: `${percentage}%` }}
        />
        <div className="name">{option.name}</div>
        <div className="votes">{percentage}%</div>
      </button>
    </>
  );
}
