import { useMutation } from "@tanstack/react-query";
import { runCode } from "../../services/endpoint";


export const useRunCode = () => {
  return useMutation({ mutationFn: runCode });
};
