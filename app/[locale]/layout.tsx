import type { Metadata } from "next";
import "./../globals.css";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { MainContextProvider } from "./context/MainContext";
import ThemLayout from "./ThemLayout";
import { ConfigProvider } from "antd";
type RootLayoutProps = {
  children: React.ReactNode;

};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: RootLayoutProps) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <NextIntlClientProvider messages={messages}>
        <body>
          {" "}
          <ConfigProvider direction="rtl">
            <ThemLayout>{children}</ThemLayout>
          </ConfigProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
