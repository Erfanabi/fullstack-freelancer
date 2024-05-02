import { HiCollection, HiHome } from "react-icons/hi";
import CustomNavLink from "../../ui/CustomNavLink";
import AppLayout from "../../ui/layout/AppLayout";
import AppSidebar from "../../ui/layout/AppSidebar";

function FreelancerLayout() {
  return (
    <AppLayout>
      <AppSidebar>
        <CustomNavLink to="dashboard">
          <HiHome className="icon-doahboard" />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="projects">
          <HiCollection className="icon-doahboard" />
          <span>پروژه ها</span>
        </CustomNavLink>

        <CustomNavLink to="proposals">
          <HiCollection className="icon-doahboard" />
          <span>درخواست ها</span>
        </CustomNavLink>
      </AppSidebar>
    </AppLayout>
  );
}

export default FreelancerLayout;
