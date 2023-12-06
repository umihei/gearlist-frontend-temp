import { memo } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { GearRegistrationForm } from "./GearRegistrationForm";
import {GearDetail} from "./GearDetail"
import {GearListRegistration} from "./GearListRegistration"
import {HeaderLayout} from "./HeaderLayout"
import {GearList} from "./GearList"
import {GearListList} from "./GearListList"
import {GearEdit} from "./GearEdit"
import {GearListDetail} from "./GearListDetail"

export const Router = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout> <Home /></ HeaderLayout>} />
      <Route path="/gearresister" element={<HeaderLayout><GearRegistrationForm /></ HeaderLayout>} />
      <Route path="/geardetail" element={<HeaderLayout><GearDetail /></ HeaderLayout>} />
      <Route path="/gearlistregistration" element={<HeaderLayout><GearListRegistration /></ HeaderLayout>} />
      <Route path="/gearlist" element={<HeaderLayout><GearList /></ HeaderLayout>} />
      <Route path="/gearlistdetail" element={<HeaderLayout><GearListDetail /></ HeaderLayout>} />
      <Route path="/gearlistlist" element={<HeaderLayout><GearListList /></ HeaderLayout>} />
      <Route path="/gearedit" element={<HeaderLayout><GearEdit /></ HeaderLayout>} />
    </Routes>
  );
});
