import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeUserStatusApi } from "../../services/authService";

export function useChangeUserStatus() {
  const queryClient = useQueryClient();

  const { mutate: changeUserStatus, isPending: isUpdating } = useMutation({
    mutationFn: changeUserStatusApi,

    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },

    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { changeUserStatus, isUpdating };
}

// queryKey: ["project", id],
