import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import useChangeProjectStatus from "./useChangeProjectStatus";
import Loader from "../../ui/Loader";

function ToggleProjectStatus({ project }) {
  const [enabled, setEnabled] = useState(
    project.status == "OPEN" ? true : false
  );

  const { changeProjectStatus, isUpdating } = useChangeProjectStatus();

  function handleSwitch() {
    setEnabled(!enabled);

    if (!enabled) {
      changeProjectStatus({ data: { status: "OPEN" }, id: project._id });
    } else {
      changeProjectStatus({ data: { status: "CLOSED" }, id: project._id });
    }
  }

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loader height={20} width={50} />
      ) : (
        <Switch.Group>
          <div className="flex items-center">
            <Switch
              checked={enabled}
              onChange={handleSwitch}
              className={`ltr-grid w-1/2 ${
                enabled ? "bg-primary-900" : "bg-secondary-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-secondary-0 transition`}
              />
            </Switch>
            <Switch.Label className="w-1/2 text-center">
              {project.status === "OPEN" ? "باز" : "بسته"}
            </Switch.Label>
          </div>
        </Switch.Group>
      )}
    </div>
  );
}

export default ToggleProjectStatus;

// "status":"CLOSED"
