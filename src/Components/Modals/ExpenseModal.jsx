import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
} from "@chakra-ui/react";
import Buttons from "../UI/Buttons";
import FormContainer from "../UI/FormContainer";
import Inputs from "../UI/Inputs";
import Selects from "./../UI/Selects";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, updateExpense } from "../../Redux/ExpenseSlicer";
import { v4 as uuid } from "uuid";

const ExpenseModal = ({
  type,
  openCreate,
  closeCreate,
  openUpdate,
  closeUpdate,
  selectedExpense,
}) => {
  //*-------------Unique id------------------
  const unique_id = uuid();
  const id = unique_id.slice(0, 5);

  //*-------------Using Redux functions---------
  const dispatch = useDispatch();
  const month = useSelector((state) => state.Expense.month);
  const year = useSelector((state) => state.Expense.year);

  //?------------------Adding State---------------
  const [form, setForm] = React.useState({
    title: "",
    amount: "",
    day: "",
    month: "",
    year: "",
    total: "",
  });

  //*------------------Editing State---------------
  const [edit, setEdit] = React.useState({
    title: "",
    amount: "",
    day: "",
    month: "",
    year: "",
    total: "",
  });

  //*-------------------When Update Values will be Changed-----------------
  const onChangeUpdateInput = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  //*-------------------When Update Button will be Submit-----------------
  const UpdateExpense = () => {
    if (
      edit.title === "" ||
      edit.day === "" ||
      edit.month === "" ||
      edit.year === "" ||
      edit.amount === "" ||
      edit.total === ""
    ) {
      return false;
    }

    dispatch(
      updateExpense({
        id: selectedExpense.id,
        title: edit.title,
        day: edit.day,
        month: edit.month,
        year: edit.year,
        amount: edit.amount,
        total: edit.total,
      })
    );

    setEdit({ title: "", amount: "", day: "", month: "", year: "", total: "" });
    closeUpdate();
  };

  //?-------------------When Create Values will be Changed-----------------

  const onChangeCreateInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //?-------------------When Create Button will be Submit-----------------

  const CreateExpense = (e) => {
    e.preventDefault();

    if (
      form.title === "" ||
      form.day === "" ||
      form.month === "" ||
      form.year === "" ||
      form.amount === "" ||
      form.total === ""
    ) {
      return false;
    }

    dispatch(
      addExpense({
        id: id,
        title: form.title,
        day: form.day,
        year: form.year,
        month: form.month,
        amount: form.amount,
        total: form.total,
      })
    );

    setForm({ title: "", amount: "", day: "", month: "", year: "", total: "" });
    closeCreate();
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={type === "update" ? openUpdate : openCreate}
        onClose={type === "update" ? closeUpdate : closeCreate}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight={300} fontSize={14}>
            {type === "update" ? "Update Your Expense" : "Create Your Expense"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormContainer
              label={type === "update" ? "Update Expense" : "Expense"}
            >
              <Inputs
                name="title"
                width="full"
                height={30}
                fontsize={12}
                value={type === "update" ? edit.title : form.title}
                onchange={
                  type === "update" ? onChangeUpdateInput : onChangeCreateInput
                }
              />
            </FormContainer>

            <FormContainer
              label={type === "update" ? "Update DateTime" : "DateTime"}
            >
              <Stack
                direction="row"
                w="full"
                justifyContent="space-between"
                alignItems="center"
              >
                <Inputs
                  name="day"
                  width={120}
                  height={30}
                  fontsize={12}
                  placeholder="Day"
                  length={2}
                  value={type === "update" ? edit.day : form.day}
                  onchange={
                    type === "update"
                      ? onChangeUpdateInput
                      : onChangeCreateInput
                  }
                />

                <Selects
                  name="month"
                  css="select-box"
                  value={type === "update" ? month.value : month.value}
                  options={month}
                  onchange={
                    type === "update"
                      ? onChangeUpdateInput
                      : onChangeCreateInput
                  }
                />

                <Selects
                  name="year"
                  css="select-box"
                  value={type === "update" ? year.value : year.value}
                  options={year}
                  onchange={
                    type === "update"
                      ? onChangeUpdateInput
                      : onChangeCreateInput
                  }
                />
              </Stack>
            </FormContainer>

            <FormContainer
              label={type === "update" ? "Update Amount" : "Amout"}
            >
              <Inputs
                name="amount"
                width="full"
                height={30}
                value={type === "update" ? edit.amount : form.amount}
                fontsize={12}
                onchange={
                  type === "update" ? onChangeUpdateInput : onChangeCreateInput
                }
              />
            </FormContainer>

            <FormContainer label={type === "update" ? "Update Total" : "Total"}>
              <Inputs
                name="total"
                width="full"
                height={30}
                value={type === "update" ? edit.total : form.total}
                fontsize={12}
                onchange={
                  type === "update" ? onChangeUpdateInput : onChangeCreateInput
                }
              />
            </FormContainer>
          </ModalBody>

          <ModalFooter>
            <Buttons
              title={
                type === "update"
                  ? "Update Expense Task"
                  : "Create Expense Task"
              }
              width="full"
              weight={200}
              height={30}
              fontsize={12}
              bg={type === "update" ? "red" : "#350f55"}
              onClick={type === "update" ? UpdateExpense : CreateExpense}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default ExpenseModal;
