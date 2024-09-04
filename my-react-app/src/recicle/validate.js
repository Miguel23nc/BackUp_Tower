export const validateForm1 = (formData1) => {
  const newErrors = {};

  if (!formData1.ruc) {
    newErrors.ruc = "RUC is required";
  } else if (formData1.ruc.length < 11) {
    newErrors.ruc = "RUC must be 11 characters long";
  }
  if (!formData1.name) newErrors.name = "Name is required";
  if (!formData1.email) newErrors.email = "Email is required";
  if (!formData1.password) {
    newErrors.password = "Password is required";
  } else if (formData1.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters long";
  }
  if (!formData1.role) newErrors.role = "Rol is Requerid";
  return newErrors;
};

export const validateForm2 = (
  selectedModule,
  selectedSubModule,
  selectedPermissions
) => {
  const errors = {};

  if (!selectedModule) errors.selectedModule = "Module is required";
  if (!selectedSubModule) errors.selectedSubModule = "Submodule is required";
  if (selectedPermissions.length === 0)
    errors.selectedPermissions = "At least one permission is required";

  return errors;
};
export const validateClient1 = (clientData) => {
  const {
    ruc,
    razonSocial,
    direction,
    phoneNumber,
    email,
    password,
    economicSector,
    condition,
  } = clientData;
  const errors = {};

  if (!ruc) errors.ruc = "RUC is required";
  if (!razonSocial) errors.razonSocial = "Razon Social is required";
  if (!direction) errors.direction = "Direction is required";
  if (!phoneNumber) errors.phoneNumber = "Phone number is required";
  if (!email) errors.email = "Email is required";
  if (!password) errors.password = "Password is required";
  if (!economicSector) errors.economicSector = "Economic sector is required";
  if (!condition) errors.condition = "Condition is required";

  return errors;
};
export const validateClient2 = (directory) => {
  const errors = {};
  const {
    name,
    charge,
    emailDirectory,
    phoneCodeDirectory,
    phoneNumberDirectory,
  } = directory;

  if (!name) errors.name = "Name is required";
  if (!charge) errors.charge = "Charge is required";
  if (!emailDirectory) errors.emailDirectory = "Email is required";
  if (!phoneCodeDirectory) errors.phoneCodeDirectory = "Phone code is required";
  if (!phoneNumberDirectory)
    errors.phoneNumberDirectory = "Phone number is required";
  
  return errors;
};
