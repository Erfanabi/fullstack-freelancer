import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

function useEditProject() {
  const queryClient = useQueryClient();

  const { mutate: editProject, isPending: isEditing } = useMutation({
    mutationFn: editProjectApi,

    onSuccess: (data) => {
      toast.success("پروژه با موفقیت ویرایش شد");
      queryClient.invalidateQueries({ queryKey: ["owner-project"] });
    },

    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { editProject, isEditing };
}

export default useEditProject;
