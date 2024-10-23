import { Option, vote } from "../../reducers/poll-options";
import { useAppDispatch } from "../../store";
import "./PollOption.css";

interface PropTypes {
  option: Option
}

export function PollOption({ option }: PropTypes) {
  const dispatch = useAppDispatch();
  const addVote = () => {
    dispatch(vote({ name: option.name }));
  };

  return (
    <button type="button" onClick={addVote} className="poll-option">
      <div className="name">{option.name}</div>
      <div className="votes">{option.votes}</div>
    </button>
  );
}
