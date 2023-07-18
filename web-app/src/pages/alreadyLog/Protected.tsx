import Loader from 'components/Loader/Loader';

type PropsType = {
  isLoggedIn: boolean;
  children: any;
  loading: boolean;
};
const Protected = (props: PropsType) => {
  const { isLoggedIn, children, loading } = props;
  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (!isLoggedIn) {
    return <></>;
  }
  return children;
};
export default Protected;
