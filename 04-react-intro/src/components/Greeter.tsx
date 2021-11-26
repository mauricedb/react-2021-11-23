interface Props {
  name?: string;
  city: string | null;
}

export function Greeter({ name, city }: Props) {
  return (
    <div id="hello">
      Hello {name} {name ? 'true' : 'false'} in {city}
    </div>
  );
}

// export default Greeter;
