type PropsType = {
  isLoggedIn: boolean;
  children: any;
  loading: boolean;
};
const Protected = (props: PropsType) => {
  const { isLoggedIn, children, loading } = props;
  if (loading) return <div>Loading...</div>;
  if (!isLoggedIn) {
    return <></>;
  }
  return children;
};
export default Protected;
