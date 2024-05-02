import { useState } from "react";
import Table from "../../../ui/Table";
import Modal from "../../../ui/modal/Modal";
import ChangeUserStatus from "./ChangeUserStatus";

function UsersRow({ user, index }) {
  const statusStyle = [
    { lable: "رد شده", class: "bg-danger" },
    { lable: "در انتظار تایید", class: "bg-warning" },
    { lable: "تایید شده", class: "bg-success" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <Table.Row key={user._id}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>{user.phoneNumber}</Table.Td>
      <Table.Td>{user.role}</Table.Td>

      <Table.Td>
        <div className={`badge ${statusStyle[user.status].class}`}>
          {statusStyle[user.status].lable}
        </div>
      </Table.Td>

      <Table.Td>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
        {open && (
          <Modal onClose={() => setOpen(false)} title="تغییر وضعیت کاربر">
            <ChangeUserStatus
              userId={user._id}
              onClose={() => setOpen(false)}
            />
          </Modal>
        )}
      </Table.Td>
    </Table.Row>
  );
}

export default UsersRow;
