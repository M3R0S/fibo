import React, { FC } from "react";
// import cl from "../../../../../assets/styles/pages/mainPage/mainPosition/mainPosition.module.sass";
// import { useAppDispatch } from "../../../../../hook/storeHook/useStore";
// import { TSectionName } from "../../../../../store/slice/mainPosition/types/mainPositionTypes";


// interface TMainPositionItem {
//   title: string;
//   info: string;
//   price: number;
//   img: string;
//   id: string;
//   type: TSectionName;
//   weightProduct: number;
// }

// const MainProductItem: FC<IMainProductItemProps> = ({
//   title,
//   info,
//   price,
//   img,
//   id,
//   type,
//   weightProduct,
// }) => {
//   const dispatch = useAppDispatch();

//   return (
//     <article className={cl.group_item}>
//       <header className={cl.header_info}>
//         <img src={img} alt="product card" />
//         <div className={cl.header_title}>
//           <h2>{title}</h2>
//         </div>
//         <p>
//           {info.length > 150 ? info.substring(0, 150) + "..." : info}{" "}
//           {type !== "pizza" ? weightProduct + "г." : ""}
//         </p>
//       </header>
//       <main className={cl.footer_info}>
//         <strong>от {price} ₽</strong>
//         <button
//           onClick={() => {
//             // dispatch(setOpenModal([type, id]));
//           }}
//           className={cl.basket}
//         >
//           В корзину
//         </button>
//       </main>
//     </article>
//   );
// };

// export default MainProductItem;
