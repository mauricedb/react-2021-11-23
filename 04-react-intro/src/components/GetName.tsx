interface Props {
  name: string;
  setName: (name: string) => void;
}
export function GetName({ name, setName }: Props) {
  return (
    <div>
      <div>{name}</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
