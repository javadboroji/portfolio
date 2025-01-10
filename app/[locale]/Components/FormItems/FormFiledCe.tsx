import { FormControl, FormField, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormItem from "antd/es/form/FormItem";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface IFormFiledCe {
  methods: UseFormReturn<any>;
  name: string;
  formItemCls: string;
  placeholder: string;
  inpType?: string;
}
const FormFiledCe: React.FC<IFormFiledCe> = ({
  formItemCls,
  name,
  placeholder,
  inpType,
  methods,
}) => {
  return (
    <FormField
      control={methods.control}
      name={name}
      render={({ field }) => (
        <FormItem className={formItemCls}>
          <FormControl>
            <Input
              type={inpType ? inpType : "text"}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFiledCe;
