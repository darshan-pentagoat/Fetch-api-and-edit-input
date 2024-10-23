// import React, { useState } from "react";

// const PasswordValidator = () => {
//   const [password, setPassword] = useState("");

//   const handleChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const validator = () => {
//     if (password.length == 0) {
//       return <p></p>;
//     } else if (password.length <= 5) {
//       return <p>Too short</p>;
//     } else if (password.length > 5 && password.length < 8) {
//       return <p>Good</p>;
//     } else {
//       return <p>Strong</p>;
//     }
//   };

//   return (
//     <>
//       <span>Enter Password: </span>
//       <input type="text" onChange={handleChange} value={password} />
//       {validator()}
//     </>
//   );
// };

// export default PasswordValidator;
import React, { useState } from "react";
import validator from "validator";

const PasswordValidator = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is Strong Password");
    } else {
      setErrorMessage("Is Not Strong Password");
    }
  };

  return (
    <>
      <span>Enter Password: </span>
      <input
        type="text"
        onChange={(e) => validate(e.target.value)}
      ></input>{" "}
      <br />
      {errorMessage === "" ? null : (
        <span
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {errorMessage}
        </span>
      )}
    </>
  );
};

export default PasswordValidator;
