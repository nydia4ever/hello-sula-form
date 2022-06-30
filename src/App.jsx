import React from "react";
import { CreateForm } from "sula";
import ModeSwitcher from "../components/ModeSwitcher";

export default () => {
  const [mode, setMode] = React.useState("create");

  const config = {
    mode,
    initialValues: {
      nihao: "world"
    },
    fields: [
      {
        name: "id",
        label: "id",
        field: {
          type: "input",
          props: {
            placeholder: "id"
          }
        }
      },
      {
        name: "name",
        label: "姓名",
        field: {
          type: "input",
          props: {
            placeholder: "请输入"
          }
        }
      },
      {
        name: "profession",
        label: "产品",
        field: {
          type: "input",
          props: {
            placeholder: "请输入"
          }
        }
      },
      {
        name: "rooms",
        label: "是否上线",
        valuePropName: "checked",
        field: "switch"
      }
    ],
    remoteValues: {
      url: "https://www.mocky.io/v2/5ed7af12320000a0cc274b00",
      method: "get"
    },
    submit: {
      convertParams: (ctx) => {
        console.log(
          "ctx.form.getFieldsValue(true): ",
          ctx.form.getFieldsValue(true)
        );
        return ctx.params;
      },
      url: "https://www.mocky.io/v2/5185415ba171ea3a00704eed",
      method: "POST"
    }
  };

  const handleChange = (value) => {
    setMode(value);
  };

  return (
    <>
      <ModeSwitcher value={mode} onChange={handleChange} />
      <CreateForm {...config} key={mode} />
    </>
  );
};
