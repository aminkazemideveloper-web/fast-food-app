import { useEffect, useMemo, useRef } from "react";
import Branch from "../../components/template/Branch/Branch";
import { useGetAllBranches } from "../../services/hooks/branches/useGetAllBranches";
import ErrorPage from "../Error/Page";
import styles from "./BranchPage.module.css";

function BranchPage() {
  useEffect(() => {
    document.title = "شعبه ها";
  }, []);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useGetAllBranches();

  const observerRef = useRef<HTMLDivElement | null>(null);

  const branches = useMemo(() => {
    return data?.pages.flat() ?? [];
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        if (firstEntry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 0.1,
      },
    );

    const currentElement = observerRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (status === "pending") {
    return <div>در حال دریافت...</div>;
  }

  if (status === "error") {
    return <ErrorPage />;
  }

  return (
    <div className={styles.branchs}>
      <Branch branches={branches} />

      <div ref={observerRef}>
        {isFetchingNextPage && (
          <p style={{ textAlign: "center", marginBlockStart: "3rem" }}>
            در حال دریافت شعبه‌های بیشتر...
          </p>
        )}

        {!hasNextPage && (
          <p style={{ textAlign: "center", marginBlockStart: "3rem" }}>
            همه شعبه‌ها نمایش داده شدند.
          </p>
        )}
      </div>
    </div>
  );
}

export default BranchPage;
