import { useMemo, useState } from "react";
import { projects } from "../data/projects";

export function useProjectFilter() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "Todos") {
      return projects;
    }

    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredProjects,
  };
}