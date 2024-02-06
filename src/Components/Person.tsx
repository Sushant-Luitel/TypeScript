interface Props {
  name: string;
  age: number;
  email?: string;
}

export function Person({ name, age, email }: Props) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h1>Email:{email}</h1>
    </div>
  );
}
