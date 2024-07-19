import { useMemo, useState } from "react";

export function Task1() {
  const [form, setForm] = useState({
    a: "",
    b: "",
  });

  function updateFormValues(e) {
    const value = e.target.value;
    if (/[0-9]/gi.test(value)) {
      const name_ = e.target.name;
      setForm((oldForm) => ({
        ...oldForm,
        [name_]: value,
      }));
    }
  }

  const result = useMemo(() => +form.a + +form.b, [form.a, form.b]);

  return (
    <>
      <h2>
        Создайте компонент React, который отображает сумму двух чисел. Используй хук useState для хранения значений
        чисел и хук useMemo для кэширования результата суммы. При изменении значений чисел, сумма должна пересчитываться
        только тогда, когда необходимо.
      </h2>
      <h1>{result}</h1>
      <div>
        <input type="text" name="a" onChange={updateFormValues} value={form.a} />
        <input type="text" name="b" onChange={updateFormValues} value={form.b} />
      </div>
    </>
  );
}
