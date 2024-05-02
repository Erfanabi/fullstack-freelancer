import { useNavigate } from "react-router-dom";

export default function useMoveBack() {
  const navigate = useNavigate();

  return () => navigate(-1);
}

//   function goBack() {
//     navigate(-1);
//   }
//   const { goBack } = useMoveBack();
// return {goBack}
