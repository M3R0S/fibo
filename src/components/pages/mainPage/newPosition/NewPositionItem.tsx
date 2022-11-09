import { FC } from "react";
import { TNewPositionItem } from "../../../../store/slice/newPositionSlice";
import cl from "../../../../assets/styles/pages/newPosition/newPosition.module.sass";
import { useAppDispatch } from "../../../../hook/storeHook/useStore";
import { setOpenModal } from "../../../../store/slice/mainProductItemSlice";

const NewPositionItem: FC<TNewPositionItem> = ({
  title,
  img,
  price,
  type,
  id,
}) => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(setOpenModal([type, id]))}
      className={cl.new_position_card}
    >
      <img src={img} alt="New Position" />
      <div className={cl.new_position_info}>
        <h2>{title}</h2>
        <strong>{price}</strong>
      </div>
    </button>
  );
};

export default NewPositionItem;
