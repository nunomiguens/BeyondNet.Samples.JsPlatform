const columns = [
  {
    name: "FirstName",
    label: "First Name",
    isVisible: true,
    isSorted: true,
    isSortedAsc: false
  },
  {
    name: "LastName",
    label: "Last Name",
    isVisible: true,
    isSorted: false,
    isSortedAsc: false
  },
  {
    name: "PhoneNumber",
    label: "Phone Number",
    isVisible: true,
    isSorted: false,
    isSortedAsc: false
  },
  {
    name: "State",
    label: "State",
    isVisible: true,
    isSorted: false,
    isSortedAsc: false
  },
  {
    name: "ZipCode",
    label: "ZipCode",
    isVisible: false,
    isSorted: false,
    isSortedAsc: false
  }
];
const options = [
  {
    id: "1",
    name: "Start Distribution",
    event: () => {}
  },
  {
    id: "2",
    name: "Start Update",
    event: () => {}
  },
  {
    id: "3",
    name: "Export",
    event: () => {}
  }
];

const defaultProps = {
  columns,
  options
};

const handleOnClickMock = () => {
  console.log("printing...");
};

function changeEventOptions() {
  const { options } = defaultProps;

  console.log(options);

  const [id, name, event] = options;

  console.log(id, name, event);

  let newOptions = [];
  options.forEach(element => {
    newOptions.push({ ...element, event: handleOnClickMock });
  });
  console.log(newOptions);
}
