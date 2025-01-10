"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormFiledCe from "@/app/[locale]/Components/FormItems/FormFiledCe";
import FormTextArea from "@/app/[locale]/Components/FormItems/FormTextArea";
import UploadImg from "@/app/[locale]/Components/FormItems/UploadImg";
import { UploadFile, UploadFileStatus } from "antd/es/upload/interface";

const FormSchema = z.object({
  username: z.string().nonempty("نام ونام خانوادگی اجباری می باشد"),
  email: z.string(),
  phone: z.string().optional(),
  gitAddress: z.string().url("آدرس وارد شده نادرست می باشد"),
  job: z.string().nonempty("عنوان شغلی   اجباری می باشد"),
  about: z.string(),
});
type FormSchemaType = z.infer<typeof FormSchema>;

function UserForm() {
  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      gitAddress: "",
      job: "",
      about: "",
    },
  });

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log({ ...data, fileList });
  }

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full  ">
        <div className="flex flex-wrap">
          <FormFiledCe
            formItemCls="lg:w-[32%] mx-1"
            methods={methods}
            name="username"
            placeholder="نام نام خانوادگی"
          />
          <FormFiledCe
            formItemCls="lg:w-[32%] mx-1"
            methods={methods}
            name="email"
            placeholder="ایمیل"
          />
          <FormFiledCe
            formItemCls="lg:w-[32%] mx-1"
            methods={methods}
            name="phone"
            placeholder="شماره موبایل"
          />
          <FormFiledCe
            formItemCls="lg:w-[32%] mx-1"
            methods={methods}
            name="gitAddress"
            placeholder="آدرس گیت"
          />
          <FormFiledCe
            formItemCls="lg:w-[32%] mx-1"
            methods={methods}
            name="job"
            placeholder="عنوان شغلی"
          />
          <FormTextArea
            rows={5}
            formItemCls="w-full mx-1"
            methods={methods}
            name="about"
            placeholder="درباره من"
          />
        </div>
        <UploadImg
          ImageLength={1}
          uploaderName="تصویر پروفایل"
          fileList={fileList}
          setFileList={setFileList}
        />
        <Button className="px-4 py-2" size={"lg"} type="submit">
          ثبت{" "}
        </Button>
      </form>
    </Form>
  );
}

export default UserForm;
