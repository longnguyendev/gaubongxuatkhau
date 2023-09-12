import { useLocalStorage } from "usehooks-ts";

export interface CartItem {
  id: string;
  total: number;
}

export const useCart = () => {
  const [value, setValue] = useLocalStorage<CartItem[]>("cart", []);

  const onAdd = (id: string, total?: number) =>
    value.some((item) => item.id === id)
      ? setValue(
          value.map((item) =>
            item.id === id
              ? { ...item, total: total ? total : item.total + 1 }
              : item
          )
        )
      : setValue([...value, { id, total: 1 }]);

  const onRemove = (id: string) => {
    const newdata = value.filter((item) => {
      return item.id !== id;
    });
    setValue(newdata);
  };

  const total = value?.reduce((total, item) => total + item.total, 0) ?? 0;

  return {
    onAdd,
    onRemove,
    total,
    value,
  };
};
