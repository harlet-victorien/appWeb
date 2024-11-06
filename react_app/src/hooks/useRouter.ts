export const useRouter = () => {
  const navigate = useNavigate();

  const push = (path: string) => {
    navigate(path);
  };

  return { push };
};