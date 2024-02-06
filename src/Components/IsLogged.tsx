export interface UserProps {
  name?: string;
  age?: number;
  isLoggedin?: boolean;
}

export function IsLogged({ name, age, isLoggedin }: UserProps) {
  return (
    <div>
      {isLoggedin ? (
        <div>
          The user is {name} and the age is {age}
        </div>
      ) : (
        <h1>The user is unknown . Please Log in</h1>
      )}
    </div>
  );
}
