// ./pages/NotFound.tsx
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-24">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <button className="underline" onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};
