import produce from "immer";

const baseState = [
  {
    todo: "Step 1",
    done: true,
  },
  {
    todo: "Step 2",
    done: false,
  },
];

const nextState = produce(baseState, (draftState) => {
  draftState.push({ todo: "Step 3", done: false });
  draftState[1].done = true;
});

console.log(nextState);
