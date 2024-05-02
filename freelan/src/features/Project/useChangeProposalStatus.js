import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeProposalStatusApi } from "../../services/proposalService";
import { useParams } from "react-router-dom";

export function useChangeProposalStatus() {
  const { id } = useParams();

  const queryClient = useQueryClient();

  const { mutate: changeProposalStatus, isPending: isUpdating } = useMutation({
    mutationFn: changeProposalStatusApi,

    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["project", id] });
    },

    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { changeProposalStatus, isUpdating };
}

// queryKey: ["project", id],
