import React, { useState } from 'react';
import {
  VStack,
  Heading,
  Box,
  Input,
  Textarea,
  Button,
  Select,
  FormLabel,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import {GearRegistrationForm} from "./GearRegistrationForm"
import {Home} from "./Home"
import {Router} from "./Router"

import { BrowserRouter } from "react-router-dom";

export const App = () => {

  return (<BrowserRouter>
  <Router />
  </ BrowserRouter>)
}