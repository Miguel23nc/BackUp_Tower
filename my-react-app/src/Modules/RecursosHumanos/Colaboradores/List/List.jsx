import { Column } from "primereact/column";
import React, { useEffect } from "react";
import { getEmployees } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import EditEmployee from "../Permissions/EditEmployee";
import DeleteEmployee from "../Permissions/DeleteEmployee";
import ListPrincipal from "../../../../components/Principal/List/List";
import DetailEmployee from "../Permissions/DetailEmployee";

const List = ({ permissionEdit, permissionDelete, permissionRead }) => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    if (employees.length === 0) dispatch(getEmployees());
  }, [dispatch]);

  return (
    <ListPrincipal
      permissionDelete={permissionDelete}
      permissionEdit={permissionEdit}
      permissionRead={permissionRead}
      DeleteItem={DeleteEmployee}
      EditItem={EditEmployee}
      DetailItem={DetailEmployee}
      content={employees}
    >
      <Column
        field="lastname"
        header="Apellidos"
        sortable
        style={{ paddingLeft: "60px" }}
      ></Column>
      <Column field="name" header="Nombres" sortable></Column>
      <Column field="email" header="Email" sortable></Column>
      <Column field="business" header="Empresa" sortable></Column>
      <Column field="state" header="Estado" sortable></Column>
    </ListPrincipal>
  );
};

export default List;
