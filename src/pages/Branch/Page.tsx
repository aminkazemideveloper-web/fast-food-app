import { useEffect, useMemo, useRef, useState } from "react";
import Branch from "../../components/template/Branch/Branch";
import { useGetAllBranches } from "../../services/hooks/branches/useGetAllBranches";
import ErrorPage from "../Error/Page";
import styles from "./BranchPage.module.css";
import { useDebounce } from "../../hooks/useDebounce";
import BranchesSkeleton from "../../components/skeletons/BranchesSkeleton/BranchesSkeleton";

function BranchPage() {
  const [search, setSearch] = useState("");
  const { text: debouncedSearch } = useDebounce(search, 500);

  useEffect(() => {
    document.title = "شعبه ها";
  }, []);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isFetching: loading,
  } = useGetAllBranches(debouncedSearch);

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
    return <BranchesSkeleton />;
  }

  if (status === "error") {
    return <ErrorPage />;
  }

  return (
    <div className={styles.branchs}>
      <Branch
        branches={branches}
        search={search}
        onSearch={setSearch}
        loading={loading}
      />

      <div ref={observerRef}>
        {isFetchingNextPage && (
          <p style={{ textAlign: "center", marginBlockStart: "3rem" }}>
            در حال دریافت شعبه‌های بیشتر...
          </p>
        )}

        {loading && !isFetchingNextPage && (
          <p style={{ textAlign: "center", marginBlockStart: "3rem" }}>
            {" "}
            در حال جستجو...{" "}
          </p>
        )}

        {!hasNextPage && !loading && (
          <p style={{ textAlign: "center", marginBlockStart: "3rem" }}>
            {" "}
            {search
              ? "شعبه‌ای با این مشخصات پیدا نشد."
              : "همه شعبه‌ها نمایش داده شدند."}{" "}
          </p>
        )}
      </div>
    </div>
  );
}

export default BranchPage;
