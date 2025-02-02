import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useAppSelector } from "@/hooks/useRedux";
import { HomeIcon } from "lucide-react";
import { Link } from "react-router";

export function TopBreadCrumb() {
  const { breadCrumb } = useAppSelector((state) => state.breadCrumb);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <HomeIcon className="w-5 h-5" />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {breadCrumb.map((item, index) => (
          <BreadcrumbItem key={index}>
            {index === breadCrumb.length - 1 ? (
              <BreadcrumbPage>{item.name}</BreadcrumbPage>
            ) : (
              <>
                <BreadcrumbLink>
                  <Link to={item.path}>{item.name}</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
