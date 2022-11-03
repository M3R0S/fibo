import React, { FC } from "react";
// import cl from "../../../../assets/styles/pages/mainPage/mainPosition/mainPositionModal.module.sass";
// import { useAppSelector } from "../../../../../hook/storeHook/useStore";
// import { useGetMainPositionModalItemQuery } from "../../../../../store/slice/mainPosition/mainPositionApi";
// import Loader from "../../../../ui/assets/loader/Loader";
// import MainPositionModalItem from "./MainPositionModalItem";
// // import MainPositionModalItemPizza from "./MainPositionModalItemPizza";

// const MainPositionModalContent: FC = () => {
//   const { typeModal, idModal, openModal } = useAppSelector(
//     (state) => state.mainPositionSlice
//   );

//   const {
//     data: item,
//     isLoading,
//     error,
//   } = useGetMainPositionModalItemQuery({
//     type: typeModal,
//     id: idModal,
//   });

//   function selectClassName(): string {
//     if (isLoading) [cl.modal_card, cl.modal_card_loading].join(" ");
//     if (!isLoading && item) [cl.modal_card, cl.modal_card_enabled].join(" ");
//     return [cl.modal_card, cl.modal_card_disabled].join(" ");
//   }

//   if (error) return <h1>Ошибка</h1>;
//   if (isLoading) return <Loader className={cl.loader} />;
//   if (item) {
//     return item.type === "pizza" ? (
//       <MainPositionModalItemPizza {...item} />
//     ) : (
//       <MainPositionModalItem {...item} />
//     );
//   } else {
//     return null
//   }
// };

// export default MainPositionModalContent;
