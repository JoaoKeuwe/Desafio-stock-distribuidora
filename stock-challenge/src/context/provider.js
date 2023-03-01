import PropTypes from "prop-types";
import Context from "./context";
import React, { useState } from "react";

export default function Provider({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const context = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    selectedColor,
    setSelectedColor,
  };
  return <Context.Provider value={context}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
