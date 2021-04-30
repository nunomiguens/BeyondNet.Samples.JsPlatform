import checkPropTypes from "check-prop-types";

const CheckPropTypes = (currentPropTypes, expectedProps) =>
  checkPropTypes(currentPropTypes, expectedProps, "props", name);

export default CheckPropTypes;
