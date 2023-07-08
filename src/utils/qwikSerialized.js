import { componentQrl, qrl } from "@builder.io/qwik";

export const qwikSerialized = (dynamicImport, fn = "default") => {
  return componentQrl(qrl(dynamicImport, fn));
}