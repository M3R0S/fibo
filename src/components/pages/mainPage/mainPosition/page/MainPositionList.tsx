import React, { FC, useEffect, useState } from "react";
// import cl from "../../../../../assets/styles/pages/mainPage/mainPosition/mainPosition.module.sass";
// import MainProductItem from "./MainPositionItem";
// import { Element } from "react-scroll";
// import { TSectionName } from "../../../../../store/slice/mainPosition/types/mainPositionTypes";
// import { useLazyGetMainPositionListQuery } from "../../../../../store/slice/mainPosition/mainPositionApi";
// import { useAppDispatch } from "../../../../../hook/storeHook/useStore";
// import useElementOnScreen from "../../../../../hook/useElementOnScreen/useElementOnScreen";
// import { setIdActive } from "../../../../../store/slice/navbarSlice";
// import { setLoadingTime } from "../../../../../store/slice/mainPosition/mainPositionSlice";
// import Loader from "../../../../ui/assets/loader/Loader";

// interface IMainPositionList {
//   endpoint: TSectionName;
//   title: string;
//   idEllement: string;
// }

// const MainPositionList: FC<IMainPositionList> = ({
//   endpoint,
//   title,
//   idEllement,
// }) => {
//   const [trigger, { data: list = [], isLoading, error }] =
//     useLazyGetMainPositionListQuery();

//   const dispatch = useAppDispatch();
//   const [localTimeLoading, setLocalTimeLoading] = useState<number | null>(null);

//   const containerRef = useElementOnScreen(
//     { threshold: 0.7 },
//     idEllement,
//     () => {
//       dispatch(setIdActive(idEllement));
//       trigger(endpoint);
//     },
//     () => dispatch(setIdActive(null))
//   );

//   useEffect(() => {
//     setLocalTimeLoading(Date.now());
//   }, []);

//   useEffect(() => {
//     localTimeLoading && dispatch(setLoadingTime(Date.now() - localTimeLoading));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isLoading]);   

//   return (
//     <Element name={idEllement}>
//       <section className={cl.group_card}>
//         <h1 ref={containerRef}>{title}</h1>
//         {error && <h1>Ошибка</h1>}
//         {isLoading && <Loader></Loader>}
//         <div className={cl.group_items}>
//           {list.map((item) => (
//             <MainProductItem {...item} key={item.id + item.title} />
//           ))}
//         </div>
//       </section>
//     </Element>
//   );
// };

// export default MainPositionList;
