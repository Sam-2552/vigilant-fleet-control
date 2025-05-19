
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Users, Briefcase, Shield } from "lucide-react";

export type Role = "driver" | "owner" | "client" | "admin";

interface RoleSelectorProps {
  value: Role;
  onChange: (value: Role) => void;
  disabled?: boolean;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ value, onChange, disabled = false }) => {
  const handleValueChange = (newValue: string) => {
    onChange(newValue as Role);
  };

  return (
    <Select value={value} onValueChange={handleValueChange} disabled={disabled}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select your role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Role</SelectLabel>
          <SelectItem value="driver" className="flex items-center">
            <span className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Driver
            </span>
          </SelectItem>
          <SelectItem value="owner">
            <span className="flex items-center">
              <Briefcase className="h-4 w-4 mr-2" />
              Owner
            </span>
          </SelectItem>
          <SelectItem value="client">
            <span className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Client
            </span>
          </SelectItem>
          <SelectItem value="admin">
            <span className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              Admin
            </span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default RoleSelector;
