import Empty from "../../../ui/Empty";
import Loader from "../../../ui/Loader";
import Table from "../../../ui/Table";
import useUsers from "../useUsers";
import UsersRow from "./UsersRow";
import { columns } from "./usersData/data";

function UsersTable() {
  const { users = {}, isLoading } = useUsers();
  // console.log(projects);

  // ! isLoading ==> loading...
  // ! project.length = 0 => empty ...

  if (isLoading) return <Loader />;

  if (!users.length) return <Empty resourceName="کاربری" />;

  return (
    <div className="overflow-auto max-h-[78vh]">
      <Table>
        <Table.Header>
          <tr className="bg-secondary-100">
            {columns.map((th) => (
              <th className="table-th" key={th.id}>
                {th.name}
              </th>
            ))}
          </tr>
        </Table.Header>
        <Table.Body>
          {users.map((user, index) => {
            return <UsersRow user={user} index={index} key={user._id} />;
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default UsersTable;
