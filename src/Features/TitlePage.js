import { useEffect } from "react";

function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]); // Cập nhật title khi `title` thay đổi
}

export default usePageTitle;