import FormLogin from "../../ui/FormLogin";
import CompleteProfileForm from "../../features/authentication/CompleteProfileForm";

function CompleteProfile() {
  return (
    <div>
      <FormLogin>
        <CompleteProfileForm />
      </FormLogin>
    </div>
  );
}

export default CompleteProfile;
