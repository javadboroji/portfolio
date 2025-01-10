import { FormControl, FormField, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormItem from "antd/es/form/FormItem";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface IFormFiledCe {
  methods: UseFormReturn<any>;
  name: string;
  formItemCls: string;
  placeholder: string;
  inpType?: string;
  rows: number;
}
const FormTextArea: React.FC<IFormFiledCe> = ({
  formItemCls,
  name,
  placeholder,
  methods,
  rows,
}) => {
  return (
    <FormField
      control={methods.control}
      name={name}
      render={({ field }) => (
        <FormItem className={formItemCls}>
          <FormControl>
            <Textarea rows={rows} placeholder={placeholder} {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTextArea;
