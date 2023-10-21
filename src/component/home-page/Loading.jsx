import { ClipLoader } from 'react-spinners';

const Loading = ({ loading, error, children }) => {
  if (loading) {
    return (
      <div className="loading">
        <ClipLoader color="#00BFFF" loading={true} size={100} />
      </div>
    );
  }
  if (error) {
    return <p>{error.message}</p>; 
  }
  return children;
};

export default Loading;
