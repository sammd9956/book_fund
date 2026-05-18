export function formatMySQLDate(date, withTime = false) {
  const d = new Date(date);

  const localDate = new Date(
    d.getTime() - d.getTimezoneOffset() * 60000
  );

  const iso = localDate.toISOString();

  return withTime
    ? iso.slice(0, 19).replace("T", " ")
    : iso.slice(0, 10);
}

