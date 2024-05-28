import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const PersonalDetails = () => {
  return (
    <div className="p-4 space-y-2">
      <div className="flex gap-2 items-center">
        <div className="w-full">
          <Label>First Name</Label>
          <Input placeholder="First name" />
        </div>
        <div className="w-full">
          <Label>First Name</Label>
          <Input placeholder="Last name" />
        </div>
      </div>
      <div>
        <Label>Email</Label>
        <Input type="email" placeholder="name@example.com" />
      </div>
      <div>
        <Label>Phone number</Label>
        <Input type="text" placeholder="+919876543210" />
      </div>
      <div>
        <label>Address</label>
        <Input type="text" placeholder="Address" />
      </div>
    </div>
  );
};

export default PersonalDetails;
