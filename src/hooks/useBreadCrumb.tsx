import { useEffect } from "react";
import { useAppDispatch } from "./useRedux";
import { setBreadCrumb } from "@/features/breadCrumbSlice";

export const useBreadCrumb = (breadcrumb: IBreadCrumb[]) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBreadCrumb(breadcrumb));
    return () => {
      dispatch(setBreadCrumb([]));
    };
  }, [dispatch, breadcrumb]);
};
