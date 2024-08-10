interface Porps {
  id: number;
  uid: string;
  created_at: Date;
  name: string;
}

export default function UserCard(props: Porps) {
  const { id, uid, created_at, name } = props;

  return (
    <div>
      <p>{id}</p>
      <p>{uid}</p>
      <p>{name}</p>
      <p>{created_at.toDateString()}</p>
    </div>
  );
}
