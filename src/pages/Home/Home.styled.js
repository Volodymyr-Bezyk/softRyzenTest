import styled from 'styled-components';
import { Link } from 'react-router-dom';

// export const Menu = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

// export const CreateNewEvent = styled(Link)`
//   display: inline-flex;
//   padding: ${p => p.theme.space[8]}px ${p => p.theme.space[8]}px;
//   background-color: ${p => p.theme.colors.accent};
//   border-radius: ${p => p.theme.radii.button};
//   box-shadow: ${p => p.theme.shadows.button};
// `;

// export const SortListWrap = styled.div`
//   position: relative;
//   margin-right: ${p => p.theme.space[8]}px;
//   /* overflow: hidden; */

//   /* width: ${p => (p.$showSortMenu ? '170px' : '200px')}; */

//   background-color: ${p => p.theme.colors.white};
//   border-radius: ${p => p.theme.radii.button};
//   box-shadow: ${p => p.theme.shadows.button};
// `;

// export const MenuBtn = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding-top: ${p => p.theme.space[8]}px;
//   padding-bottom: ${p => p.theme.space[8]}px;
//   border-radius: ${p => p.theme.radii.button};

//   //TODO: по умові відступи горизонтальні ${p => p.theme.space[8]}px
//   padding-left: ${p =>
//     p.$showSortMenu ? p.theme.space[12] : p.theme.space[8]}px;
//   padding-right: ${p =>
//     p.$showSortMenu ? p.theme.space[12] : p.theme.space[8]}px;
//   width: 100%;
//   background-color: ${p => p.theme.colors.white};

//   //TODO: border
//   /* border-bottom: ${p =>
//     p.$showSortMenu
//       ? `1px solid ${p.theme.colors.sortListItemColor}`
//       : 'none'}; */
// `;

// export const FilterText = styled.span`
//   display: ${p => (p.$showSortMenu ? 'block' : 'none')};

//   color: ${p => p.theme.colors.accent};
//   font-family: ${p => p.theme.fontFamily.primary};
//   font-size: ${p => p.theme.fontSizes[4]}px;
//   font-weight: ${p => p.theme.fontWeights.medium};
//   line-height: ${p => p.theme.lineHeights.normal};
// `;

// export const SortList = styled.ul`
//   /* position: absolute;
//   left: 0;
//   top: 100%; */
//   display: ${p => (p.$showSortMenu ? 'block' : 'none')};
//   margin-top: ${p => p.theme.space[2]}px;
//   padding-bottom: ${p => p.theme.space[2]}px;
// `;

// export const SortListItem = styled.li`
//   padding: ${p => p.theme.space[2]}px ${p => p.theme.space[12]}px;

//   &:not(:last-child) {
//     border-bottom: 1px solid ${p => p.theme.colors.sortListItemColor};
//   }
// `;

// export const SortListItemButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   background-color: ${p => p.theme.colors.white};
// `;
// export const SortListItemText = styled.span`
//   color: ${p => p.theme.colors.sortListItemColor};
//   font-family: ${p => p.theme.fontFamily.primary};
//   font-size: ${p => p.theme.fontSizes[3]}px;
//   font-weight: ${p => p.theme.fontWeights.regular};
//   line-height: ${p => p.theme.lineHeights.max};
// `;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const FilterButton = styled.button`
  margin-right: ${p => p.theme.space[12]}px;

  display: flex;
  align-items: center;

  background-color: ${p => p.theme.colors.white};
  padding-top: ${p => p.theme.space[8]}px;
  padding-bottom: ${p => p.theme.space[8]}px;
  padding-left: ${p => p.theme.space[8]}px;
  padding-right: ${p => p.theme.space[8]}px;
  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.button};
`;

export const SortButtonWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  height: 56px;
  margin-right: ${p => p.theme.space[12]}px;
`;

export const SortButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;

  padding: ${p => p.theme.space[8]}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.button};

  svg {
    transform: ${p => (p.$showSortMenu ? 'translateX(-8px)' : 'translateX(0)')};
    transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
  }
`;

export const SortTextWrap = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  text-align: start;

  height: 100%;
  width: 170px;
  padding: ${p => p.theme.space[8]}px ${p => p.theme.space[12]}px;
  background-color: ${p => p.theme.colors.white};
  border-bottom: 1px solid ${p => p.theme.colors.sortListItemColor};

  border-top-left-radius: ${p => p.theme.radii.button};
  border-top-right-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.button};

  opacity: ${p => (p.$showSortMenu ? 1 : 0)};
  transform: ${p => (p.$showSortMenu ? 'translateX(-114px)' : 'translateX(0)')};
  pointer-events: ${p => (p.$showSortMenu ? 'all' : 'none')};
  transition: transform 250ms ease-in-out, opacity 100ms ease-in-out;
`;

export const SortText = styled.span`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.normal};
`;

export const SortList = styled.ul`
  position: absolute;
  top: 56px;
  left: -114px;

  display: block;
  width: 170px;
  height: 200px;

  border-bottom-left-radius: ${p => p.theme.radii.button};
  border-bottom-right-radius: ${p => p.theme.radii.button};

  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.button};

  opacity: ${p => (p.$showSortMenu ? 1 : 0)};
  transform: ${p => (p.$showSortMenu ? 'translateY(0)' : 'translateY(-30%)')};
  pointer-events: ${p => (p.$showSortMenu ? 'all' : 'none')};
  transition: transform 250ms ease-in-out 250ms, opacity 100ms ease-in-out;
`;

export const AddEventLink = styled(Link)`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.accent};
  padding-top: ${p => p.theme.space[8]}px;
  padding-bottom: ${p => p.theme.space[8]}px;
  padding-left: ${p => p.theme.space[8]}px;
  padding-right: ${p => p.theme.space[8]}px;
  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.button};
`;
