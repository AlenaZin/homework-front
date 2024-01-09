
type AddressType = {
  street: string
  city: string
}

type UserType ={
  id: number
  name: string
  age: number
  address: AddressType
}

type CurrentUserPropsType = {
  user: UserType // пропиши типизацию
};

export const CurrentUser = (props: CurrentUserPropsType) => {
  return (
    <li id={`hw02-user-${props.user.id}`}>
      <strong>{props.user.name}</strong> (Age: {props.user.age})
      <strong> Address: </strong>
      {props.user.address.street}, {props.user.address.city}
    </li>
  );
};
