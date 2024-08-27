export function TaskDetail({ detail }) {
  if (!detail) return null;
  return (
    <div>
      <h3>{detail.title}</h3>
      <div>{detail.id}</div>
      <div>{detail.isCompleted ? "COMPLETED" : "PENDING"}</div>
    </div>
  );
}
