const API_URL = "http://localhost:3008/grades"; // adapte le port si nécessaire

export const getGradesByStudent = async (studentId) => {
  try {
    const response = await fetch(`${API_URL}/student/${studentId}`);
    if (!response.ok) throw new Error("Failed to fetch grades");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const saveGrade = async (grade) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(grade),
    });
    if (!response.ok) throw new Error("Failed to save grade");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
