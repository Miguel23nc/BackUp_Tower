import { useDispatch } from "react-redux";
import { setErrorsA } from "../redux/actions";
import { useEffect } from "react";

const validate = (formData) => (dispatch) => {
    const newErrors = {};

    if (!formData.ruc) newErrors.ruc = "RUC is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.module) newErrors.module = "Module is required";
    if (formData.submodules.length === 0)
      newErrors.submodules = "At least one submodule is required";
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

      dispatch(setErrorsA(newErrors));


    return Object.keys(newErrors).length === 0;
  };

  export default validate